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
    <section className="flex items-center justify-center overflow-visible pb-10 pt-5">
      <div
        className="relative flex items-center justify-center overflow-visible max-[600px]:scale-[0.72]"
        style={{ width: size, height: size }}
      >
        {/* Center hub */}
        <div className="absolute z-[2] flex h-[90px] w-[90px] items-center justify-center rounded-full bg-gradient-to-br from-[#6d20c5] to-[#c770f0] text-[0.85rem] font-bold tracking-[0.06em] text-white shadow-[0_0_30px_rgba(199,112,240,0.45)]">
          TOOLS
        </div>

        {/* Orbit ring (spinning) */}
        <div className="absolute inset-0 animate-orbitSpin rounded-full border border-dashed border-[rgba(199,112,240,0.35)]">
          {tools.map((tool, index) => {
            const angle = (index / tools.length) * 360;
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
                <div className="group relative flex animate-counterSpin items-center justify-center">
                  <span
                    className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[rgba(199,112,240,0.5)] bg-[rgba(20,10,40,0.85)] text-[1.6rem] shadow-[0_4px_18px_rgba(109,32,197,0.3)] backdrop-blur-[6px] transition duration-300 hover:scale-125 hover:shadow-[0_0_22px_rgba(199,112,240,0.6)]"
                    style={{ color: tool.color }}
                  >
                    {tool.icon}
                  </span>

                  <div
                    className={`pointer-events-none absolute top-1/2 z-[1200] w-[180px] -translate-y-1/2 rounded-[10px] border border-[rgba(199,112,240,0.4)] bg-[rgba(20,10,40,0.94)] px-3 py-2 opacity-0 shadow-[0_8px_24px_rgba(109,32,197,0.35)] backdrop-blur-[8px] transition-opacity duration-200 group-hover:opacity-100 ${
                      showLeft ? "right-[62px]" : "left-[62px]"
                    }`}
                  >
                    <p className="mb-[3px] text-[0.85rem] font-semibold text-[#e2c8f9]">{tool.name}</p>
                    <p className="m-0 whitespace-normal text-[0.72rem] text-[#a07bbf]">{tool.desc}</p>
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
