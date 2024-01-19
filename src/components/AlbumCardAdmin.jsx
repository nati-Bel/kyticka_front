import './albumCard.scss';
import { Link } from 'react-router-dom';


export const AlbumCardAdmin = (album) => {

    return (
      <>
        <Link to={`/admin/dashboard/album/${album.id}`}>
          <div className="aCardContainer">
            <img src={album.cover_url} className="aCardImg object-cover"></img>
            <h3 className="aCardTitle">{album.title}</h3>
          </div>
        </Link>
      </>
    );

}
