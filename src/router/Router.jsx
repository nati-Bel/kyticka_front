import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Gallery from "../pages/user/Gallery";
import PhotosOutlet from "../pages/admin/PhotosOutlet";
import GalleriesOutlet from "../pages/admin/GalleriesOutlet";
import FormPhotoOutlet from "../pages/admin/FormPhotoOutlet";
import FormGalleryOutlet from "../pages/admin/FormGalleryOutlet";
import Login from "../pages/admin/Login";


const Router = () => {

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/galeria" element={<Gallery />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/admin/dashboard" element={<Dashboard />}>
              <Route path="/admin/dashboard" element={<PhotosOutlet />}></Route>
              <Route
                path="/admin/dashboard/galerie"
                element={<GalleriesOutlet />}
              ></Route>
              <Route
                path="/admin/dashboard/newphoto"
                element={<FormPhotoOutlet />}
              ></Route>
              <Route path="/admin/dashboard/newgallery" element={<FormGalleryOutlet/>}></Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default Router