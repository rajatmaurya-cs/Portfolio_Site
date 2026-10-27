"use client";
import React, { useState } from "react";
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
  SiApachekafka,
  SiJest,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { GiBull } from "react-icons/gi";

// Inner Ring: Foundations & Core Languages (6 items)
const innerSkills = [
  { icon: <SiCplusplus />,  color: "#00599C", name: "C++",        tag: "SYSTEMS",     desc: "OOP, system software & high-performance DSA." },
  { icon: <SiTypescript />, color: "#3178C6", name: "TypeScript", tag: "LANGUAGE",    desc: "Type-safe JavaScript for scalable enterprise code." },
  { icon: <SiJavascript />, color: "#f7df1e", name: "JavaScript", tag: "LANGUAGE",    desc: "Core scripting language of modern web architecture." },
  { icon: <FaHtml5 />,      color: "#e34f26", name: "HTML5",      tag: "FOUNDATION",  desc: "Semantic structure & web accessibility standards." },
  { icon: <FaCss3Alt />,    color: "#264de4", name: "CSS3",       tag: "STYLING",     desc: "Responsive layouts, flexbox, grid & keyframe animations." },
  { icon: <SiC />,          color: "#004f9e", name: "C",          tag: "LOW-LEVEL",   desc: "Procedural language, memory pointers & data structures." },
];

// Outer Ring: Distributed Systems, Streaming, DBs & Frameworks (12 items)
const outerSkills = [
  { icon: <SiApachekafka />,color: "#ffffff", name: "Apache Kafka",tag: "STREAMING",  desc: "Distributed event streaming & partitioned broker topics." },
  { icon: <GiBull />,       color: "#ff4444", name: "BullMQ",      tag: "JOB QUEUE",  desc: "Redis-backed distributed worker queues & retry pipelines." },
  { icon: <SiRedis />,      color: "#d82c20", name: "Redis",       tag: "IN-MEMORY",  desc: "Sub-millisecond caching, rate-limiting & session state." },
  { icon: <SiPostgresql />, color: "#4169E1", name: "PostgreSQL", tag: "DATABASE",   desc: "ACID transactions, relational schemas & outbox tables." },
  { icon: <SiPrisma />,     color: "#ffffff", name: "Prisma ORM",  tag: "DATA LAYER", desc: "Type-safe database modeling & declarative migrations." },
  { icon: <SiMongodb />,    color: "#47a248", name: "MongoDB",     tag: "NOSQL",      desc: "Flexible JSON document store for high-velocity apps." },
  { icon: <FaNodeJs />,     color: "#3c873a", name: "Node.js",     tag: "RUNTIME",    desc: "Asynchronous, event-driven JavaScript backend runtime." },
  { icon: <SiExpress />,    color: "#e0e0e0", name: "Express.js",  tag: "FRAMEWORK",  desc: "Lightweight REST API routing & middleware pipeline." },
  { icon: <FaReact />,      color: "#61dafb", name: "React",       tag: "UI LIBRARY", desc: "Declarative, component-driven client architecture." },
  { icon: <SiNextdotjs />,  color: "#ffffff", name: "Next.js",     tag: "FULL-STACK", desc: "App Router, Server Components & edge optimization." },
  { icon: <SiBootstrap />,  color: "#7952b3", name: "Bootstrap",   tag: "UI TOOLKIT", desc: "Responsive component framework & utility grids." },
  { icon: <SiJest />,       color: "#c21325", name: "Jest Testing",tag: "QA / TESTING",desc: "Unit, integration & assertion test suites." },
];

