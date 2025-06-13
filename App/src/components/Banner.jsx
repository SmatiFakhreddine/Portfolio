import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import darkDeveloperImg from "../assets/img/Developer activity-amico-dark.svg";
import lightDeveloperImg from "../assets/img/Developer activity-amico-light.svg";
import bgDarkImg from "../assets/img/bg-dark.png";
import bgLightImg from "../assets/img/bg-light.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner(props) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);
  
  function tick () {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="row">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible && "animate__animated animate__fadeIn"}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Fakhreddine`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a web developer who is passionate about crafting websites and applications that are clean, responsive, and user-friendly. <br />Using my skills, I bring ideas to life through clean code and innovative solutions.</p>
                  <a href="#connect">Let’s Connect <ArrowRightCircle size={25} /></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible && "animate__animated animate__zoomIn"}>
                  <img src={props.mood == "dark" ? lightDeveloperImg : darkDeveloperImg} alt="Developer Img" className="headerImg"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <div id="skills" />
      </Container>
      <img src={props.mood == "dark" ? bgDarkImg : bgLightImg } className="background-image"/>
    </section>
  )
}

export default Banner;