import './gallery.scss';
import {AlbumCard, NavbarDefault, Footer} from '../../components';
// import wedding from '../assets/wedding.jpg';
// import wreath from "../assets/wreath.jpg";
// import xmas from "../assets/xmas.jpg";
import APIservice from '../../services/APIservice';
//import { Link } from 'react-router-dom';



export const Gallery = () => {

  const url = "http://127.0.0.1:8000/api/admin/galleries";
  let galleries = APIservice(url);
  console.log(galleries)
    return (
      <>
      <NavbarDefault></NavbarDefault>
      <section className="gBackground">
          <h2 className="pgTitle">Galéria</h2>
          <div className="gContainer">
            {galleries &&
            galleries.data.map((gallery)=>{
              return (
                    <AlbumCard key={gallery.id} id={gallery.id}{...gallery}>

                    </AlbumCard>
              );
            })}
            
            
          </div>
        </section>
        <Footer></Footer>
      </>
    );
}
