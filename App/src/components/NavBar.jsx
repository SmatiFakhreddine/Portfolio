import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar(props) {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [scrollBtn, setScrollBtn] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 50) {
              if (window.scrollY > 300) {
                  setScrolled(true);
                  setScrollBtn(true);
              } else {
                  setScrolled(true);
                  setScrollBtn(false);
              }
            } else {
                setScrolled(false);
                setScrollBtn(false);
            }
          };
    }, []);
    
  return (
    <BrowserRouter>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="container">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Text id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
              href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => setActiveLink("home")}>
                Home
              </Nav.Link>
              <Nav.Link 
              href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => setActiveLink("skills")}>
                Skills
              </Nav.Link>
              <Nav.Link 
              href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => setActiveLink("projects")}>
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/smatifakhreddine/"><i className="fa-brands fa-linkedin"/></a>
                <a target="_blank" href="https://github.com/SmatiFakhreddine"><i className="fa-brands fa-github" /></a>
              </div>
              <Nav.Link href="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </Nav.Link>
            </span>
          </Navbar.Text>
        </Container>
        <button className="moodBtn" onClick={props.handleClick}>{props.mood == "dark" ? <i class="ri-moon-fill" /> : <i class="ri-sun-fill" />}</button>
      </Navbar>
      <button style={{opacity: scrollBtn ? 1 : 0}} onClick={() => {window.scrollTo(0, 50)}} className="scroll2Top">
        <p>^</p>
      </button>
    </BrowserRouter>
  );
}

export default NavBar;
