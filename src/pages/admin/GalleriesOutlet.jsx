import "./outlet.scss";
import APIservice from "../../services/APIservice";
import axios from "axios";
//import { useState, useEffect } from "react";



export const GalleriesOutlet = () => {
  

  //const [galleries, setGalleries] = useState(null)
  const url = "http://127.0.0.1:8000/api/admin/galleries";
  const galleries = APIservice(url);
  
  //setGalleries(galleriesData);
  
  

  
  const onDelete = async (id) => {
    console.log(id)
    try {
      const response = await axios.delete(`${url}/${id}`);

      if (response.status === 200) {
        console.log('Exito');
        location.reload();
        
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
          {galleries &&
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


