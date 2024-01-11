import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PhotosOutlet, FormAlbumOutlet, AlbumsOutlet, FormPhotoOutlet, UpdateAlbumOutlet, Login, Dashboard } from "../pages/admin";
import { Home, Gallery, Album, Contact } from "../pages/user";
import { ProtectedRoute } from "./ProtectedRoute";

const Router = () => {
    
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/galeria" element={<Gallery />}></Route>
            <Route path="/galeria/:id" element={<Album />}></Route>
            <Route path="/kontakt" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>}
            >
              <Route path="/admin/dashboard" element={<PhotosOutlet />}></Route>
              <Route
                path="/admin/dashboard/albums"
                element={<AlbumsOutlet />}
              ></Route>
              <Route
                path="/admin/dashboard/newphoto"
                element={<FormPhotoOutlet />}
              ></Route>
              <Route
                path="/admin/dashboard/newalbum"
                element={<FormAlbumOutlet />}
              ></Route>
              <Route path="/admin/dashboard/updatealbum/:id" element={<UpdateAlbumOutlet/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default Router