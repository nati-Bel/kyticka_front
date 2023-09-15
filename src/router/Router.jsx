import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Gallery from "../pages/user/Gallery";
import PhotosOutlet from "../pages/admin/PhotosOutlet";
import GalleriesOutlet from "../pages/admin/GalleriesOutlet";


const Router = () => {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/galeria" element={<Gallery/>}></Route>
                <Route path="/admin/dashboard" element={<Dashboard/>}>
                    <Route path="/admin/dashboard" element={<PhotosOutlet/>}></Route>
                    <Route path="/admin/dashboard/galerie" element={<GalleriesOutlet/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router