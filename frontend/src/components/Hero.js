import '../styles/Hero.css';
import Australia from "../assets/Study-in-Australia-768x439.jpg";
import Malaysia from "../assets/Study-in-Malaysia-from-Bangladesh-768x547.jpg";
import UK from "../assets/Study-in-the-UK-768x443.jpg";
import USA from "../assets/Study-in-the-USA-768x674.jpg";
import {Carousel} from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero">
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Malaysia}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{fontSize: "4rem", color: "white", marginBottom: "1rem"}}>Study in Australia</h3>
            <p style={{fontSize: "3rem", color: "white", marginBottom: "1rem"}}>Best place to build a career.</p>
            <button >Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Australia}
            alt="Second slide"
          />
         <Carousel.Caption>
            <h3 style={{fontSize: "4rem", color: "white", marginBottom: "1rem"}}>Study in Australia</h3>
            <p style={{fontSize: "3rem", color: "white", marginBottom: "1rem"}}>Best place to build a career.</p>
            <button >Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={USA}
            alt="Third slide"
            height="600"
          />
          <Carousel.Caption>
            <h3 style={{fontSize: "4rem", color: "white", marginBottom: "1rem"}}>Study in Australia</h3>
            <p style={{fontSize: "3rem", color: "white", marginBottom: "1rem"}}>Best place to build a career.</p>
            <button >Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={UK}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3 style={{fontSize: "4rem", color: "white", marginBottom: "1rem"}}>Study in Australia</h3>
            <p style={{fontSize: "3rem", color: "white", marginBottom: "1rem"}}>Best place to build a career.</p>
            <button >Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
