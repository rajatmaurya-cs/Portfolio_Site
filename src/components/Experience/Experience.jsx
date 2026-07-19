"use client";
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import Particle from "../Particle";
import {
  AiOutlineCalendar,
  AiOutlineEnvironment,
  AiOutlineSafetyCertificate,
  AiOutlineDownload,
} from "react-icons/ai";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { MdWork, MdOutlineOpenInNew } from "react-icons/md";
import smallFareLogo from "../../Assets/smallFare.png";
import Butterfly from "../../../components/butterfly";

/* ─────────────────── Experience Data ─────────────────── */
const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Small Fare™",
    type: "Internship",
    duration: "Mar 2026 – Jun 2026",
    length: "4 months",
    location: "Remote",
    logo: smallFareLogo,
    summary:
      "Worked as a Frontend Developer Intern, contributing to the development of scalable web applications using Next.js and React.js.",
    highlights: [
      "Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG) to improve performance and SEO",
      "Optimized data fetching strategies using caching and incremental rendering techniques",
      "Integrated REST APIs and handled asynchronous data flow for dynamic content rendering",
      "Designed and implemented pagination for efficient handling of large datasets",
      "Built reusable and modular components following component-based architecture",
      "Managed application routing and optimized page load performance using Next.js features",
      "Collaborated using Git for version control and followed structured development workflows",
      "Identified and resolved performance bottlenecks and runtime issues",
    ],
    techStack: [
      { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
      { icon: <FaReact />, name: "React.js", color: "#61dafb" },
      { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
      { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
    ],
    certificatePdf: "/SmallFareCertificate.pdf",
  },
];

/* ─────────────────── Component ─────────────────── */
function Experience() {
  const [activeExp, setActiveExp] = useState(0);
  const [visibleHighlights, setVisibleHighlights] = useState([]);
  const [showCertificate, setShowCertificate] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef(null);

  const exp = experiences[activeExp];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stagger-reveal highlights
  useEffect(() => {
    setVisibleHighlights([]);
    const timers = exp.highlights.map((_, i) =>
      setTimeout(() => {
        setVisibleHighlights((prev) => [...prev, i]);
      }, 150 + i * 120)
    );
    return () => timers.forEach(clearTimeout);
  }, [activeExp]);

  // 3D tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    cardRef.current.style.transform = `perspective(1200px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1200px) rotateY(0) rotateX(0)";
  };

  return (
    <div className="relative pb-[30px] pt-[60px] md:pt-[100px] text-white min-h-screen">
      <Particle />
      <div className="mx-auto max-w-6xl px-4">
        {/* ── Section Header ── */}
        <div className="mb-12 text-center relative">
          <div className="absolute -top-[10px] left-[5%] md:left-[25%] opacity-90 scale-[0.7]">
            <Butterfly />
          </div>
          <h1 className="pb-[10px] pt-[10px] text-[2.3em] font-medium text-white">
            Work{" "}
            <strong className="text-[#c770f0]">Experience</strong>
          </h1>
          <p className="mx-auto max-w-xl text-[rgba(255,255,255,0.55)] text-[0.95em]">
            My professional journey building production-grade web
            applications.
          </p>
        </div>

        {/* ── Timeline ── */}
        <StyledExperience $mounted={mounted}>
          {/* Timeline vertical line */}
          <div className="timeline-line" />

          {experiences.map((item, idx) => (
            <div
              key={item.id}
              className={`timeline-node ${activeExp === idx ? "active" : ""}`}
              onClick={() => setActiveExp(idx)}
            >
              {/* Dot on timeline */}
              <div className="timeline-dot">
                <div className="dot-inner" />
                <div className="dot-pulse" />
              </div>

              {/* Experience Card */}
              <div
                className="exp-card"
                ref={activeExp === idx ? cardRef : null}
                onMouseMove={activeExp === idx ? handleMouseMove : undefined}
                onMouseLeave={
                  activeExp === idx ? handleMouseLeave : undefined
                }
              >
                {/* Background Particles */}
                <div className="card-particles">
                  <div className="particle p1" />
                  <div className="particle p2" />
                  <div className="particle p3" />
                  <div className="particle p4" />
                  <div className="particle p5" />
                </div>

                {/* Card Header */}
                <div className="card-header">
                  <div className="company-logo-wrapper">
                    <img
                      src={
                        item.logo?.src ||
                        item.logo ||
                        "/placeholder.png"
                      }
                      alt={item.company}
                      className="company-logo"
                    />
                    <div className="logo-ring" />
                  </div>

                  <div className="header-info">
                    <h2 className="role-title">{item.role}</h2>
                    <div className="company-row">
                      <span className="company-name">{item.company}</span>
                      <span className="type-badge">{item.type}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-item calendar">
                        <AiOutlineCalendar /> {item.duration} ·{" "}
                        {item.length}
                      </span>
                      <span className="meta-item location">
                        <AiOutlineEnvironment /> {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="card-divider" />

                {/* Summary */}
                <p className="summary-text">{item.summary}</p>

                {/* Highlights */}
                <div className="highlights-section">
                  <h3 className="section-label">Key Contributions</h3>
                  <ul className="highlights-list">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className={`highlight-item ${
                          visibleHighlights.includes(i) ? "visible" : ""
                        }`}
                      >
                        <span className="highlight-dot" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="tech-section">
                  <h3 className="section-label">Tech Stack</h3>
                  <div className="tech-pills">
                    {item.techStack.map((t, i) => (
                      <div
                        key={i}
                        className="tech-pill"
                        style={{ "--pill-color": t.color }}
                      >
                        <span className="tech-icon">{t.icon}</span>
                        <span>{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificate Button */}
                <div className="certificate-section">
                  <button
                    className="cert-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCertificate(true);
                    }}
                  >
                    <AiOutlineSafetyCertificate className="cert-icon" />
                    <span>View Letter of Appreciation</span>
                    <MdOutlineOpenInNew className="open-icon" />
                  </button>

                  <a
                    href={item.certificatePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="download-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AiOutlineDownload />
                    <span>Download Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </StyledExperience>

        {/* ── Certificate Modal ── */}
        {showCertificate && (
          <CertificateModal>
            <div
              className="modal-backdrop"
              onClick={() => setShowCertificate(false)}
            />
            <div className="modal-content">
              <button
                className="modal-close"
                onClick={() => setShowCertificate(false)}
              >
                ✕
              </button>
              <h3 className="modal-title">
                <AiOutlineSafetyCertificate /> Letter of Appreciation
              </h3>
              <div className="pdf-frame-wrapper">
                <iframe
                  src={`${exp.certificatePdf}#toolbar=0`}
                  title="Letter of Appreciation"
                  className="pdf-frame"
                />
              </div>
              <a
                href={exp.certificatePdf}
                target="_blank"
                rel="noreferrer"
                className="modal-download"
              >
                <AiOutlineDownload /> Download PDF
              </a>
            </div>
          </CertificateModal>
        )}
      </div>
    </div>
  );
}

/* ─────────────────── Keyframes ─────────────────── */
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const pulseRing = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.2); opacity: 0; }
`;

const shimmerLine = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const particleDrift = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0; }
  20% { opacity: 0.7; }
  80% { opacity: 0.4; }
  100% { transform: translate(var(--dx), var(--dy)) scale(0.4); opacity: 0; }
`;

const modalSlideIn = keyframes`
  from { opacity: 0; transform: scale(0.92) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const breathGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(199,112,240,0.3), inset 0 0 8px rgba(199,112,240,0.1); }
  50% { box-shadow: 0 0 25px rgba(199,112,240,0.5), inset 0 0 12px rgba(199,112,240,0.15); }
`;

/* ─────────────────── Styled Components ─────────────────── */
const StyledExperience = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 0 40px 60px;

  @media (max-width: 640px) {
    padding-left: 30px;
  }

  .timeline-line {
    position: absolute;
    top: 0;
    left: 28px;
    width: 3px;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(199, 112, 240, 0.5) 15%,
      rgba(199, 112, 240, 0.5) 85%,
      transparent 100%
    );
    border-radius: 2px;

    @media (max-width: 640px) {
      left: 13px;
    }
  }

  .timeline-node {
    position: relative;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-dot {
    position: absolute;
    left: -46px;
    top: 32px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    @media (max-width: 640px) {
      left: -24px;
      width: 16px;
      height: 16px;
    }
  }

  .dot-inner {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c770f0, #7b2fff);
    border: 2.5px solid #1b1a2e;
    z-index: 2;
    transition: transform 0.3s ease;

    @media (max-width: 640px) {
      width: 10px;
      height: 10px;
    }
  }

  .active .dot-inner {
    transform: scale(1.3);
  }

  .dot-pulse {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(199, 112, 240, 0.5);
    z-index: 1;
    opacity: 0;

    @media (max-width: 640px) {
      width: 16px;
      height: 16px;
    }
  }

  .active .dot-pulse {
    animation: ${pulseRing} 2s ease-out infinite;
  }

  /* ── Card ── */
  .exp-card {
    position: relative;
    padding: 32px 36px;
    background: rgba(20, 10, 40, 0.65);
    border: 1.5px solid rgba(199, 112, 240, 0.2);
    border-radius: 20px;
    backdrop-filter: blur(16px);
    overflow: hidden;
    transition: transform 0.15s ease-out, border-color 0.4s ease,
      box-shadow 0.4s ease;
    cursor: pointer;

    &:hover {
      border-color: rgba(199, 112, 240, 0.5);
      box-shadow: 0 20px 60px rgba(109, 32, 197, 0.25),
        0 0 40px rgba(199, 112, 240, 0.08);
    }

    @media (max-width: 640px) {
      padding: 22px 18px;
      border-radius: 16px;
    }
  }

  .active .exp-card {
    border-color: rgba(199, 112, 240, 0.45);
    animation: ${breathGlow} 4s ease-in-out infinite;
  }

  /* ── Card Particles ── */
  .card-particles {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(199, 112, 240, 0.6);
    animation: ${particleDrift} 6s ease-in-out infinite;
  }

  .p1 { top: 20%; left: 10%; --dx: 40px; --dy: -60px; animation-delay: 0s; }
  .p2 { top: 60%; left: 85%; --dx: -30px; --dy: -50px; animation-delay: 1.2s; }
  .p3 { top: 80%; left: 30%; --dx: 60px; --dy: -40px; animation-delay: 2.4s; }
  .p4 { top: 10%; left: 70%; --dx: -50px; --dy: 30px; animation-delay: 0.8s; }
  .p5 { top: 45%; left: 50%; --dx: 20px; --dy: -70px; animation-delay: 3s; }

  /* ── Header ── */
  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 14px;
    }
  }

  .company-logo-wrapper {
    position: relative;
    flex-shrink: 0;
    animation: ${float} 5s ease-in-out infinite;
  }

  .company-logo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(199, 112, 240, 0.5);
    box-shadow: 0 0 20px rgba(199, 112, 240, 0.25);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 2;

    @media (max-width: 640px) {
      width: 60px;
      height: 60px;
    }
  }

  .active .company-logo {
    border-color: rgba(199, 112, 240, 0.8);
    box-shadow: 0 0 30px rgba(199, 112, 240, 0.45);
  }

  .logo-ring {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 2px dashed rgba(199, 112, 240, 0.3);
    animation: spin 12s linear infinite;
    z-index: 1;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .header-info {
    flex: 1;
  }

  .role-title {
    font-size: 1.5em;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, #e2c8f9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 6px;
    line-height: 1.3;

    @media (max-width: 640px) {
      font-size: 1.25em;
    }
  }

  .company-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      justify-content: center;
    }
  }

  .company-name {
    font-size: 1.05em;
    font-weight: 600;
    color: #c770f0;
  }

  .type-badge {
    font-size: 0.72em;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 12px;
    background: rgba(199, 112, 240, 0.15);
    border: 1px solid rgba(199, 112, 240, 0.35);
    color: #c770f0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      justify-content: center;
      gap: 10px;
    }
  }

  .meta-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85em;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    padding: 6px 14px;
    background: rgba(20, 10, 40, 0.8);
    border: 1px solid rgba(199, 112, 240, 0.2);
    border-radius: 20px;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(199, 112, 240, 0.12);
      border-color: rgba(199, 112, 240, 0.4);
      box-shadow: 0 6px 15px rgba(199, 112, 240, 0.15);
      transform: translateY(-2px);
    }

    svg {
      font-size: 1.2em;
      color: #c770f0;
      transition: all 0.3s ease;
    }
    
    &:hover svg {
      filter: drop-shadow(0 0 8px rgba(199, 112, 240, 0.6));
      transform: scale(1.1);
    }
  }

  /* ── Divider ── */
  .card-divider {
    height: 1px;
    margin: 18px 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(199, 112, 240, 0.35),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmerLine} 4s linear infinite;
  }

  /* ── Summary ── */
  .summary-text {
    font-size: 0.92em;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 22px;
  }

  /* ── Section Label ── */
  .section-label {
    font-size: 0.8em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(199, 112, 240, 0.8);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(199, 112, 240, 0.25),
        transparent
      );
    }
  }

  /* ── Highlights ── */
  .highlights-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .highlight-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.88em;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.65);
    opacity: 0;
    transform: translateX(-12px);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);

    &.visible {
      opacity: 1;
      transform: translateX(0);
    }

    &:hover {
      color: rgba(255, 255, 255, 0.95);
    }
  }

  .highlight-dot {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c770f0, #7b2fff);
    margin-top: 8px;
    box-shadow: 0 0 8px rgba(199, 112, 240, 0.4);
  }

  /* ── Tech Stack ── */
  .tech-section {
    margin-bottom: 24px;
  }

  .tech-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tech-pill {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 14px;
    border-radius: 20px;
    background: rgba(20, 10, 40, 0.8);
    border: 1px solid rgba(199, 112, 240, 0.25);
    font-size: 0.82em;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--pill-color);
      background: rgba(199, 112, 240, 0.1);
      box-shadow: 0 0 15px rgba(199, 112, 240, 0.2);
      transform: translateY(-2px);
    }
  }

  .tech-icon {
    font-size: 1.1em;
    display: flex;
    color: var(--pill-color);
  }

  /* ── Certificate ── */
  .certificate-section {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  @keyframes animatedGradientBorder {
    0% { background-position: 0% 50%; }
    100% { background-position: 300% 50%; }
  }

  .cert-btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 28px;
    border-radius: 50px;
    border: none;
    color: #fff;
    font-size: 0.95em;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 4px 15px rgba(199, 112, 240, 0.15);
    z-index: 1;
    
    /* Animated Gradient Background */
    &::before {
      content: "";
      position: absolute;
      inset: -4px;
      border-radius: 50px;
      background: linear-gradient(90deg, #c770f0, #00f2fe, #c770f0, #00f2fe);
      background-size: 300% 100%;
      z-index: -2;
      animation: animatedGradientBorder 3s linear infinite;
      transition: filter 0.4s ease;
    }

    /* Inner Dark Button Surface */
    &::after {
      content: "";
      position: absolute;
      inset: 2px;
      border-radius: 48px;
      background: rgba(30, 15, 50, 0.95);
      z-index: -1;
      transition: background 0.4s ease;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(199, 112, 240, 0.4), 0 0 20px rgba(0, 242, 254, 0.3);
    }

    &:hover::before {
      filter: blur(2px);
    }

    &:hover::after {
      background: rgba(40, 20, 70, 0.85);
    }

    .cert-icon {
      font-size: 1.4em;
      color: #00f2fe;
      transition: transform 0.4s ease;
    }

    &:hover .cert-icon {
      transform: scale(1.15) rotate(-10deg);
    }

    .open-icon {
      font-size: 1.1em;
      color: #c770f0;
      transition: transform 0.4s ease;
    }

    &:hover .open-icon {
      transform: scale(1.1) translate(2px, -2px);
    }
  }

  .download-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 50px;
    border: 1.5px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.9em;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    backdrop-filter: blur(5px);

    &:hover {
      border-color: rgba(255, 255, 255, 0.4);
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
    }
    
    svg {
       transition: transform 0.3s ease;
    }
    
    &:hover svg {
       transform: translateY(2px);
    }
  }
