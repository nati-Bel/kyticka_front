import { useState, useEffect } from "react";
import APIservice from "../helpers/APIservice";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./nav.scss";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";


export default function AdminNav() {
  const [openNav, setOpenNav] = React.useState(false);

  const url = "http://127.0.0.1:8000/api/admin/galleries";
  let galleries = APIservice(url);
  console.log(galleries);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [authToken, setAuthToken] = useState(null);
  const navigateTo = useNavigate();
  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");
    if (storedAuthToken) {
      setIsLoggedIn(true);
      setAuthToken(storedAuthToken);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;";
    setAuthToken(null);
    navigateTo("/");
    setIsLoggedIn(false);
    console.log("Usuario deslogueado");
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="navList">
      <Link to="/admin/dashboard">
        <li className="navAdminItem">Fotky</li>
      </Link>
      <Link to="/admin/dashboard/albums">
        <li className="navAdminItem">Albumy</li>
      </Link>
      <Link to="">
        <li className="navAdminItem">Prezentácia</li>
      </Link>
      <Link to="/admin/dashboard/newphoto">
        <li className="navAdminItem">+ Pridať fotku</li>
      </Link>
      <Link to="/admin/dashboard/newalbum">
        <li className="navAdminItem">+ Pridať album</li>
      </Link>
    </ul>
  );

  return (
    <Navbar className="navContainer">
      <div className="mx-auto flex gap-10 items-center">
        <Link to="/">
          <img className="navLogo" src={logo}></img>
        </Link>

        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Odhlásiť sa <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="brown"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="brown"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div>{navList}</div>
        
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="navAdminItem font-bold"
            >
              Odhlásiť sa <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        
      </Collapse>
    </Navbar>
  );
}



          
       
