import "./gallery.scss";
import { AlbumCard, NavbarDefault, Footer } from "../../components";
import APIservice from "../../helpers/APIservice";

export const Gallery = () => {
  const url = "http://127.0.0.1:8000/api/admin/galleries";
  let galleries = APIservice(url);
  console.log(galleries);
  return (
    <>
      <NavbarDefault></NavbarDefault>
      <section className="gBackground">
        <h2 className="pgTitle">Galéria</h2>
        <div className="gContainer">
          {galleries &&
            galleries.data.map((gallery) => {
              return (
                <AlbumCard
                  key={gallery.id}
                  id={gallery.id}
                  {...gallery}
                ></AlbumCard>
              );
            })}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
