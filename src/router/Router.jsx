import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PhotosOutlet, GalleriesOutlet, FormPhotoOutlet, FormGalleryOutlet, Login, Dashboard } from "../pages/admin";
import { Home, Gallery } from "../pages/user";


const Router = () => {

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
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