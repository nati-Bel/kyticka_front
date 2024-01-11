import "./outlet.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import {AlbumCardAdmin} from "../../components/"
import { Link } from "react-router-dom";

export const AlbumsOutlet = () => {
  const apiUrl = "http://127.0.0.1:8000/api/admin/galleries";
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    try {
      const response = await axios.get(apiUrl);
      setAlbums(response.data);
    } catch (error) {
      console.error("Error al obtener las galerías:", error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/${id}`);

      if (response.status === 200) {
        await loadAlbums();
      } else {
        console.error("Error al eliminar la galería");
      }
    } catch (error) {
      console.error("Error al eliminar la galería:", error);
    }
  };

  return (
    <>
      <div>
        <section className="gBackground flex flex-col items-center">
          <h2 className="pgTitle">Galéria</h2>
          <button className="listBtn ">
            <Link to="/admin/dashboard/newalbum" className="">
              + Pridať album
            </Link>
          </button>
          <div className="gContainer">
            {albums.data &&
              albums.data.map((album) => {
                return (
                  <AlbumCardAdmin
                    key={album.id}
                    id={album.id}
                    {...album}
                  ></AlbumCardAdmin>
                );
              })}
          </div>
        </section>

        {/* <Link to={`/admin/dashboard/updatealbum/${album.id}?title=${album.title}`}>
                  <button className="listBtn">Upravit</button>
                </Link>
                <button className="listBtn" onClick={() => onDelete(album.id)}>
                  Vymazat
                </button> */}
      </div>
    </>
  );
};


