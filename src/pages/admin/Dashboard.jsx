import {NavbarAdmin} from "../../components";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <section className="">
        <NavbarAdmin></NavbarAdmin>
        <Outlet />
      </section>
    </>
  );
};


