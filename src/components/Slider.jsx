
import './slider.scss'
import wedding from '../assets/wedding.jpg';
import xmas from '../assets/xmas.jpg';
import wreath from '../assets/wreath.jpg'

export const Slider = () => {
  return (
    <section className="sliderCont">
      <img className="sliderImg" src={wedding} alt="image1" />
      <img className="sliderImg" src={xmas} alt="image2" />
      <img className="sliderImg" src={wreath} alt="image3" />
    </section>
  );
}
