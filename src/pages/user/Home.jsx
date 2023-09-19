import { Header, Footer, Slider, NavbarDefault, Video } from "../../components";
import './home.scss';

export const Home = () => {

    return (
      <>
        <Header></Header>
        <NavbarDefault></NavbarDefault>
        <section className="homeIntro">
          <Video></Video>
          <p className="homeText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores facere nobis. Iure doloremque consequatur illum nulla quis.
            Est assumenda animi itaque suscipit distinctio rem laboriosam ut
            necessitatibus, at dolor? 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, soluta in? At deleniti consequuntur voluptates corporis eum rerum est laborum ipsam, ea, alias, quisquam voluptatem quibusdam! Dolores temporibus accusamus aspernatur.
          </p>
        </section>
        <section className="carouselCont">
          <Slider></Slider>
        </section>
        <Footer></Footer>
      </>
    );
}