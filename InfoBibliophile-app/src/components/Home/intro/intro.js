import Carousel from "react-bootstrap/Carousel";
import { Fragment } from "react";
import classes from "./intro.module.css";

const Intro = () => {
  const images = [
    { url: "images/intro/intro1.jpg" },
    { url: "images/intro/intro2.jpg" },
    { url: "images/intro/intro3.jpg" },
    { url: "images/intro/intro4.jpg" },
  ];

  return (
    <Fragment>
      <div className={`section ${classes.carousel}`}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/intro/intro1.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/intro/intro2.jpg"
              alt="Second slide"
            />
            {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/intro/intro4.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/intro/intro3.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        <div className={classes["intro-container"]}>
            <h1 className={classes["intro-title"]}>WELCOME <span>INFOBIBLIOPHILE</span></h1>
          <div>
            <p className={classes["intro-text"]}>
              <mark>INFOBIBLIOPHILE</mark> is an <span>innovative</span> and <span>knowledge-centered platform</span>
              designed to cater to the <span>insatiable curiosity</span> of the <span>modern
              intellectual</span>. Our project is more than just a <span>repository</span> of
              <span> information</span>, it's a <span>dynamic</span> and <span>interactive hub</span> where <span>individuals</span> can
              delve into a <span>diverse range</span> of <span>fields</span>, quench their <span>thirst</span> for
              <span>knowledge</span>, and connect with <span>like-minded enthusiasts</span> from all corners
              of the <span>globe</span>.
            </p>
          </div>
        </div>
      </div>
    </Fragment> 
  );
};

export default Intro;
