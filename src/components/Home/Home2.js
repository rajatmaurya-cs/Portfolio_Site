import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myimg from "../../Assets/myImg.jpg"
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate Software Engineer and Computer Science undergraduate who enjoys turning ideas into efficient, scalable, and real-world solutions. Over time, I’ve explored multiple technologies and developed a strong interest in problem-solving, system design, and building impactful applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  C, C++, JavaScript, Tailwind CSS, React.js, Express.js, Node.js, MongoDB{" "}
                </b>
              </i>
              and enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  scalable web applications, RESTful APIs, and modern full-stack systems{" "}
                </b>
              </i>
              while continuously strengthening my core computer science fundamentals.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>{" "}

              </i>
            </p>
          </Col>

         

          <Col md={4} className="myAvtar">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
              <img src={myimg} className="img-fluid profile-img" alt="avatar" />
            </Tilt>
          </Col>



        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
