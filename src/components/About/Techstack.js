import React from "react";
import { Col, Row } from "react-bootstrap";

import C from "../../Assets/TechIcons/C.svg";

import CPP from "../../Assets/TechIcons/CPP.svg";

import HTML from "../../Assets/TechIcons/HTML5.svg"

import css from "../../Assets/TechIcons/CSS3.svg"

import react from "../../Assets/TechIcons/React.svg"

import nodejs from "../../Assets/TechIcons/Node.js.svg"

import javascript from "../../Assets/TechIcons/JavaScript.svg"

import mongo from "../../Assets/TechIcons/MongoDB.svg"

import Boot from "../../Assets/TechIcons/Bootstrap.svg"

import Redis from '../../Assets/TechIcons/Reddis.svg'


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       
   
   
   
       <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CPP} alt="CPP" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>

        <Col xs={4} md={2} className="tech-icons">
        <img src={css} alt="HTML" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={javascript} alt="HTML" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={react} alt="HTML" />
        <div className="tech-icons-text">React</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Boot} alt="HTML" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={"https://skillicons.dev/icons?i=express&theme=light"} alt="HTML" />
        <div className="tech-icons-text">Express</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={nodejs} alt="HTML" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={mongo} alt="HTML" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="HTML" />
        <div className="tech-icons-text">Redis</div>
      </Col>
     
    </Row>
  );
}

export default Techstack;
