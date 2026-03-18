import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiRedis,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { icon: <SiC />,          color: "#004f9e", name: "C",          desc: "Procedural programming language." },
  { icon: <SiCplusplus />,  color: "#00599C", name: "C++",        desc: "OOP and system programming." },
  { icon: <FaHtml5 />,      color: "#e34f26", name: "HTML",       desc: "Structure of web pages." },
  { icon: <FaCss3Alt />,    color: "#264de4", name: "CSS",        desc: "Styling and layout." },
  { icon: <SiJavascript />, color: "#f7df1e", name: "JavaScript", desc: "Core web language." },
  { icon: <FaReact />,      color: "#61dafb", name: "React",      desc: "Component-based UI." },
  { icon: <SiBootstrap />,  color: "#7952b3", name: "Bootstrap",  desc: "Responsive UI framework." },
  { icon: <SiExpress />,    color: "#aaaaaa", name: "Express",    desc: "Backend framework." },
  { icon: <FaNodeJs />,     color: "#3c873a", name: "Node.js",    desc: "Backend runtime." },
  { icon: <SiMongodb />,    color: "#47a248", name: "MongoDB",    desc: "NoSQL database." },
  { icon: <SiRedis />,      color: "#d82c20", name: "Redis",      desc: "In-memory database & caching." },
];

function Techstack() {
  const size = 400;
  const center = size / 2;
  const radius = 160;

  return (
    <section className="skills-orbit-section">
      <div
        className="skills-orbit-wrapper"
        style={{ width: size, height: size }}
      >
        {/* Center hub */}
        <div className="skills-orbit-hub">SKILLS</div>

        {/* Orbit ring (spinning) */}
        <div className="skills-orbit-ring">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = center + radius * Math.cos(rad);
            const y = center + radius * Math.sin(rad);

            return (
              <div
                key={index}
                className="skills-orbit-item"
                style={{ left: x, top: y }}
              >
                {/* Counter-rotate so icon stays upright */}
                <div className="skills-orbit-icon-wrap skills-orbit-counter">
                  <span
                    className="skills-orbit-icon"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>

                  {/* Tooltip */}
                  <div className="skills-orbit-tooltip">
                    <p className="skills-orbit-tooltip-name">{skill.name}</p>
                    <p className="skills-orbit-tooltip-desc">{skill.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Techstack;
