import React from "react";
import {
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiPostman,
  SiVercel,
  SiApple,
  SiGooglechrome,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools = [
  { icon: <SiGit />,             color: "#f05032", name: "Git",          desc: "Version control system." },
  { icon: <SiGithub />,          color: "#ffffff", name: "GitHub",       desc: "Remote repository hosting." },
  { icon: <SiApple />,           color: "#a2aaad", name: "macOS",        desc: "Primary OS environment." },
  { icon: <SiGooglechrome />,    color: "#4285F4", name: "Chrome",       desc: "Browser & DevTools." },
  { icon: <VscVscode />,          color: "#007ACC", name: "VS Code",      desc: "Primary code editor." },
  { icon: <SiIntellijidea />,    color: "#fe315d", name: "IntelliJ",     desc: "Java / JVM IDE." },
  { icon: <SiPostman />,         color: "#FF6C37", name: "Postman",      desc: "API testing tool." },
  { icon: <SiVercel />,          color: "#ffffff", name: "Vercel",       desc: "Deployment platform." },
];

function Toolstack() {
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
        <div className="skills-orbit-hub">TOOLS</div>

        {/* Orbit ring (spinning) */}
        <div className="skills-orbit-ring">
          {tools.map((tool, index) => {
            const angle = (index / tools.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = center + radius * Math.cos(rad);
            const y = center + radius * Math.sin(rad);

            return (
              <div
                key={index}
                className="skills-orbit-item"
                style={{ left: x, top: y }}
              >
                <div className="skills-orbit-icon-wrap skills-orbit-counter">
                  <span
                    className="skills-orbit-icon"
                    style={{ color: tool.color }}
                  >
                    {tool.icon}
                  </span>

                  {/* Tooltip */}
                  <div className="skills-orbit-tooltip">
                    <p className="skills-orbit-tooltip-name">{tool.name}</p>
                    <p className="skills-orbit-tooltip-desc">{tool.desc}</p>
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

export default Toolstack;
