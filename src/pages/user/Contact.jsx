import './contact.scss'
import { NavbarDefault, Footer, SocialCard } from '../../components'
import { useNavigate } from 'react-router-dom';
import map from '../../assets/kytMap.jpg'
import fb from '../../assets/fb.png';
import insta from '../../assets/insta.png';
import email from '../../assets/email.png';
import mob from '../../assets/mob.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    
    const sendEmail = (e) =>{
      e.preventDefault();

      emailjs.sendForm(
        "service_jjvvako",
        "template_k96nzi9",
        e.target,
        "puxGM_tCK2DWOM4_z"
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
            
    }
    const navigateTo = useNavigate();
    navigateTo("/kontakt"); 
    return (
      <>
        <NavbarDefault></NavbarDefault>
        <main className="mainCont">
          <section className="contactCont">
            <div className="formGroup">
              <div className="formText">
                <h3 className="contactTitle">Napíšte nám! </h3>
                <p className="formDescription">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur fuga deserunt aspernatur iusto placeat qui
                </p>
              </div>
              <form className="contactForm" onSubmit={sendEmail}>
                <div className="formUnit">
                  <label className="contactLabel">Meno</label>
                  <input
                    className="contactInput"
                    type="text"
                    id="name"
                    name="name"
                  ></input>
                </div>
                <div className="formUnit">
                  <label className="contactLabel">Email</label>
                  <input
                    className="contactInput"
                    type="text"
                    id="email"
                    name="email"
                  ></input>
                </div>
                <div className="formUnit">
                  <label className="contactLabel">Správa</label>
                  <textarea
                    rows="5"
                    cols="60"
                    className="contactMessage"
                    type="text"
                    id="message"
                    name="message"
                  ></textarea>
                </div>
                <div className='fbtnCont'>
                  <button type="submit" className="formBtn">
                    Pošli
                  </button>
                </div>
              </form>
            </div>

            <div className="socialGroup">
              <div className="mediaCont">
                <h3 className="contactTitle">Kontaktujte nás</h3>
                <div className="socialCont">
                  <a href="https://www.facebook.com/profile.php?id=100063578950162">
                    <SocialCard
                      socialLogo={fb}
                      socialLink="Facebook"
                    ></SocialCard>
                  </a>
                  <SocialCard
                    socialLogo={insta}
                    socialLink="Instagram"
                  ></SocialCard>
                  <SocialCard
                    socialLogo={email}
                    socialLink="Email"
                  ></SocialCard>
                  <SocialCard socialLogo={mob} socialLink="Mobil"></SocialCard>
                </div>
              </div>
              <div className="mapCont">
                <h3 className="contactTitle">Navštívte nás</h3>
                <img className="mapImg" src={map}></img>
                <p className="mapDescription">
                  Hviezdoslavova 130, 90031 Stupava
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </>
    );
}