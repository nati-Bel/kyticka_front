import './galleryCollection.scss';


const GalleryCollection = (props) => {

    return (
        <>
        <div className="gCollContainer">
            <img src={props.cover_url} className="gCollImg"></img>
            <h3 className="gCollTitle">{props.title}</h3>
        </div>
        </>
    )

}
export default GalleryCollection