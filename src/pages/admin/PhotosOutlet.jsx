import "./outlet.scss";
import APIservice from "../../services/APIservice";
import axios from "axios";


export const PhotosOutlet = () => {
  const url = "http://127.0.0.1:8000/api/admin/photos";
  let photos = APIservice(url);

  const onDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`${url}/${id}`);

      if (response.status === 200) {
        console.log("Exito");
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
          {photos &&
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
                  <p className="place-self-center italic text-brown-600">
                    {item.gallery}
                  </p>
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


