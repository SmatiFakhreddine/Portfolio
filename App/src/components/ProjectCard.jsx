import { Col } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={props.imgUrl} />
        <div className="proj-txtx">
          <h4>{props.title}</h4>
          <span>{props.description}</span>
        </div>
        <div className="social-icon">
              <a target="_blank" href={props.link}><i className="fa-solid fa-link" /></a>
              <a target="_blank" href={props.github}><i className="fa-brands fa-github" /></a>
            </div>
      </div>
    </Col>
  )
};

export default ProjectCard;