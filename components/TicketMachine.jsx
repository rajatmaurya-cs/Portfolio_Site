"use client";
import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const TicketMachine = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const machineRef = useRef(null);

  const handlePrint = () => {
    if (isPrinting) return;
    setIsPrinting(true);
    setShowReceipt(false);

    setTimeout(() => {
      setShowReceipt(true);
      if (machineRef.current) {
        const yOffset = -140; // Leaves margin at top to prevent overlap with navbar
        const y = machineRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 800);

    setTimeout(() => {
      setIsPrinting(false);
    }, 4800);
  };

  return (
    <StyledWrapper $isPrinting={isPrinting} $showReceipt={showReceipt} ref={machineRef}>
      <div className="machine">
        {/* Ambient glow behind machine */}
        <div className="machine-glow" />

        {/* Top section with display and button */}
        <div className="machine-top">
          {/* LED indicators */}
          <div className="led-strip">
            <div className="led led-1" />
            <div className="led led-2" />
            <div className="led led-3" />
          </div>

          {/* LCD Display */}
          <div className="lcd-display">
            {isPrinting ? (
              <span className="lcd-text lcd-printing">
                <span className="lcd-spinner">◈</span> PRINTING...
              </span>
            ) : showReceipt ? (
              <span className="lcd-text">
                <span className="lcd-icon">✓</span> TICKET PRINTED
              </span>
            ) : (
              <span className="lcd-text">
                <span className="lcd-icon">⟐</span> Quick Tour Ticket
              </span>
            )}
            <div className="lcd-scanline" />
          </div>

          {/* Print Button */}
          <button className="print-btn" onClick={handlePrint} disabled={isPrinting}>
            <div className="print-btn-inner">
              <svg className="print-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>PRINT</span>
            </div>
            <div className="btn-shine" />
          </button>
        </div>

        {/* Paper slot */}
        <div className="paper-slot">
          <div className="slot-inner" />
          <div className="slot-glow" />
        </div>

        {/* Machine body */}
        <div className="machine-body">
          {/* Decorative horizontal groove */}
          <div className="vent-lines">
            <div className="vent" />
          </div>

          {/* Brand label */}
          <div className="brand-label">
            <span>RAJAT</span>
            <span className="brand-dot">●</span>
            <span>TECH</span>
          </div>
        </div>

        {/* Receipt / Ticket */}
        <div className="receipt-container">
          <div className="receipt">
            {/* Background layers from the new card design */}
            <div className="bg-stars-1" />
            <div className="bg-stars-2" />
            <div className="bg-stars-3" />
            <div className="bg-moon" />

            {/* Astronaut shifted to top left */}
            <img src="https://uiverse.io/astronaut.png" alt="Astronaut" className="astronaut-img" />

            <div className="receipt-inner">
              <div className="receipt-header">
                Rajat Maurya
              </div>
              <div className="receipt-subheader">
                Portfolio Tour Ticket <br />
                Full Stack Developer
              </div>
              <table className="receipt-table">
                <tbody>
                  <tr>
                    <th>Skill</th>
                    <th>Level</th>
                  </tr>
                  <tr>
                    <td className="no-dollar">Scalable Backend Architecture</td>
                    <td className="no-dollar">★★★★★</td>
                  </tr>
                  <tr>
                    <td className="no-dollar">Authentication & Authorization</td>
                    <td className="no-dollar">★★★★★</td>
                  </tr>
                  <tr>
                    <td className="no-dollar">Caching & Background Jobs (Redis, BullMQ)</td>
                    <td className="no-dollar">★★★★★</td>
                  </tr>
                  <tr>
                    <td className="no-dollar">Database Design (PostgreSQL, Prisma, MongoDB)</td>
                    <td className="no-dollar">★★★★★</td>
                  </tr>
                  <tr>
                    <td className="no-dollar">AI Integration & LLM Applications</td>
                    <td className="no-dollar">★★★★★</td>
                  </tr>
                  <tr>
                    <td className="no-dollar">Next.js & TypeScript</td>
                    <td className="no-dollar">★★★★★</td>
                  </tr>
                  <tr className="receipt-subtotal">
                    <td colSpan={2} className="no-dollar">── Featured Projects ──</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="no-dollar">✦ Veyra Creator Platform</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="no-dollar">✦ AI Powered NoteCraft</td>
                  </tr>
                </tbody>
              </table>
              <div className="receipt-message">
                ✨ Thanks for visiting! ✨<br />
                Let&apos;s build something great.
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

/* ── Keyframes ── */
const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const spinSymbol = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const printAndPop = keyframes`
  0% {
    transform: translateY(-100%);
    clip-path: inset(100% 0% 0% 0%);
  }
  50% {
    transform: translateY(0%);
    clip-path: inset(0% 0% 0% 0%);
  }
  60% {
    transform: translateY(0%);
    clip-path: inset(0% 0% 0% 0%);
  }
  100% {
    transform: translateY(-12%) scale(1.1);
    clip-path: inset(-20% -20% -20% -20%);
  }
`;

const shimmer = keyframes`
  0% { left: -100%; }
  100% { left: 200%; }
`;

const ledBlink = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const StyledWrapper = styled.div`
  .machine {
    position: relative;
    width: 480px;
    user-select: none;
    /* Create stacking context so receipt can pop over top */
    z-index: 1;
  }

  /* ── Ambient Glow ── */
  .machine-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 520px;
    height: 340px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%);
    filter: blur(30px);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Machine Top ── */
  .machine-top {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 24px;
    background: linear-gradient(180deg, #1f1638 0%, #150f28 100%);
    border-radius: 20px 20px 0 0;
    border: 1.5px solid rgba(168,85,247,0.3);
    border-bottom: none;
    /* Animate z-index so the receipt can pop over it after printing */
    animation: ${({ $showReceipt }) => $showReceipt ? 'dropZIndex 2s forwards' : 'none'};
    box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
  }

  @keyframes dropZIndex {
    0%, 60% { z-index: 4; }
    61%, 100% { z-index: 1; }
  }

  /* ── LED Strip ── */
  .led-strip {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 4px;
  }

  .led {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: ${ledBlink} 2s ease-in-out infinite;
  }

  .led-1 {
    background: #22c55e;
    box-shadow: 0 0 6px #22c55e, 0 0 12px rgba(34,197,94,0.4);
    animation-delay: 0s;
  }
  .led-2 {
    background: #a855f7;
    box-shadow: 0 0 6px #a855f7, 0 0 12px rgba(168,85,247,0.4);
    animation-delay: 0.3s;
  }
  .led-3 {
    background: #3b82f6;
    box-shadow: 0 0 6px #3b82f6, 0 0 12px rgba(59,130,246,0.4);
    animation-delay: 0.6s;
  }

  ${({ $isPrinting }) => $isPrinting && css`
    .led-1, .led-2, .led-3 {
      animation-duration: 0.4s;
    }
  `}

  /* ── LCD Display ── */
  .lcd-display {
    flex: 1;
    position: relative;
    overflow: hidden;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background: #090514;
    border-radius: 8px;
    border: 1.5px solid rgba(168,85,247,0.4);
    box-shadow: inset 0 0 20px rgba(168,85,247,0.05);
  }

  .lcd-scanline {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(transparent, rgba(168,85,247,0.06), transparent);
    animation: ${scanline} 3s linear infinite;
    pointer-events: none;
  }

  .lcd-text {
    font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
    font-size: 0.9em;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #00f0ff;
    text-shadow:
      0 0 8px rgba(0,240,255,0.6),
      0 0 20px rgba(0,240,255,0.3);
    z-index: 1;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .lcd-icon {
    margin-right: 6px;
    font-size: 1.1em;
  }

  .lcd-printing {
    color: #22c55e;
    text-shadow:
      0 0 5px rgba(34,197,94,0.8),
      0 0 15px rgba(34,197,94,0.4);
  }

  .lcd-spinner {
    display: inline-block;
    margin-right: 6px;
    animation: ${spinSymbol} 1s linear infinite;
  }

  /* ── Print Button ── */
  .print-btn {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border: 1.5px solid rgba(168,85,247,0.5);
    border-radius: 12px;
    background: rgba(168,85,247,0.05);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: none;

    &:hover:not(:disabled) {
      border-color: #a855f7;
      background: rgba(168,85,247,0.1);
      box-shadow:
        0 0 20px rgba(168,85,247,0.2),
        inset 0 0 10px rgba(168,85,247,0.1);
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(1px) scale(0.97);
      box-shadow: none;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .print-btn-inner {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e0d4fc;
    font-family: 'Inter', sans-serif;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 0.2em;
    z-index: 1;
  }

  .print-icon {
    width: 18px;
    height: 18px;
    color: #a855f7;
    filter: drop-shadow(0 0 4px rgba(168,85,247,0.6));
  }

  .btn-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  /* ── Paper Slot ── */
  .paper-slot {
    position: relative;
    z-index: 2;
    height: 16px;
    margin: 0 12px;
    background: #06030c;
    border-radius: 4px;
    box-shadow: inset 0 6px 12px rgba(0,0,0,1);
  }

  .slot-inner {
    display: none;
  }

  .slot-glow {
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent);
    filter: blur(2px);
    animation: ${pulseGlow} 2s ease-in-out infinite;
  }

  /* ── Machine Body ── */
  .machine-body {
    position: relative;
    z-index: 2;
    padding: 24px 20px;
    background: linear-gradient(180deg, #150f28 0%, #110c1e 100%);
    border-radius: 0 0 20px 20px;
    border: 1.5px solid rgba(168,85,247,0.3);
    border-top: none;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  }

  .vent-lines {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    padding: 0 20px;
  }

  .vent {
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.2) 20%, rgba(168,85,247,0.2) 80%, transparent 100%);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.8);
  }

  .brand-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 0.6em;
    font-weight: 700;
    letter-spacing: 0.4em;
    color: rgba(168,85,247,0.6);
    text-transform: uppercase;
  }

  .brand-dot {
    font-size: 0.4em;
    color: rgba(168,85,247,0.5);
  }

  /* ── Receipt ── */
  .receipt-container {
    position: absolute;
    top: 60px; /* Start at the paper slot */
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 3; /* Above body (2), below top (4) */
    pointer-events: none;
    opacity: 0;

    ${({ $showReceipt }) => $showReceipt && css`
      opacity: 1;
      pointer-events: auto;
      animation: ${printAndPop} 4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    `}
  }

  .receipt {
    z-index: 2;
    position: relative;
    width: 420px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #171717;
    color: rgba(255,255,255,0.85);
    font-family: "Azeret Mono", "Roboto Mono", monospace;
    font-size: 0.85em;
    font-weight: bold;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.8);
  }

  /* Inner Card Background Layers removed to keep card clean */

  /* ── Background Elements (Moon & Stars) ── */
  .bg-moon {
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border-radius: 50%;
    background: #f9f9fb;
    box-shadow: 0px 0px 100px rgba(193, 119, 241, 0.8),
      0px 0px 100px rgba(135, 42, 211, 0.8), inset #9b40fc 0px 0px 40px -12px;
    transition: 0.4s ease-in-out;
    z-index: 0;
  }
  .receipt:hover .bg-moon {
    box-shadow: 0px 0px 200px rgba(193, 119, 241, 1),
      0px 0px 200px rgba(135, 42, 211, 1), inset #9b40fc 0px 0px 40px -12px;
  }

  .bg-stars-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
      60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
      520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
    z-index: 0;
    transition: 1s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0s;
  }
  .bg-stars-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
      110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
      220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
    z-index: 0;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
  }
  .bg-stars-3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
      380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
      200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
      120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
    z-index: 0;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
  }
  .receipt:hover .bg-stars-1,
  .receipt:hover .bg-stars-2,
  .receipt:hover .bg-stars-3 {
    filter: blur(3px);
  }

  /* ── Astronaut ── */
  .astronaut-img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
    animation: move 10s ease-in-out infinite;
    z-index: 5;
  }
  .astronaut-img:hover {
    cursor: grab;
  }
  .astronaut-img:active {
    cursor: grabbing;
  }
  /* Hyperdrive stars when dragging */
  .astronaut-img:active ~ .bg-stars-1 {
    box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
      240px 35px #9b40fc, 240px 40px #9b40fc, 242px 45px #9b40fc,
      246px 48px #9b40fc, 251px 49px #9b40fc, 256px 48px #9b40fc,
      260px 45px #9b40fc, 262px 40px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .astronaut-img:active ~ .bg-stars-2 {
    box-shadow: 262px 35px #9b40fc, 262px 30px #9b40fc, 262px 25px #9b40fc,
      262px 20px #9b40fc, 275px 20px #9b40fc, 275px 24px #9b40fc,
      275px 28px #9b40fc, 275px 32px #9b40fc, 275px 36px #9b40fc,
      275px 40px #9b40fc, 275px 44px #9b40fc, 275px 48px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .astronaut-img:active ~ .bg-stars-3 {
    box-shadow: 238px 60px #9b40fc, 242px 60px #9b40fc, 246px 60px #9b40fc,
      250px 60px #9b40fc, 254px 60px #9b40fc, 258px 60px #9b40fc,
      262px 60px #9b40fc, 266px 60px #9b40fc, 270px 60px #9b40fc,
      274px 60px #9b40fc, 278px 60px #9b40fc, 282px 60px #9b40fc,
      234px 60px #9b40fc, 234px 60px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1.25em);
  }

  /* ── Content Inner ── */
  .receipt-inner {
    position: relative;
    z-index: 10;
    margin-top: 70px; /* Space for the astronaut */
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .receipt-header,
  .receipt-subheader,
  .receipt-message {
    display: flex;
    justify-content: space-between;
    padding: 0.2em 0;
  }

  .receipt-header {
    font-size: 1.2em;
    font-weight: 700;
    background: linear-gradient(135deg, #cd5ff8, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    justify-content: flex-end; /* Align right to avoid astronaut */
  }

  .receipt-subheader {
    border-bottom: 1px dashed rgba(199,112,240,0.3);
    color: rgba(255,255,255,0.5);
    font-size: 0.85em;
    text-align: right;
    display: block;
  }
  .receipt-message {
    justify-content: center;
    text-align: center;
    padding: 0.5em 1em;
    color: #cd5ff8;
    font-size: 0.9em;
  }

  .receipt-subtotal td {
    border-top: 1px dashed rgba(199,112,240,0.25);
    color: #cd5ff8;
    text-align: center !important;
    padding-top: 0.5em;
    font-weight: 600;
  }

  .receipt-table {
    width: 100%;
    font: inherit;
    color: inherit;
    text-align: left;
    line-height: 1.8em;

    th {
      color: #cd5ff8;
      font-weight: 600;
      padding-bottom: 0.5em;
    }

    td {
      padding: 0.35em 0;
    }

    th:last-child,
    td:last-child {
      text-align: right;
    }
    td.no-dollar::after {
      content: "" !important;
    }
  }

  /* ── Animations ── */
  @keyframes move {
    0% { transform: translateX(0em) translateY(0em); }
    25% { transform: translateY(-1em) translateX(-1em); rotate: -10deg; }
    50% { transform: translateY(1em) translateX(-1em); }
    75% { transform: translateY(-1.25em) translateX(1em); rotate: 10deg; }
    100% { transform: translateX(0em) translateY(0em); }
  }

  @keyframes glowing-stars {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

export default TicketMachine;
