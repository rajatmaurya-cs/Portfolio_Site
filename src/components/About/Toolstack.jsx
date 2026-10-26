"use client";
import React, { useState } from "react";
import {
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiVercel,
  SiApple,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

// Inner Ring: Primary Local Development & VCS Tools (4 items)
const innerTools = [
  { icon: <VscVscode />,        color: "#007ACC", name: "VS Code",       tag: "EDITOR",     desc: "Primary extensible workspace & debugging IDE." },
  { icon: <SiGit />,            color: "#f05032", name: "Git",           tag: "VCS",        desc: "Distributed version control, branching & staging." },
  { icon: <SiGithub />,         color: "#ffffff", name: "GitHub",        tag: "HOSTING",    desc: "Collaborative code review, PRs, actions & issues." },
  { icon: <SiPostman />,        color: "#FF6C37", name: "Postman",       tag: "API TESTING",desc: "RESTful endpoint inspection, mocking & payloads." },
];

// Outer Ring: Cloud, Infrastructure, Containers & DevOps (4 items)
const outerTools = [
  { icon: <SiDocker />,         color: "#2496ed", name: "Docker",        tag: "CONTAINERS", desc: "Microservice containerization & portable runtime images." },
  { icon: <FaAws />,            color: "#ff9900", name: "AWS Cloud",     tag: "CLOUD",      desc: "Cloud infrastructure, S3 object storage & deployment." },
  { icon: <SiVercel />,         color: "#ffffff", name: "Vercel",        tag: "EDGE DEPLOY",desc: "Serverless edge networks, preview branches & DNS." },
  { icon: <SiApple />,          color: "#ffffff", name: "macOS Terminal",tag: "WORKSTATION",desc: "Native Unix development environment & zsh tooling." },
];

function Toolstack() {
  const size = 500;
  const center = size / 2;
  const innerRadius = 118;
  const outerRadius = 200;

  const [hoveredTool, setHoveredTool] = useState(null);

  const isPaused = Boolean(hoveredTool);

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
            <radialGradient id="toolAmbientGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.12" />
              <stop offset="60%" stopColor="#7c3aed" stopOpacity="0.04" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx={center} cy={center} r={outerRadius + 30} fill="url(#toolAmbientGlow)" />

          {/* Crosshair Axes & Coordinate Markings */}
          <line
            x1={center - outerRadius - 25}
            y1={center}
            x2={center + outerRadius + 25}
            y2={center}
            stroke="rgba(0, 245, 255, 0.12)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line
            x1={center}
            y1={center - outerRadius - 25}
            x2={center}
            y2={center + outerRadius + 25}
            stroke="rgba(0, 245, 255, 0.12)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />

          {/* Outer Boundary Ring */}
          <circle
            cx={center}
            cy={center}
            r={outerRadius + 28}
            fill="none"
            stroke="rgba(0, 245, 255, 0.08)"
            strokeWidth="1"
          />

          {/* Outer Orbit Track */}
          <circle
            cx={center}
            cy={center}
            r={outerRadius}
            fill="none"
            stroke="rgba(0, 245, 255, 0.22)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />

          {/* Middle Guide Track */}
          <circle
            cx={center}
            cy={center}
            r={(innerRadius + outerRadius) / 2}
            fill="none"
            stroke="rgba(199, 112, 240, 0.08)"
            strokeWidth="1"
          />

          {/* Inner Orbit Track */}
          <circle
            cx={center}
            cy={center}
            r={innerRadius}
            fill="none"
            stroke="rgba(0, 245, 255, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />

          {/* Telemetry coordinate marks */}
          <text x={center + 8} y={center - outerRadius - 8} fill="rgba(0,245,255,0.35)" fontSize="9" fontFamily="monospace">000° SEC</text>
          <text x={center + outerRadius + 8} y={center - 6} fill="rgba(0,245,255,0.35)" fontSize="9" fontFamily="monospace">090° FIX</text>
          <text x={center + 8} y={center + outerRadius + 15} fill="rgba(0,245,255,0.35)" fontSize="9" fontFamily="monospace">180° SEC</text>
          <text x={center - outerRadius - 48} y={center - 6} fill="rgba(0,245,255,0.35)" fontSize="9" fontFamily="monospace">270° CCW</text>
        </svg>

        {/* ─── INNER ORBITING RING (Clockwise, 32s) ─── */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            animation: "orbitCW 32s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Laser Connector Beam for Inner Tool */}
          {hoveredTool?.ring === "inner" && (
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
                x2={hoveredTool.x}
                y2={hoveredTool.y}
                stroke={hoveredTool.color || "#00f5ff"}
                strokeWidth="3"
                strokeDasharray="6 3"
                strokeLinecap="round"
                style={{
                  filter: `drop-shadow(0 0 8px ${hoveredTool.color || "#00f5ff"}) drop-shadow(0 0 2px #00f5ff)`,
                  animation: "laserPulse 0.8s linear infinite",
                }}
              />
              {/* White Laser Core */}
              <line
                x1={center}
                y1={center}
                x2={hoveredTool.x}
                y2={hoveredTool.y}
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
                cx={hoveredTool.x}
                cy={hoveredTool.y}
                r="28"
                fill="none"
                stroke={hoveredTool.color || "#00f5ff"}
                strokeWidth="1.5"
                strokeDasharray="5 3"
                style={{
                  filter: `drop-shadow(0 0 6px ${hoveredTool.color || "#00f5ff"})`,
                }}
              />
              {/* Center Anchor Dot */}
              <circle
                cx={center}
                cy={center}
                r="4"
                fill={hoveredTool.color || "#00f5ff"}
                style={{
                  filter: `drop-shadow(0 0 6px ${hoveredTool.color || "#00f5ff"})`,
                }}
              />
            </svg>
          )}

          {innerTools.map((tool, index) => {
            const angle = (index / innerTools.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.round(center + innerRadius * Math.cos(rad));
            const y = Math.round(center + innerRadius * Math.sin(rad));
            const isTarget = hoveredTool?.name === tool.name;

            return (
              <div
                key={tool.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                style={{ left: `${x}px`, top: `${y}px` }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    animation: "counterCW 32s linear infinite",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                  onMouseEnter={() => setHoveredTool({ ...tool, x, y, ring: "inner" })}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <button
                    type="button"
                    className={`relative flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${
                      isTarget
                        ? "scale-130 border-[#00f5ff] bg-[rgba(8,16,35,0.98)] shadow-[0_0_26px_rgba(0,245,255,0.8)] text-[1.6rem]"
                        : "border-[rgba(0,245,255,0.4)] bg-[rgba(8,14,30,0.85)] text-[1.4rem] shadow-[0_4px_16px_rgba(0,245,255,0.25)] hover:border-[#00f5ff] hover:scale-115 hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]"
                    } backdrop-blur-[8px]`}
                    style={{ color: tool.color }}
                    aria-label={tool.name}
                  >
                    {tool.icon}
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

        {/* ─── OUTER ORBITING RING (Counter-Clockwise, 48s) ─── */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            animation: "orbitCCW 48s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Laser Connector Beam for Outer Tool */}
          {hoveredTool?.ring === "outer" && (
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
                x2={hoveredTool.x}
                y2={hoveredTool.y}
                stroke={hoveredTool.color || "#00f5ff"}
                strokeWidth="3"
                strokeDasharray="6 3"
                strokeLinecap="round"
                style={{
                  filter: `drop-shadow(0 0 8px ${hoveredTool.color || "#00f5ff"}) drop-shadow(0 0 2px #00f5ff)`,
                  animation: "laserPulse 0.8s linear infinite",
                }}
              />
              {/* White Laser Core */}
              <line
                x1={center}
                y1={center}
                x2={hoveredTool.x}
                y2={hoveredTool.y}
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
                cx={hoveredTool.x}
                cy={hoveredTool.y}
                r="28"
                fill="none"
                stroke={hoveredTool.color || "#00f5ff"}
                strokeWidth="1.5"
                strokeDasharray="5 3"
                style={{
                  filter: `drop-shadow(0 0 6px ${hoveredTool.color || "#00f5ff"})`,
                }}
              />
              {/* Center Anchor Dot */}
              <circle
                cx={center}
                cy={center}
                r="4"
                fill={hoveredTool.color || "#00f5ff"}
                style={{
                  filter: `drop-shadow(0 0 6px ${hoveredTool.color || "#00f5ff"})`,
                }}
              />
            </svg>
          )}

          {outerTools.map((tool, index) => {
            const angle = (index / outerTools.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.round(center + outerRadius * Math.cos(rad));
            const y = Math.round(center + outerRadius * Math.sin(rad));
            const isTarget = hoveredTool?.name === tool.name;

            return (
              <div
                key={tool.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                style={{ left: `${x}px`, top: `${y}px` }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    animation: "counterCCW 48s linear infinite",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                  onMouseEnter={() => setHoveredTool({ ...tool, x, y, ring: "outer" })}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <button
                    type="button"
                    className={`relative flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${
                      isTarget
                        ? "scale-130 border-[#c770f0] bg-[rgba(8,16,35,0.98)] shadow-[0_0_26px_rgba(199,112,240,0.8)] text-[1.6rem]"
                        : "border-[rgba(0,245,255,0.35)] bg-[rgba(8,14,30,0.85)] text-[1.4rem] shadow-[0_4px_16px_rgba(0,245,255,0.2)] hover:border-[#c770f0] hover:scale-115 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)]"
                    } backdrop-blur-[8px]`}
                    style={{ color: tool.color }}
                    aria-label={tool.name}
                  >
                    {tool.icon}
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
            className="absolute h-[154px] w-[154px] rounded-full border border-dashed border-[rgba(0,245,255,0.4)] pointer-events-none"
            style={{ animation: "radarSweep 14s linear infinite" }}
          />

          {/* Outer Hex Tick Ring */}
          <div className="absolute h-[142px] w-[142px] rounded-full border border-[rgba(199,112,240,0.25)] pointer-events-none" />

          {/* Central Reactor Orb */}
          <div
            className={`relative flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full p-2.5 text-center transition-all duration-400 ${
              hoveredTool
                ? "border-2 border-[#00f5ff] bg-gradient-to-b from-[#0e213a] via-[#091526] to-[#040914] shadow-[0_0_35px_rgba(0,245,255,0.4),_inset_0_0_20px_rgba(0,245,255,0.3)]"
                : "border border-[rgba(0,245,255,0.5)] bg-gradient-to-b from-[#0c2444] via-[#08152a] to-[#040816] shadow-[0_0_28px_rgba(0,245,255,0.35)]"
            } backdrop-blur-md`}
          >
            {hoveredTool ? (
              /* ACTIVE INSPECT STATE */
              <div className="flex flex-col items-center justify-center animate-fadeIn px-1">
                <span className="text-[1.8rem] mb-0.5 filter drop-shadow-[0_0_8px_currentColor]" style={{ color: hoveredTool.color }}>
                  {hoveredTool.icon}
                </span>
                <span className="text-[0.82rem] font-extrabold tracking-tight text-white leading-tight">
                  {hoveredTool.name}
                </span>
                <span className="mt-1 inline-block rounded-full bg-[#c770f0]/15 px-2.5 py-0.5 text-[0.58rem] font-bold tracking-widest text-[#c770f0] uppercase border border-[#c770f0]/35">
                  {hoveredTool.tag}
                </span>
              </div>
            ) : (
              /* CLEAN IDLE STATE (SYS.ACTIVE REMOVED) */
              <div className="flex flex-col items-center justify-center">
                <span className="text-[1.25rem] font-black tracking-widest text-white drop-shadow-[0_0_12px_rgba(0,245,255,0.6)]">
                  TOOLS
                </span>
                <span className="text-[0.68rem] font-medium text-[#00f5ff] tracking-wider mt-1 font-mono uppercase">
                  8 Tools
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

export default Toolstack;
