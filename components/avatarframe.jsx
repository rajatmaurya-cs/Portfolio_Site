"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';

import myImg from '../src/Assets/myImg.jpg';

const AvatarFrame = () => {
  return (
    <StyledWrapper>
      <div className="avatar-container">
        {/* Outer ambient glow */}
        <div className="ambient-glow" />

        {/* Rotating outer ring */}
        <div className="orbit-ring orbit-ring-outer">
          <div className="orbit-dot dot-1" />
          <div className="orbit-dot dot-2" />
          <div className="orbit-dot dot-3" />
          <div className="orbit-dot dot-4" />
        </div>

        {/* Counter-rotating middle ring */}
        <div className="orbit-ring orbit-ring-middle">
          <div className="orbit-dot dot-5" />
          <div className="orbit-dot dot-6" />
          <div className="orbit-dot dot-7" />
        </div>

        {/* Gradient border ring */}
        <div className="gradient-ring" />

        {/* Inner glow ring */}
        <div className="inner-glow-ring" />

        {/* Avatar photo */}
        <div className="avatar-core">
          <img src={myImg.src || myImg} alt="Rajat Maurya" className="avatar-img" />
        </div>

        {/* Tilted orbital crescents (Saturn-like) */}
        <div className="saturn-ring-container">
          <svg className="crescent crescent-1" viewBox="0 0 50 50">
            <path d="M 0 0 C 54 50 185 57 226 0 C 198 39 35 32 0 0" fill="rgba(199,112,240,0.5)" />
          </svg>
          <svg className="crescent crescent-2" viewBox="0 0 50 50">
            <path d="M 0 0 C 54 50 185 57 226 0 C 198 39 35 32 0 0" fill="rgba(199,112,240,0.4)" />
          </svg>
          <svg className="crescent crescent-3" viewBox="0 0 50 50">
            <path d="M 0 0 C 54 50 185 57 226 0 C 198 39 35 32 0 0" fill="rgba(123,47,255,0.5)" />
          </svg>
          <svg className="crescent crescent-4" viewBox="0 0 50 50">
            <path d="M 0 0 C 54 50 185 57 226 0 C 198 39 35 32 0 0" fill="rgba(123,47,255,0.4)" />
          </svg>
          <svg className="crescent crescent-5" viewBox="0 0 50 50">
            <path d="M 0 0 C 54 50 185 57 226 0 C 198 39 35 32 0 0" fill="rgba(199,112,240,0.35)" />
          </svg>
          <svg className="crescent crescent-6" viewBox="0 0 50 50">
            <path d="M 0 0 C 54 50 185 57 226 0 C 198 39 35 32 0 0" fill="rgba(168,85,247,0.45)" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
}

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const rotateReverse = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const breathe = keyframes`
  0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.08); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(199,112,240,0.3), 0 0 40px rgba(199,112,240,0.15), inset 0 0 20px rgba(199,112,240,0.1); }
  50% { box-shadow: 0 0 30px rgba(199,112,240,0.5), 0 0 60px rgba(199,112,240,0.25), inset 0 0 30px rgba(199,112,240,0.15); }
`;

const StyledWrapper = styled.div`
  .avatar-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 380px;
    height: 380px;
  }

  /* Ambient outer glow - breathing effect */
  .ambient-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(199, 112, 240, 0.15) 0%,
      rgba(123, 47, 255, 0.08) 30%,
      rgba(123, 47, 255, 0.03) 50%,
      transparent 70%
    );
    animation: ${breathe} 4s ease-in-out infinite;
    pointer-events: none;
  }

  /* Rotating orbit rings */
  .orbit-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid transparent;
  }

  .orbit-ring-outer {
    width: 370px;
    height: 370px;
    border: 1px dashed rgba(199, 112, 240, 0.15);
    animation: ${rotate} 20s linear infinite;
  }

  .orbit-ring-middle {
    width: 330px;
    height: 330px;
    border: 1px dashed rgba(123, 47, 255, 0.12);
    animation: ${rotateReverse} 15s linear infinite;
  }

  /* Orbiting dots */
  .orbit-dot {
    position: absolute;
    border-radius: 50%;
    background: #cd5ff8;
    box-shadow: 0 0 6px rgba(205, 95, 248, 0.8), 0 0 12px rgba(205, 95, 248, 0.4);
  }

  .dot-1 { width: 5px; height: 5px; top: -2px; left: 50%; }
  .dot-2 { width: 4px; height: 4px; bottom: -2px; left: 50%; }
  .dot-3 { width: 3px; height: 3px; top: 50%; right: -1px; }
  .dot-4 { width: 4px; height: 4px; top: 50%; left: -2px; }
  .dot-5 { width: 4px; height: 4px; top: -2px; left: 30%; background: #7b2fff; box-shadow: 0 0 6px rgba(123,47,255,0.8), 0 0 12px rgba(123,47,255,0.4); }
  .dot-6 { width: 3px; height: 3px; bottom: -1px; right: 25%; background: #a855f7; box-shadow: 0 0 6px rgba(168,85,247,0.8); }
  .dot-7 { width: 5px; height: 5px; top: 40%; right: -2px; background: #c770f0; box-shadow: 0 0 8px rgba(199,112,240,0.8); }

  /* Gradient animated border ring */
  .gradient-ring {
    position: absolute;
    width: 295px;
    height: 295px;
    border-radius: 50%;
    padding: 3px;
    background: conic-gradient(
      from 0deg,
      #cd5ff8,
      #7b2fff,
      #1b1a2e,
      #7b2fff,
      #cd5ff8,
      #a855f7,
      #1b1a2e,
      #cd5ff8
    );
    animation: ${rotate} 6s linear infinite;
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px));
    box-shadow: 0 0 15px rgba(199,112,240,0.3), 0 0 30px rgba(123,47,255,0.15);
  }

  /* Inner glow ring */
  .inner-glow-ring {
    position: absolute;
    width: 275px;
    height: 275px;
    border-radius: 50%;
    border: 2px solid rgba(199, 112, 240, 0.2);
    animation: ${pulseGlow} 3s ease-in-out infinite;
  }

  /* Avatar core */
  .avatar-core {
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
    box-shadow:
      0 0 20px rgba(0, 0, 0, 0.5),
      inset 0 0 15px rgba(199, 112, 240, 0.15);
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }

  /* Saturn-like orbital crescents */
  .saturn-ring-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(75deg);
    z-index: 3;
  }

  .crescent {
    filter: drop-shadow(0px 0px 6px rgba(199,112,240,0.6)) drop-shadow(0px 0px 18px rgba(123,47,255,0.4));
    will-change: offset-distance, opacity, transform;
    position: absolute;
    color: transparent !important;
    top: 50%;
    left: 50%;
    transform: rotate(180deg);
    width: 300px;
    height: 14px;
    clip-path: ellipse(60% 100% at 100% 50%);
    offset-path: path("M 0,-150 A 150,150 0 1,1 0,150 A 150,150 0 1,1 0,-150 Z");
    offset-distance: 0%;
    opacity: 0;
  }

  .crescent-1 { animation: moveOval 600ms ease-in-out 0ms infinite; }
  .crescent-2 { animation: moveOval 600ms ease-in-out 100ms infinite; }
  .crescent-3 { animation: moveOval 600ms ease-in-out 200ms infinite; }
  .crescent-4 { animation: moveOval 600ms ease-in-out 300ms infinite; }
  .crescent-5 { animation: moveOval 600ms ease-in-out 400ms infinite; }
  .crescent-6 { animation: moveOval 600ms ease-in-out 500ms infinite; }

  @keyframes moveOval {
    18% {
      offset-distance: 25%;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      offset-distance: 90%;
      opacity: 0;
    }
  }

  /* Responsive */
  @media (max-width: 640px) {
    .avatar-container {
      width: 260px;
      height: 260px;
    }
    .ambient-glow { width: 360px; height: 360px; }
    .orbit-ring-outer { width: 250px; height: 250px; }
    .orbit-ring-middle { width: 225px; height: 225px; }
    .gradient-ring { width: 200px; height: 200px; }
    .inner-glow-ring { width: 186px; height: 186px; }
    .avatar-core { width: 175px; height: 175px; }
    .crescent { width: 200px; }
  }
`;

export default AvatarFrame;
