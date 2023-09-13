import './galleryCollection.scss';


const GalleryCollection = (props) => {

    return (
        <>
        <div className="gCollContainer">
            <img src={props.gCollImg} className="gCollImg"></img>
            <h3 className="gCollTitle">{props.gCollTitle}</h3>
        </div>
        </>
    )

}
export default GalleryCollection