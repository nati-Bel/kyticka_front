import './gallery.scss';
import GalleryCollection from '../../components/GalleryCollection';
// import wedding from '../assets/wedding.jpg';
// import wreath from "../assets/wreath.jpg";
// import xmas from "../assets/xmas.jpg";
import APIservice from '../../services/APIservice';



const Gallery = () => {

  const url = "http://127.0.0.1:8000/api/admin/galleries";
  let galleries = APIservice(url);
  console.log(galleries)
    return (
      <>
        <section className="gBackground">
          <h2 className="pgTitle">Galéria</h2>
          <div className="gContainer">
            {galleries &&
            galleries.data.map((gallery,index)=>{
              return(<GalleryCollection
              key={index}
              gCollImg={gallery.cover_url}
              gCollTitle={gallery.title}
            ></GalleryCollection>
              )
            })}
            
            
          </div>
        </section>
      </>
    );
}
export default Gallery