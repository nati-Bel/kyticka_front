import "./outlet.scss";
import APIservice from "../../services/APIservice";
import ListBtn from "../../components/ListBtn";


const PhotosOutlet = () => {
  const url = "http://127.0.0.1:8000/api/admin/photos";
  let photos = APIservice(url);

  return (
    <>
      <div className="listContainer flex align-center justify-center">
        <ul role="list" className="divide-y divide-gray-100">
          {photos &&
            photos.data.map((item, index) => (
              <li
                key={index}
                className="flex justify-between gap-x-6 py-5 flex-wrap"
              >
                <div className="flex min-w-0 gap-x-9">
                  <img
                    className="h-12 w-12 flex-none bg-gray-50"
                    src={item.url}
                    alt=""
                  />
                  <p className="text-xs leading-5 text-gray-600">Galeria</p>
                  <ListBtn btnContent="Upravit"></ListBtn>
                  <ListBtn btnContent="Vymazat"></ListBtn>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default PhotosOutlet;
