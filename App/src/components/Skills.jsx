import meter1 from "../assets/img/95.png";
import meter2 from "../assets/img/90.png";
import meter3 from "../assets/img/85.png";
import meter4 from "../assets/img/80.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import darkColorSharp from "../assets/img/color-sharp-dark.png";
import lightColorSharp from "../assets/img/color-sharp-light.png";
import html from "../assets/img/logos/html.png";
import css from "../assets/img/logos/css.png";
import javaScript from "../assets/img/logos/javascript.png";
import node from "../assets/img/logos/node.png";
import express from "../assets/img/logos/express.png";
import react from "../assets/img/logos/react.png";
import postgreSQL from "../assets/img/logos/postgresql.png";
import motoko from "../assets/img/logos/motoko.png";
import github from "../assets/img/logos/github.png";

function Skills(props) {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My skill set spans front-end, back-end, and full-stack development, <br />enabling me to create seamless digital experiences from concept to deployment.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Static Web Apps</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Dynamic Web Apps</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Single-Page Apps</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Web Portals</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>API Services</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Decentralized apps</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Responsive Websites</h5>
                            </div>
                        </Carousel>
                        <div className="logos">
                            <img src={html} alt="HTML" />
                            <img src={css} alt="CSS" />
                            <img src={javaScript} alt="JavaScript" />
                            <img src={react} alt="react js" />
                            <img src={node} alt="Node.js" />
                            <img src={express} alt="Express js" />
                            <img src={postgreSQL} alt="PostgreSQL" />
                            <img src={motoko} alt="Motoko" />
                            <img src={github} alt="GitHub" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={props.mood == "dark" ? darkColorSharp : lightColorSharp } />
    </section>
  )
};

export default Skills;