import './gallery.scss';
import GalleryCollection from '../components/GalleryCollection';
import wedding from '../assets/wedding.jpg';
import wreath from "../assets/wreath.jpg";
import xmas from "../assets/xmas.jpg";



const Gallery = () => {
    return (
      <>
        <section className="gBackground">
          <h2 className="pgTitle">Galéria</h2>
          <div className="gContainer">
            <GalleryCollection
              gCollImg={wedding}
              gCollTitle="Svadobne"
            ></GalleryCollection>
            <GalleryCollection
              gCollImg={wreath}
              gCollTitle="Vence"
            ></GalleryCollection>
            <GalleryCollection
              gCollImg={xmas}
              gCollTitle="Vianoce"
            ></GalleryCollection>
            <GalleryCollection
              gCollImg={wedding}
              gCollTitle="Svadobne"
            ></GalleryCollection>
            <GalleryCollection
              gCollImg={wreath}
              gCollTitle="Vence"
            ></GalleryCollection>
            <GalleryCollection
              gCollImg={xmas}
              gCollTitle="Vianoce"
            ></GalleryCollection>
            <GalleryCollection
              gCollImg={wedding}
              gCollTitle="Svadobne"
            ></GalleryCollection>
            <GalleryCollection
              gCollImg={wreath}
              gCollTitle="Vence"
            ></GalleryCollection>
            <GalleryCollection
              gCollImg={xmas}
              gCollTitle="Vianoce"
            ></GalleryCollection>
          </div>
        </section>
      </>
    );
}
export default Gallery