import AdminNav from "./AdminNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <>
            <AdminNav></AdminNav>
            <Outlet/>
        </>
    )
}

export default Dashboard