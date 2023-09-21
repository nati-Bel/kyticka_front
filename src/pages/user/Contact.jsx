import './contact.scss'
import { NavbarDefault, Footer, SocialCard } from '../../components'
import map from '../../assets/kytMap.jpg'
import fb from '../../assets/fb.png';
import insta from '../../assets/insta.png';
import email from '../../assets/email.png';
import mob from '../../assets/mob.png';

export const Contact = () => {

    return (
      <>
        <NavbarDefault></NavbarDefault>
        <main className="mainCont">
          <section className="contactCont">
            <div className="formGroup">
              <div className="formText">
                <h3 className="contactTitle">Napiste nam</h3>
                <p className="formDescription">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur fuga deserunt aspernatur iusto placeat qui
                </p>
              </div>
              <form className="contactForm">
                <div className="formUnit">
                  <label className="contactLabel">Meno</label>
                  <input className="contactInput" type="text"></input>
                </div>
                <div className="formUnit">
                  <label className="contactLabel">Email</label>
                  <input className="contactInput" type="text"></input>
                </div>
                <div className="formUnit">
                  <label className="contactLabel">Sprava</label>
                  <textarea rows="5" cols="60" className="contactMessage" type="text"></textarea>
                </div>
                <button type="submit" className="formBtn"></button>
              </form>
            </div>

            <div className="socialGroup">
              <div className="mediaCont">
                <h3 className="contactTitle">Kontaktujte nas</h3>
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
                <h3 className="contactTitle">Navstivte nas</h3>
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