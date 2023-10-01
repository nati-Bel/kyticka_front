import "./outlet.scss";
import { useState, useEffect } from "react";
import axios from "axios";
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
      <div className="listContainer flex align-center justify-center">
        <ul role="list" className="divide-y divide-brown-100">
          {albums.data &&
            albums.data.map((album) => (
              <li
                key={album.id}
                className="flex justify-between gap-x-6 py-5 flex-wrap"
              >
                <div className="flex min-w-0 gap-x-9">
                  <img
                    className="h-12 w-12 flex-none bg-gray-50"
                    src={album.cover_url}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="italic leading-6 text-brown-900">
                      {album.title}
                    </p>
                  </div>
                </div>
                <Link to="">
                  <button className="listBtn">Upravit</button>
                </Link>
                <button className="listBtn" onClick={() => onDelete(album.id)}>
                  Vymazat
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};


