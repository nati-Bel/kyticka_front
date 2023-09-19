import './galleryCollection.scss';
import { Link } from 'react-router-dom';


export const GalleryCollection = (props) => {

    return (
      <>
        <Link to="/galeria{id}">
          <div className="gCollContainer">
            <img src={props.cover_url} className="gCollImg"></img>
            <h3 className="gCollTitle">{props.title}</h3>
          </div>
        </Link>
      </>
    );

}