`;

const CertificateModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .modal-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
  }

  .modal-content {
    position: relative;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    background: rgba(20, 10, 40, 0.95);
    border: 1.5px solid rgba(199, 112, 240, 0.35);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6),
      0 0 60px rgba(199, 112, 240, 0.15);
    animation: ${modalSlideIn} 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 640px) {
      padding: 20px;
      border-radius: 16px;
    }
  }

  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(199, 112, 240, 0.3);
    background: rgba(20, 10, 40, 0.8);
    color: rgba(255, 255, 255, 0.7);
    font-size: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;

    &:hover {
      border-color: #c770f0;
      color: #c770f0;
      background: rgba(199, 112, 240, 0.1);
    }
  }

  .modal-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2em;
    font-weight: 700;
    color: #c770f0;
    margin-bottom: 20px;

    svg {
      font-size: 1.3em;
    }
  }

  .pdf-frame-wrapper {
    flex: 1;
    min-height: 0;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(199, 112, 240, 0.2);
  }

  .pdf-frame {
    width: 100%;
    height: 60vh;
    border: none;
    background: #fff;
    border-radius: 12px;
  }

  .modal-download {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    align-self: center;
    padding: 10px 24px;
    border-radius: 12px;
    border: 1.5px solid rgba(199, 112, 240, 0.4);
    background: linear-gradient(
      135deg,
      rgba(109, 32, 197, 0.3),
      rgba(199, 112, 240, 0.12)
    );
    color: #c770f0;
    font-size: 0.9em;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      border-color: #c770f0;
      box-shadow: 0 8px 25px rgba(199, 112, 240, 0.3);
      transform: translateY(-2px);
    }
  }
`;

export default Experience;
