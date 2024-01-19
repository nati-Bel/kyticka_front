import "../user/Album.scss";

import APIservice from "../../helpers/APIservice";
import { Link, useParams } from "react-router-dom";

export const AlbumOutlet = () => {
  const { id } = useParams();
  console.log(id);

  const url = `http://127.0.0.1:8000/api/admin/galleries/${id}`;
  const album = APIservice(url);
  console.log(album);

  return (
    <>
      <section className="gBackground flex flex-col items-center">
        <h2 className="albumTitle mt-3">{album && album.data.title}</h2>
        <Link to="/admin/dashboard/newphoto">
          <button className="listBtn">+ Pridať fotku</button>
        </Link>
        <section className="albumCont">
          {album &&
            album.data.photos.map((photo, index) => {
              return (
                <>
                  <div
                    className="photoCardContainer"
                    key={index}
                    id={photo.id}
                    {...photo}
                  >
                    {/* TODO: UPDATE AND DELETE  */}
                    <button
                      type="button"
                      className="text-sm leading-6 italic text-brown-600"
                    >
                      Zmeniť album<span aria-hidden="true">&rarr;</span>
                    </button>
                    <img
                      src={photo.url}
                      className="aCardImg object-cover"
                    ></img>
                    <button type="button" className="listBtn">
                      Vymazať
                    </button>
                  </div>
                </>
              );
            })}
        </section>
      </section>
    </>
  );
};
