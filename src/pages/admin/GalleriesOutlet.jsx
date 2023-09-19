import "./outlet.scss";
import APIservice from "../../services/APIservice";


export const GalleriesOutlet = () => {
  const url = "http://127.0.0.1:8000/api/admin/galleries";
  let galleries = APIservice(url);

  return (
    <>
      <div className="listContainer flex align-center justify-center">
        <ul role="list" className="divide-y divide-gray-100">
          {galleries &&
            galleries.data.map((item, index) => (
              <li
                key={index}
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
                <button>Vymazat</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};


