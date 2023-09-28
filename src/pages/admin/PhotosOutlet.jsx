import "./outlet.scss";
import { useState, useEffect } from "react";
import axios from "axios";


export const PhotosOutlet = () => {
  const apiUrl = "http://127.0.0.1:8000/api/admin/photos";
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPhotos(response.data);
    } catch (error) {
      console.error("Error al obtener las fotos:", error);
    }
  };

  const onDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`${apiUrl}/${id}`);

      if (response.status === 200) {
        await loadPhotos();
      } else {
        console.error("Error al eliminar la foto");
      }
    } catch (error) {
      console.error("Error al eliminar la foto:", error);
    }
  };

  return (
    <>
      <div className="listContainer flex align-center justify-center">
        <ul role="list" className="divide-y divide-gray-100">
          {photos.data &&
            photos.data.map((item) => (
              <li
                key={item.id}
                className="flex justify-between gap-x-6 py-5 flex-wrap"
              >
                <div className="flex min-w-0 gap-x-9">
                  <img
                    className="h-12 w-12 flex-none bg-brown-50"
                    src={item.url}
                    alt=""
                  />
                  {item.gallery && <p className="place-self-center italic text-brown-600">
                    {item.gallery}
                  </p>}
                  <button className="listBtn">Upravit</button>
                  <button className="listBtn" onClick={() => onDelete(item.id)}>Vymazat</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};


