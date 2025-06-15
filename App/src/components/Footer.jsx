import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

function Footer() {

  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/smati-fakhreddine/"><i className="fa-brands fa-linkedin"/></a>
              <a target="_blank" href="https://github.com/SmatiFakhreddine"><i className="fa-brands fa-github" /></a>
            </div>
            <p>Copyright {date}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;