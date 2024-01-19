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
      console.log(photos)
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
      <section className="gBackground flex flex-col items-center">
        <h2 className="pgTitle">Fotky</h2>
        <button className="listBtn">+ Pridať fotku</button>
        <div className="gContainer">
          {photos.data &&
            photos.data.map((item) => {
              return (
                <div
                  className="photoCardContainer"
                  key={item.id}
                  id={item.id}
                  {...item}
                >
                  {item.gallery && (
                    <div className="flex justify-start gap-4 ">
                      <p className="place-self-center italic text-brown-600">
                        {item.gallery}
                      </p>
                      <button type="button" className="listBtn">
                        Zmeniť album
                      </button>
                    </div>
                  )}
                  <img src={item.url} className="aCardImg object-cover"></img>
                  <div className="flex justify-start gap-4 ">
                    <button
                      type="button"
                      className="listBtn"
                      onClick={() => onDelete(item.id)}
                    >
                      Vymazať
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};


