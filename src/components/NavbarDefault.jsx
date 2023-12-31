import React from "react";
import './nav.scss'
import {
  Navbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="navList">
      <Link to="/">
        <li className="navItem">Domov</li>
      </Link>
      <Link to="/galeria">
        <li className="navItem">Galeria</li>
      </Link>
      <Link to="/kontakt">
        <li className="navItem">Kontakt</li>
      </Link>
    </ul>
  );

  return (
    <Navbar className="navContainer">
      <div className="subCont container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <img className="navLogo" src={logo}></img>
        </Link>
        <div className=" hidden lg:block">{navList}</div>
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
      </Collapse>
    </Navbar>
  );
}
