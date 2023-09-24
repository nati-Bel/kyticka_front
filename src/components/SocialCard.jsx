import './socialCard.scss'

export const SocialCard = (props) => {
    return(
        <>
            <div className='socialContacts'>
                <img className="socialLogo" src={props.socialLogo}></img>
                <span className='socialLink'>{props.socialLink}</span>
            </div>
        </>
    )
}