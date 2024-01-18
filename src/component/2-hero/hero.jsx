import "./hero.css";
import Lottie from "lottie-react";
import fristAnimation from "../../assets/sec- 1702131555325.json"
const Hero = () => {
  return (
    <section className="hero">
      <div className="left-section">
        <img src="/public/me.jpj-modified.png" alt="" className="img-sec" />
        <span className="icon-verified"></span>
        <h1> Front End Devolper</h1>
        <p>
          i'm ahmed ayman ,i am front end devolper with react js i learn Html
          Css javascript and react js
        </p>
        <section className="icon-section">
          <span className="icon-instagram"></span>
          <span className="icon-facebook"></span>
          <span className="icon-twitter"></span>
          <span className="icon-linkedin2"></span>
        </section>
      </div>
      <div className="right-section"><Lottie animationData={fristAnimation} /></div>
    </section>
  );
};

export default Hero;
