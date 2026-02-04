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
              title="Next-Gen AI Blogging Platform"
              description = "Developing an AI-powered full-stack blog platform using the MERN stack that enables one-click blog summarization and AI-driven content/report generation for admins. Implements secure OTP and Google authentication, protected routes, and scalable REST APIs. Focused on delivering a responsive, production-ready application."

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
