import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi everyone! I’m <span className="purple">Rajat Maurya</span>{" "}
    from <span className="purple">Rajasthan, India</span>.
    <br />
    I’m currently a{" "}
    <span className="purple">B.Tech Computer Science student</span> at{" "}
    <span className="purple">KIET Group of Institutions</span>.
    <br />
    I’m passionate about{" "}
    <span className="purple">Software Development</span>,{" "}
    <span className="purple">Data Structures & Algorithms</span>, and{" "}
    <span className="purple">Full-Stack Web Development</span>.
    <br />
    <br />
    Outside of coding, I love engaging in activities that keep me
    motivated and inspired:
  </p>

  <ul>
    <li className="about-activity">
      <ImPointRight /> Solving DSA & LeetCode problems 💻
    </li>
    <li className="about-activity">
      <ImPointRight /> Building full-stack AI Integrated Web Application 🚀
    </li>
    <li className="about-activity">
      <ImPointRight /> Exploring new technologies 🧠
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Consistency and curiosity are the keys to growth."
  </p>
  <footer className="blockquote-footer">Rajat</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
