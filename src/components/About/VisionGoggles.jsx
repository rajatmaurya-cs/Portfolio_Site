import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.45;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1.08);
  }
`;

const traceGradient = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const floatGoggles = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
`;

const VisionGoggles = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 25}deg) rotateX(${-y * 25}deg) scale3d(1.04, 1.04, 1.04)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)";
  };

  return (
    <GogglesWrapper>
      <div
        className="goggles-card"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow backdrop */}
        <div className="ambient-glow" />

        {/* Visor SVG */}
        <svg className="goggles-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Main Gradient */}
            <linearGradient id="goggles-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cd5ff8" />
              <stop offset="30%" stopColor="#7b2fff" />
              <stop offset="65%" stopColor="#00f2fe" />
              <stop offset="85%" stopColor="#4cd964" />
              <stop offset="100%" stopColor="#ffcc00" />
            </linearGradient>
            
            {/* Drop Shadow Filter */}
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Blur background shadow (glowing outline) */}
          <path
            className="glow-path"
            d="M 80 120 C 80 80, 140 68, 200 96 C 260 68, 320 80, 320 120 C 320 166, 260 182, 200 152 C 140 182, 80 166, 80 120 Z"
            stroke="url(#goggles-grad)"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.55"
            filter="url(#neon-glow)"
          />

          {/* Sharp foreground stroke */}
          <path
            className="sharp-path"
            d="M 80 120 C 80 80, 140 68, 200 96 C 260 68, 320 80, 320 120 C 320 166, 260 182, 200 152 C 140 182, 80 166, 80 120 Z"
            stroke="url(#goggles-grad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Top brow reflective band */}
          <path
            className="brow-path"
            d="M 130 84 C 150 78, 250 78, 270 84 C 255 92, 145 92, 130 84 Z"
            stroke="url(#goggles-grad)"
            strokeWidth="2"
            opacity="0.85"
          />

          {/* Left inner cheek outline */}
          <path
            className="cheek-path"
            d="M 98 126 C 98 142, 138 152, 172 135"
            stroke="url(#goggles-grad)"
            strokeWidth="1.5"
            opacity="0.6"
            strokeLinecap="round"
          />

          {/* Right inner cheek outline */}
          <path
            className="cheek-path"
            d="M 302 126 C 302 142, 262 152, 228 135"
            stroke="url(#goggles-grad)"
            strokeWidth="1.5"
            opacity="0.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </GogglesWrapper>
  );
};

const GogglesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 280px;

  .goggles-card {
    position: relative;
    width: 100%;
    max-width: 360px;
    aspect-ratio: 4/3;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(20, 10, 40, 0.45);
    border: 1.5px solid rgba(199, 112, 240, 0.2);
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(199, 112, 240, 0.1);
    backdrop-filter: blur(8px);
    transition: transform 0.15s ease-out, border-color 0.3s ease;
    animation: ${floatGoggles} 5s ease-in-out infinite;

    &:hover {
      border-color: rgba(199, 112, 240, 0.65);
      box-shadow: 0 20px 45px rgba(199, 112, 240, 0.25), inset 0 0 25px rgba(199, 112, 240, 0.2);
    }
  }

  .ambient-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 55%;
    background: radial-gradient(circle, rgba(199, 112, 240, 0.3) 0%, transparent 70%);
    filter: blur(25px);
    pointer-events: none;
    z-index: 0;
    animation: ${pulseGlow} 4s ease-in-out infinite;
  }

  .goggles-svg {
    position: relative;
    z-index: 2;
    width: 85%;
    height: 85%;
    overflow: visible;
  }

  .glow-path,
  .sharp-path,
  .brow-path,
  .cheek-path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${traceGradient} 8s linear infinite;
  }

  .glow-path {
    animation-duration: 9s;
  }

  .brow-path {
    animation-duration: 6s;
    animation-direction: reverse;
  }

  .cheek-path {
    animation-duration: 7s;
  }
`;

export default VisionGoggles;
