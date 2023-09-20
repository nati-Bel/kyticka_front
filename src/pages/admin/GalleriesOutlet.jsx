import "./outlet.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export const GalleriesOutlet = () => {
  const apiUrl = "http://127.0.0.1:8000/api/admin/galleries";
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    loadGalleries();
  }, []);

  const loadGalleries = async () => {
    try {
      const response = await axios.get(apiUrl);
      setGalleries(response.data);
    } catch (error) {
      console.error("Error al obtener las galerías:", error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/${id}`);

      if (response.status === 200) {
        await loadGalleries();
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
        <ul role="list" className="divide-y divide-gray-100">
          {galleries.data && 
            galleries.data.map((item) => (
              <li
                key={item.id}
                className="flex justify-between gap-x-6 py-5 flex-wrap"
              >
                <div className="flex min-w-0 gap-x-9">
                  <img
                    className="h-12 w-12 flex-none bg-gray-50"
                    src={item.cover_url}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {item.title}
                    </p>
                  </div>
                </div>
                <button>Upravit</button>
                <button onClick={() => onDelete(item.id)}>Vymazat</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};


