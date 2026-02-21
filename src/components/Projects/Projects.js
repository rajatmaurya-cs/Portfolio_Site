import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Postify - AI Powered Blogging Platform"
              description = "Building a production-grade AI-powered blogging platform with React, Node, Express, and MongoDB that supports one-click summaries and AI-assisted content/report creation for admins. Includes secure OTP and Google sign-in, guarded routes, and scalable REST services. Focused on shipping a responsive product."

              ghLink="https://github.com/rajatmaurya-cs/Postify-AI-Powered-Blogging-Platform"
              
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="portfolio"
              description = "Developed a responsive personal portfolio using React, JavaScript, HTML, and CSS to showcase projects, skills, and achievements. Implemented reusable components, intuitive navigation, and performance optimization. Deployed a production-ready website with integrated GitHub, LinkedIn, and resume access to enhance recruiter engagement."

              ghLink="https://github.com/rajatmaurya-cs/Postify-AI-Powered-Blogging-Platform"
              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
