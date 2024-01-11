import AdminNav from "../../components/AdminNav";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <section className="adminBody">
        <AdminNav></AdminNav>
        <Outlet />
      </section>
    </>
  );
};