function Techstack() {
  const size = 500;
  const center = size / 2;
  const innerRadius = 118;
  const outerRadius = 200;

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const isPaused = Boolean(hoveredSkill);

  return (
    <section className="relative flex flex-col items-center justify-center overflow-visible pb-6 pt-2 select-none">
      {/* Sci-fi HUD Orbit Container */}
      <div
        className="relative flex items-center justify-center overflow-visible scale-[0.72] sm:scale-[0.88] md:scale-100 transition-transform duration-300 -my-14 sm:-my-6 md:my-0"
        style={{ width: size, height: size }}
      >
        {/* SVG Background Orbital Grid & Guides */}
        <svg
          className="absolute inset-0 pointer-events-none z-0"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <defs>
            <radialGradient id="techAmbientGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#7c3aed" stopOpacity="0.04" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx={center} cy={center} r={outerRadius + 30} fill="url(#techAmbientGlow)" />

          {/* Crosshair Axes & Coordinate Markings */}
          <line
            x1={center - outerRadius - 25}
            y1={center}
            x2={center + outerRadius + 25}
            y2={center}
            stroke="rgba(199, 112, 240, 0.12)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line
            x1={center}
            y1={center - outerRadius - 25}
            x2={center}
            y2={center + outerRadius + 25}
            stroke="rgba(199, 112, 240, 0.12)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />

          {/* Outer Boundary Ring */}
          <circle
            cx={center}
            cy={center}
            r={outerRadius + 28}
            fill="none"
            stroke="rgba(199, 112, 240, 0.08)"
            strokeWidth="1"
          />

          {/* Outer Orbit Track */}
          <circle
            cx={center}
            cy={center}
            r={outerRadius}
            fill="none"
            stroke="rgba(199, 112, 240, 0.22)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />

          {/* Middle Guide Track */}
          <circle
            cx={center}
            cy={center}
            r={(innerRadius + outerRadius) / 2}
            fill="none"
            stroke="rgba(168, 85, 247, 0.08)"
            strokeWidth="1"
          />

          {/* Inner Orbit Track */}
          <circle
            cx={center}
            cy={center}
            r={innerRadius}
            fill="none"
            stroke="rgba(199, 112, 240, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />

          {/* Telemetry coordinate marks */}
          <text x={center + 8} y={center - outerRadius - 8} fill="rgba(199,112,240,0.35)" fontSize="9" fontFamily="monospace">000° RAD</text>
          <text x={center + outerRadius + 8} y={center - 6} fill="rgba(199,112,240,0.35)" fontSize="9" fontFamily="monospace">090° CLK</text>
          <text x={center + 8} y={center + outerRadius + 15} fill="rgba(199,112,240,0.35)" fontSize="9" fontFamily="monospace">180° RAD</text>
          <text x={center - outerRadius - 48} y={center - 6} fill="rgba(199,112,240,0.35)" fontSize="9" fontFamily="monospace">270° CCW</text>
        </svg>

        {/* ─── INNER ORBITING RING (Clockwise, 36s) ─── */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            animation: "orbitCW 36s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Laser Connector Beam for Inner Skill */}
          {hoveredSkill?.ring === "inner" && (
            <svg
              className="absolute inset-0 pointer-events-none z-10"
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
            >
              {/* Colored Glow Beam */}
              <line
                x1={center}
                y1={center}
                x2={hoveredSkill.x}
                y2={hoveredSkill.y}
                stroke={hoveredSkill.color || "#00f5ff"}
                strokeWidth="3"
                strokeDasharray="6 3"
                strokeLinecap="round"
                style={{
                  filter: `drop-shadow(0 0 8px ${hoveredSkill.color || "#00f5ff"}) drop-shadow(0 0 2px #00f5ff)`,
                  animation: "laserPulse 0.8s linear infinite",
                }}
              />
              {/* White Laser Core */}
              <line
                x1={center}
                y1={center}
                x2={hoveredSkill.x}
                y2={hoveredSkill.y}
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeDasharray="6 3"
                strokeLinecap="round"
                style={{
                  opacity: 0.9,
                  animation: "laserPulse 0.8s linear infinite",
                }}
              />
              {/* Target Reticle around the hovered node */}
              <circle
                cx={hoveredSkill.x}
                cy={hoveredSkill.y}
                r="28"
                fill="none"
                stroke={hoveredSkill.color || "#00f5ff"}
                strokeWidth="1.5"
                strokeDasharray="5 3"
                style={{
                  filter: `drop-shadow(0 0 6px ${hoveredSkill.color || "#00f5ff"})`,
                }}
              />
              {/* Center Anchor Dot */}
              <circle
                cx={center}
                cy={center}
                r="4"
                fill={hoveredSkill.color || "#00f5ff"}
                style={{
                  filter: `drop-shadow(0 0 6px ${hoveredSkill.color || "#00f5ff"})`,
                }}
              />
            </svg>
          )}

          {innerSkills.map((skill, index) => {
            const angle = (index / innerSkills.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.round(center + innerRadius * Math.cos(rad));
            const y = Math.round(center + innerRadius * Math.sin(rad));
            const isTarget = hoveredSkill?.name === skill.name;

            return (
              <div
                key={skill.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                style={{ left: `${x}px`, top: `${y}px` }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    animation: "counterCW 36s linear infinite",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                  onMouseEnter={() => setHoveredSkill({ ...skill, x, y, ring: "inner" })}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <button
                    type="button"
                    className={`relative flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${
                      isTarget
                        ? "scale-130 border-[#00f5ff] bg-[rgba(15,8,35,0.98)] shadow-[0_0_26px_rgba(0,245,255,0.8)] text-[1.6rem]"
                        : "border-[rgba(199,112,240,0.45)] bg-[rgba(16,8,32,0.85)] text-[1.4rem] shadow-[0_4px_16px_rgba(109,32,197,0.3)] hover:border-[#c770f0] hover:scale-115 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)]"
                    } backdrop-blur-[8px]`}
                    style={{ color: skill.color }}
                    aria-label={skill.name}
                  >
                    {skill.icon}
                    {isTarget && (
                      <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5ff] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f5ff]" />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── OUTER ORBITING RING (Counter-Clockwise, 54s) ─── */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            animation: "orbitCCW 54s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Laser Connector Beam for Outer Skill */}
          {hoveredSkill?.ring === "outer" && (
            <svg
              className="absolute inset-0 pointer-events-none z-10"
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
            >
              {/* Colored Glow Beam */}
              <line
                x1={center}
                y1={center}
                x2={hoveredSkill.x}
                y2={hoveredSkill.y}
                stroke={hoveredSkill.color || "#c770f0"}
                strokeWidth="3"
                strokeDasharray="6 3"
                strokeLinecap="round"
                style={{
                  filter: `drop-shadow(0 0 8px ${hoveredSkill.color || "#c770f0"}) drop-shadow(0 0 2px #c770f0)`,
                  animation: "laserPulse 0.8s linear infinite",
                }}
              />
              {/* White Laser Core */}
              <line
                x1={center}
                y1={center}
                x2={hoveredSkill.x}
                y2={hoveredSkill.y}
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeDasharray="6 3"
                strokeLinecap="round"
                style={{
                  opacity: 0.9,
                  animation: "laserPulse 0.8s linear infinite",
                }}
              />
              {/* Target Reticle around the hovered node */}
              <circle
                cx={hoveredSkill.x}
                cy={hoveredSkill.y}
                r="28"
                fill="none"
                stroke={hoveredSkill.color || "#c770f0"}
                strokeWidth="1.5"
                strokeDasharray="5 3"
                style={{
                  filter: `drop-shadow(0 0 6px ${hoveredSkill.color || "#c770f0"})`,
                }}
              />
              {/* Center Anchor Dot */}
              <circle
                cx={center}
                cy={center}
                r="4"
                fill={hoveredSkill.color || "#c770f0"}
                style={{
                  filter: `drop-shadow(0 0 6px ${hoveredSkill.color || "#c770f0"})`,
                }}
              />
            </svg>
          )}

          {outerSkills.map((skill, index) => {
            const angle = (index / outerSkills.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.round(center + outerRadius * Math.cos(rad));
            const y = Math.round(center + outerRadius * Math.sin(rad));
            const isTarget = hoveredSkill?.name === skill.name;

            return (
              <div
                key={skill.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                style={{ left: `${x}px`, top: `${y}px` }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    animation: "counterCCW 54s linear infinite",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                  onMouseEnter={() => setHoveredSkill({ ...skill, x, y, ring: "outer" })}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <button
                    type="button"
                    className={`relative flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${
                      isTarget
                        ? "scale-130 border-[#c770f0] bg-[rgba(15,8,35,0.98)] shadow-[0_0_26px_rgba(199,112,240,0.8)] text-[1.6rem]"
                        : "border-[rgba(199,112,240,0.38)] bg-[rgba(16,8,32,0.85)] text-[1.4rem] shadow-[0_4px_16px_rgba(109,32,197,0.3)] hover:border-[#c770f0] hover:scale-115 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)]"
                    } backdrop-blur-[8px]`}
                    style={{ color: skill.color }}
                    aria-label={skill.name}
                  >
                    {skill.icon}
                    {isTarget && (
                      <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c770f0] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c770f0]" />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── HOLOGRAPHIC CENTRAL CORE REACTOR ─── */}
        <div className="absolute z-30 flex items-center justify-center pointer-events-none">
          {/* Radar Sweep Reticle */}
          <div
            className="absolute h-[154px] w-[154px] rounded-full border border-dashed border-[rgba(199,112,240,0.4)] pointer-events-none"
            style={{ animation: "radarSweep 14s linear infinite" }}
          />

          {/* Outer Hex Tick Ring */}
          <div className="absolute h-[142px] w-[142px] rounded-full border border-[rgba(0,245,255,0.25)] pointer-events-none" />

          {/* Central Reactor Orb */}
          <div
            className={`relative flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full p-2.5 text-center transition-all duration-400 ${
              hoveredSkill
                ? "border-2 border-[#00f5ff] bg-gradient-to-b from-[#1d0e3a] via-[#120724] to-[#0a0316] shadow-[0_0_35px_rgba(0,245,255,0.4),_inset_0_0_20px_rgba(199,112,240,0.3)]"
                : "border border-[rgba(199,112,240,0.5)] bg-gradient-to-b from-[#2a0845] via-[#130524] to-[#0a0214] shadow-[0_0_28px_rgba(199,112,240,0.4)]"
            } backdrop-blur-md`}
          >
            {hoveredSkill ? (
              /* ACTIVE INSPECT STATE */
              <div className="flex flex-col items-center justify-center animate-fadeIn px-1">
                <span className="text-[1.8rem] mb-0.5 filter drop-shadow-[0_0_8px_currentColor]" style={{ color: hoveredSkill.color }}>
                  {hoveredSkill.icon}
                </span>
                <span className="text-[0.82rem] font-extrabold tracking-tight text-white leading-tight">
                  {hoveredSkill.name}
                </span>
                <span className="mt-1 inline-block rounded-full bg-[#00f5ff]/15 px-2.5 py-0.5 text-[0.58rem] font-bold tracking-widest text-[#00f5ff] uppercase border border-[#00f5ff]/35">
                  {hoveredSkill.tag}
                </span>
              </div>
            ) : (
              /* CLEAN IDLE STATE (SYS.READY REMOVED) */
              <div className="flex flex-col items-center justify-center">
                <span className="text-[1.25rem] font-black tracking-widest text-white drop-shadow-[0_0_12px_rgba(199,112,240,0.6)]">
                  SKILLS
                </span>
                <span className="text-[0.68rem] font-medium text-[#c770f0] tracking-wider mt-1 font-mono uppercase">
                  18 Tech Stacks
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes orbitCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes orbitCCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes counterCCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reticleSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes laserPulse {
          0% { stroke-dashoffset: 0; opacity: 0.8; }
          50% { opacity: 1; stroke-width: 3px; }
          100% { stroke-dashoffset: -20; opacity: 0.8; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}

export default Techstack;
