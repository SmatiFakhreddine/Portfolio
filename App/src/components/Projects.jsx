import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import stocktnImg from "../assets/img/stocktn.png";
import qrcodeImg from "../assets/img/qrcode.png";
import todaylistImg from "../assets/img/todaylist.png";
import simonImg from "../assets/img/simongame.png";
import sportnewsImg from "../assets/img/sportnews.png"
import trackerImg from "../assets/img/tracker.png";
import secretsImg from "../assets/img/secrets.png";
import storeImg from "../assets/img/sneakers.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects () {

  const Projects = [
    {
      title: "StockTN",
      description: "inventory management website, including transaction traceability and an analysis section ..",
      imgUrl: stocktnImg,
      link:"https://stocktn-94bc4.web.app/",
      github:"https://github.com/SmatiFakhreddine/StockTN.git",
      type: "react"
    },
    {
      title: "Friends Travel Tracker",
      description: "The Tracker Map offers a way for you and your friends to track your trips ..",
      imgUrl: trackerImg,
      link:"https://friends-travel-tracker.vercel.app/",
      github:"https://github.com/SmatiFakhreddine/Friends-Travel-Tracker",
      type: "express"
    },
    {
      title: "Secrets",
      description: "register and login manually or with google authenticator on secrets to write your deepest secret ..",
      imgUrl: secretsImg,
      link:"https://secrets-blush.vercel.app/",
      github:"https://github.com/SmatiFakhreddine/Secrets",
      type: "express"
    },
    {
      title: ".Sneakers Store",
      description: "responsive and interactive web store page ..",
      imgUrl: storeImg,
      link:"https://smatifakhreddine.github.io/.sneakers",
      github:"https://github.com/SmatiFakhreddine/.sneakers",
      type: "jsVanilla"
    },
    {
      title: "Today List",
      description: "to-do list website with archive section, add task, rate it, update it and recover if it was archived ..",
      imgUrl: todaylistImg,
      link:"https://today-list-bb9b5.web.app/",
      github:"https://github.com/SmatiFakhreddine/TodayList.git",
      type: "react"
    },
    {
      title: "Sport News",
      description: "Sport news blog with an internal API for getting, posting, updating, and deleting articles.",
      imgUrl: sportnewsImg,
      link:"https://sport-news-blog.vercel.app/",
      github:"https://github.com/SmatiFakhreddine/Sport-News-Blog.git",
      type: "express"
    },
    {
      title: "QR Code Generator",
      description: "generate qr codes from links, scan and download.",
      imgUrl: qrcodeImg,
      link:"https://qrcode-f1067.web.app/",
      github:"https://github.com/SmatiFakhreddine/QR-Code-app.git",
      type: "react"
    },
    {
      title: "Simon Game",
      description: "an electronic memory game, play simon and try to win.",
      imgUrl: simonImg,
      link:"https://simon-game-livid-one.vercel.app/",
      github:"https://github.com/SmatiFakhreddine/Simon-Game.git",
      type: "jsVanilla"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <div className="text">
                  <h2>Projects</h2>
                  <p>Here’s a some of my favorite projects, 
                    where I have applied my skills to solve real-world problems and 
                    create engaging digital experiences.
                    These works showcase my ability to turn ideas into functional, user-friendly solutions.
                  </p>
                </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <div className="projects-section">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Col size={12} className="menu">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Node & Express</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">JS Vanilla</Nav.Link>
                      </Nav.Item>
                    </Col>
                  </Nav>
                  <Tab.Content className={isVisible && "animate__animated animate__zoomIn"}>
                    <Tab.Pane eventKey="first">
                      <div className="animate__animated animate__zoomIn">
                        <Row className="project-row">
                          {
                            Projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="animate__animated animate__zoomIn">
                        <Row className="project-row">
                          {
                            Projects.map((project, index) => {
                              if (project.type == "react") {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              ) }
                            })
                          }
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="animate__animated animate__zoomIn">
                        <Row className="project-row">
                          {
                            Projects.map((project, index) => {
                              if (project.type == "express") {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )}
                            })
                          }
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div className="animate__animated animate__zoomIn">
                        <Row className="project-row">
                          {
                            Projects.map((project, index) => {
                              if (project.type == "jsVanilla") {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )}
                            })
                          }
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                  </div>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
          <div id="connect" />
      </Container>
    </section>
  )
};

export default Projects;