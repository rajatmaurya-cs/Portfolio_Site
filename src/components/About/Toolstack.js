import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

    

      <Col xs={4} md={2} className="tech-icons">
        <img src={"https://skillicons.dev/icons?i=git&theme=dark"} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={"https://skillicons.dev/icons?i=github&theme=dark"} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      

      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>


        <Col xs={4} md={2} className="tech-icons">
        <img src={"https://skillicons.dev/icons?i=postman&theme=dark"} alt="HTML" />
        <div className="tech-icons-text">Postman</div>
      </Col>

       

        <Col xs={4} md={2} className="tech-icons">
        <img src={"https://skillicons.dev/icons?i=vercel&theme=dark"} alt="HTML" />
        <div className="tech-icons-text">Vercel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
