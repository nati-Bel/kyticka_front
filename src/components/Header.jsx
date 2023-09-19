import  './header.scss'
import logo from '../assets/logo.png'

export const Header = () => {

    return (
      <>
        <header className="headerCont">
          <div className="logo">
            <img className="logoImg" src={logo}></img>
            <p className="logoTitle">KVETINÁRSTVO</p>
          </div>
          <span className="welcomeTitle">Vitajte</span>
        </header>
      </>
    );
}


