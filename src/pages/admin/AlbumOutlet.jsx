import "../user/Album.scss";

import APIservice from "../../helpers/APIservice";
import { useParams } from "react-router-dom";

export const AlbumOutlet = () => {
  const { id } = useParams();
  console.log(id);

  const url = `http://127.0.0.1:8000/api/admin/galleries/${id}`;
  const album = APIservice(url);
  console.log(album);

  return (
    <>
      <h2 className="albumTitle mt-3">{album && album.data.title}</h2>
      <section className="albumCont">
        {album &&
          album.data.photos.map((photo, index) => {
            return (
              <>
                <div className="h-auto max-w-sm rounded border p-1  dark:bg-neutral-800 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div>
                    <img className="rounded-t-lg" key={index} src={photo.url} />
                  </div>
                  <div className="p-2 flex flex-col gap-2">
                    <h5 className="">{photo.description}</h5>
                    <div className="flex justify-start gap-4 ">
                      <button type="button" className="listBtn">
                        Vymazať
                      </button>
                      <button type="button" className="listBtn">
                        Zmeniť album
                      </button>
                    </div>
                  </div>
                </div>

                <img className="albumImg h-auto max-w-sm rounded border p-1 dark:border-neutral-700 dark:bg-neutral-800"></img>
              </>
            );
          })}
      </section>
    </>
  );
};
