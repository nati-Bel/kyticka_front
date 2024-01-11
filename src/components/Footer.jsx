import './footer.scss';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import email from '../assets/email.png';
import copy from '../assets/copy.png';

export const Footer = () => {

    return (
        <>
        <footer className ="footerCont">
            <ul className="footerList">
                <li className="copyCont">
                    <img className="copyIcon" src={copy}></img>
                    <span className="copyTitle">KYTIČKA</span>
                </li>
                <li>Hviezdoslavova 130, STUPAVA | 0912 273 517 | kystudio@gmail.com</li>
                <li className="fsocialCont">
                    <img className="socialIcon" src={fb}></img>
                    <img className="socialIcon" src={insta}></img>
                    <img className="socialIcon" src={email}></img>
                </li>
            </ul>

        </footer>
        </>
    )
}