import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  function handleChange (event) {
    const {name, value} = event.target;
      setFormDetails({
        ...formDetails,
        [name]: value
      });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="contact-img">
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible && "animate__animated animate__zoomIn"} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} className="contact-form">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" 
                      value={formDetails.firstName} 
                      placeholder="First Name" 
                      name="firstName"
                      onChange={handleChange} 
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" 
                      value={formDetails.lastName} 
                      placeholder="Last Name" 
                      name="lastName"
                      onChange={handleChange}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" 
                      value={formDetails.email} 
                      placeholder="Email Address"
                      name="email" 
                      onChange={handleChange}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" 
                      value={formDetails.phone} 
                      placeholder="Phone No." 
                      name="phone"
                      onChange={handleChange}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" 
                      value={formDetails.message} 
                      placeholder="Message" 
                      name="message"
                      onChange={handleChange}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;