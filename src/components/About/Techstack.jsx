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
    SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { icon: <SiC />,          color: "#004f9e", name: "C",          desc: "Procedural programming language." },
  { icon: <SiCplusplus />,  color: "#00599C", name: "C++",        desc: "OOP and system programming." },
  { icon: <FaHtml5 />,      color: "#e34f26", name: "HTML",       desc: "Structure of web pages." },
  { icon: <FaCss3Alt />,    color: "#264de4", name: "CSS",        desc: "Styling and layout." },
  { icon: <SiJavascript />, color: "#f7df1e", name: "JavaScript", desc: "Core web language." },
  { icon: <SiTypescript />, color: "#3178C6", name: "TypeScript", desc: "Typed JavaScript for scalable applications." },
  { icon: <FaReact />,      color: "#61dafb", name: "React",      desc: "Component-based UI." },
  { icon: <SiNextdotjs />,  color: "#ffffff", name: "Next.js",    desc: "React framework for full-stack web applications." },
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
    <section className="flex items-center justify-center overflow-visible pb-10 pt-5">
      <div
        className="relative flex items-center justify-center overflow-visible max-[600px]:scale-[0.72]"
        style={{ width: size, height: size }}
      >
        {/* Center hub */}
        <div className="absolute z-[2] flex h-[90px] w-[90px] items-center justify-center rounded-full bg-gradient-to-br from-[#6d20c5] to-[#c770f0] text-[0.85rem] font-bold tracking-[0.06em] text-white shadow-[0_0_30px_rgba(199,112,240,0.45)]">
          SKILLS
        </div>

        {/* Orbit ring (spinning) */}
        <div className="absolute inset-0 animate-orbitSpin rounded-full border border-dashed border-[rgba(199,112,240,0.35)]">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = center + radius * Math.cos(rad);
            const y = center + radius * Math.sin(rad);
            const showLeft = x > center;

            return (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: x, top: y }}
              >
                {/* Counter-rotate so icon stays upright */}
                <div className="group relative flex animate-counterSpin items-center justify-center">
                  <span
                    className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[rgba(199,112,240,0.5)] bg-[rgba(20,10,40,0.85)] text-[1.6rem] shadow-[0_4px_18px_rgba(109,32,197,0.3)] backdrop-blur-[6px] transition duration-300 hover:scale-125 hover:shadow-[0_0_22px_rgba(199,112,240,0.6)]"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>

                  <div
                    className={`pointer-events-none absolute top-1/2 z-[1200] w-[180px] -translate-y-1/2 rounded-[10px] border border-[rgba(199,112,240,0.4)] bg-[rgba(20,10,40,0.94)] px-3 py-2 opacity-0 shadow-[0_8px_24px_rgba(109,32,197,0.35)] backdrop-blur-[8px] transition-opacity duration-200 group-hover:opacity-100 ${
                      showLeft ? "right-[62px]" : "left-[62px]"
                    }`}
                  >
                    <p className="mb-[3px] text-[0.85rem] font-semibold text-[#e2c8f9]">{skill.name}</p>
                    <p className="m-0 whitespace-normal text-[0.72rem] text-[#a07bbf]">{skill.desc}</p>
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
