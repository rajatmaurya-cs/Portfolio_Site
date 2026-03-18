
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
              title="AI auto category & Tag Generator "
              description = "Built an AI-driven auto category and tag generation system that analyzes content context to automatically assign relevant categories and tags. Integrated machine learning APIs, optimized data processing pipelines, and designed a responsive UI for real-time interaction, improving content discoverability and system efficiency."

              ghLink="https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator"
              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI B2b Proposal Generator "
              description = "Built an AI-driven B2B proposal generation system that dynamically creates personalized business proposals using contextual input and NLP models. Implemented intelligent content structuring, template automation, and real-time data processing, significantly reducing proposal creation time and enhancing business productivity."

              ghLink="https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator"
              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;