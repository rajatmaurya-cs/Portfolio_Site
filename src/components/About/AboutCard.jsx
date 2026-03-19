import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="border-none bg-transparent text-white">
      <blockquote className="mb-0">
        <p className="text-justify">
          Hi everyone! I’m <span className="text-[#c770f0]">Rajat Maurya</span>{" "}
          from <span className="text-[#c770f0]">Rajasthan, India</span>.
          <br />
          I’m currently a{" "}
          <span className="text-[#c770f0]">B.Tech Computer Science student</span> at{" "}
          <span className="text-[#c770f0]">KIET Group of Institutions</span>.
          <br />
          I’m passionate about{" "}
          <span className="text-[#c770f0]">Software Development</span>,{" "}
          <span className="text-[#c770f0]">Data Structures & Algorithms</span>, and{" "}
          <span className="text-[#c770f0]">Full-Stack Web Development</span>.
          <br />
          <br />
          Outside of coding, I love engaging in activities that keep me
          motivated and inspired:
        </p>

        <ul>
          <li className="list-none pl-[1px] text-left">
            <ImPointRight className="inline-block" /> Solving DSA & LeetCode problems 💻
          </li>
          <li className="list-none pl-[1px] text-left">
            <ImPointRight className="inline-block" /> Building full-stack AI Integrated Web Application 🚀
          </li>
          <li className="list-none pl-[1px] text-left">
            <ImPointRight className="inline-block" /> Exploring new technologies 🧠
          </li>
        </ul>

        <p className="text-[rgb(155_126_172)]">
          "Consistency and curiosity are the keys to growth."
        </p>
        <footer className="text-[#a588c0]">Rajat</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
