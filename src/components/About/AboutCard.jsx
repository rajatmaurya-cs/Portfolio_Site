import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="border-none bg-transparent text-white">
      <blockquote className="mb-0">
        <p className="text-justify">
          Hi everyone! I'm{" "}
          <span className="text-[#c770f0]">Rajat Maurya</span> from{" "}
          <span className="text-[#c770f0]">India</span>.
          <br />
          I'm currently pursuing a{" "}
          <span className="text-[#c770f0]">B.Tech in Computer Science</span> at{" "}
          <span className="text-[#c770f0]">KIET Group of Institutions</span>.
          <br />
          I enjoy building{" "}
          <span className="text-[#c770f0]">
            scalable full-stack web applications
          </span>{" "}
          using modern technologies and continuously improving my skills in{" "}
          <span className="text-[#c770f0]">
            Backend Engineering, System Design, and AI-powered applications
          </span>.
          <br />
          <br />
          Outside of coding, I enjoy:
        </p>

        <ul>
          <li className="list-none pl-[1px] text-left">
            <ImPointRight className="inline-block" /> Building scalable full-stack
            applications 🚀
          </li>

          <li className="list-none pl-[1px] text-left">
            <ImPointRight className="inline-block" /> Solving DSA & LeetCode
            problems 💻
          </li>

          <li className="list-none pl-[1px] text-left">
            <ImPointRight className="inline-block" /> Exploring AI, System Design &
            modern web technologies 🧠
          </li>

          <li className="list-none pl-[1px] text-left">
            <ImPointRight className="inline-block" /> Learning and experimenting
            with new technologies ⚡
          </li>
        </ul>

        <p className="text-[rgb(155_126_172)]">
          "Build with curiosity, optimize with purpose, and never stop learning."
        </p>

        <footer className="text-[#a588c0]">Rajat Maurya</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;