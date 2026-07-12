import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import myImg from '../src/Assets/myImg.jpg';

const SmartWatch = () => {
  const [time, setTime] = useState(new Date());
  const watchRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const sysTime = `${time.getHours()}:${minutes}`;

  const handleMouseMove = (e) => {
    if (!watchRef.current) return;
    const { left, top, width, height } = watchRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    watchRef.current.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!watchRef.current) return;
    watchRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
  };

  return (
    <StyledWrapper>
      <div 
        className="pro-watch-experience"
        ref={watchRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.1s ease-out' }}
      >
        <div className="main-wrapper">
          <input type="radio" name="face-toggle" id="face1" defaultChecked />
          <input type="radio" name="face-toggle" id="face2" />
          <input type="radio" name="face-toggle" id="face3" />
          <input type="radio" name="face-toggle" id="face4" />
          <input type="radio" name="face-toggle" id="face5" />
          <div className="watch-assembly">
            <div className="strap-piece strap-top" />
            <div className="strap-piece strap-bottom" />
            <div className="ultra-chassis">
              <div className="crown-mechanism" />
              <div className="side-utility-bar" />
              <div className="action-trigger" />
              <div className="sapphire-glass">
                <div className="os-overlay">
                  <div className="system-time" suppressHydrationWarning>{sysTime}</div>
                  <div className="battery-status">
                    <div className="bat-percent">63%</div>
                    <div className="bat-icon" />
                  </div>
                </div>
                <div className="viewport-canvas">
                  <div className="ui-view face-modular-pro avatar-stats-face">
                    <div className="as-top-complications">
                      <div className="as-pill">
                        <span className="icon" style={{color: '#ffcc00'}}>☀️</span>
                        <span className="val">22°</span>
                      </div>
                      <div className="as-pill">
                        <span className="icon" style={{color: '#c770f0'}}>⌖</span>
                        <span className="val">NW</span>
                      </div>
                    </div>

                    <div className="as-center-ring">
                      <div className="as-glow-ring"></div>
                      <div className="as-tick-ring"></div>
                      <div className="as-avatar-wrapper">
                        <img src={myImg.src || myImg} alt="Rajat Maurya" className="as-avatar-img" />
                      </div>
                    </div>

                    <div className="as-info">
                      <div className="as-name">Rajat Maurya</div>
                      
                    </div>

                    <div className="as-hero-time" suppressHydrationWarning>
                      <div className="as-h-digits" suppressHydrationWarning>{hours}:{minutes}</div>
                      <div className="as-h-seconds" suppressHydrationWarning>{seconds}</div>
                    </div>
                  </div>
                  <div className="ui-view face-activity-pro">
                    <div className="ring-stack">
                      <div className="ring-item" style={{ '--c': '#ff3b30', '--p': '90%' }}>
                        <div className="ring-label">FRONTEND</div>
                        <div className="ring-stats">90% <small>PRO</small></div>
                      </div>
                      <div className="ring-item" style={{ '--c': '#4cd964', '--p': '85%' }}>
                        <div className="ring-label">BACKEND</div>
                        <div className="ring-stats">85% <small>EXP</small></div>
                      </div>
                      <div className="ring-item" style={{ '--c': '#007aff', '--p': '75%' }}>
                        <div className="ring-label">UI/UX</div>
                        <div className="ring-stats">75% <small>INT</small></div>
                      </div>
                    </div>
                  </div>
                  <div className="ui-view face-vitals-pro">
                    <div className="vital-header">CODER PULSE</div>
                    <div className="pulse-container">
                      <div className="pulse-wave" />
                      <div className="heart-icon">⚡</div>
                    </div>
                    <div className="vital-value">120</div>
                    <div className="vital-unit">COMMITS/WK</div>
                  </div>
                  <div className="ui-view face-media-pro">
                    <div className="media-card">
                      <div className="media-art">🎧</div>
                      <div className="media-meta">
                        <div className="m-title">Lofi Hip Hop</div>
                        <div className="m-artist">Beats to code to</div>
                      </div>
                      <div className="media-controls">
                        <div className="ctrl">⏮</div>
                        <div className="ctrl-play" />
                        <div className="ctrl">⏭</div>
                      </div>
                    </div>
                  </div>
                  <div className="ui-view face-apps-pro">
                    <div className="app-honeycomb">
                      <div className="app-node">📞</div>
                      <div className="app-node" style={{background: '#4cd964'}}>✉️</div>
                      <div className="app-node" style={{background: '#007aff'}}>🎵</div>
                      <div className="app-node" style={{background: '#ff9500'}}>🧭</div>
                      <div className="app-node" style={{background: '#5856d6'}}>⚙️</div>
                      <div className="app-node" style={{background: '#ff3b30'}}>❤️</div>
                      <div className="app-node" style={{background: '#ff9500'}}>🏃</div>
                      <div className="app-node" style={{background: '#4cd964'}}>📱</div>
                      <div className="app-node" style={{background: '#ffcc00'}}>📸</div>
                    </div>
                  </div>
                </div>
                <div className="page-indicator">
                  <label htmlFor="face1" className="dot-btn b1" />
                  <label htmlFor="face2" className="dot-btn b2" />
                  <label htmlFor="face3" className="dot-btn b3" />
                  <label htmlFor="face4" className="dot-btn b4" />
                  <label htmlFor="face5" className="dot-btn b5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .pro-watch-experience .main-wrapper {
    --bg-deep: #000000;
    --titanium-raw: #8e8e93;
    --titanium-dark: #1c1c1e;
    --accent-orange: #ff4500;
    --glass: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.15);
    --ease-out: cubic-bezier(0.23, 1, 0.32, 1);

    margin: 0;
    padding: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display",
      "Helvetica Neue", sans-serif;
    user-select: none;
  }

  .pro-watch-experience input {
    display: none;
  }

  .pro-watch-experience .watch-assembly {
    position: relative;
    width: 380px;
    height: 460px;
  }

  .pro-watch-experience .strap-piece {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 200px;
    background: #111;
    border-radius: 24px;
    z-index: 1;
    box-shadow:
      inset 0 0 40px rgba(0, 0, 0, 0.8),
      0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .pro-watch-experience .strap-top {
    top: -160px;
    background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%);
  }

  .pro-watch-experience .strap-bottom {
    bottom: -160px;
    background: linear-gradient(0deg, #1a1a1a 0%, #2a2a2a 100%);
  }

  .pro-watch-experience .ultra-chassis {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #d1d1d6 0%, #8e8e93 50%, #48484a 100%);
    border-radius: 68px;
    z-index: 10;
    padding: 10px;
    box-sizing: border-box;
    box-shadow:
      0 40px 80px rgba(0, 0, 0, 0.6),
      inset 0 2px 2px rgba(255, 255, 255, 0.5);
  }

  .pro-watch-experience .crown-mechanism {
    position: absolute;
    right: -8px;
    top: 75px;
    width: 22px;
    height: 55px;
    background: linear-gradient(to bottom, #8e8e93, #48484a, #8e8e93);
    border-radius: 8px;
    z-index: 15;
    border-left: 2px solid #000;
  }

  .pro-watch-experience .crown-mechanism::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 6px;
    background: var(--accent-orange);
    transform: translateY(-50%);
    filter: blur(1px);
    box-shadow: 0 0 10px var(--accent-orange);
  }

  .pro-watch-experience .action-trigger {
    position: absolute;
    left: -4px;
    top: 130px;
    width: 8px;
    height: 90px;
    background: var(--accent-orange);
    border-radius: 6px;
    z-index: 12;
    border: 1.5px solid #000;
  }

  .pro-watch-experience .sapphire-glass {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 58px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 1);
  }

  .pro-watch-experience .os-overlay {
    position: absolute;
    top: 22px;
    left: 0;
    right: 0;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    font-weight: 700;
    font-size: 11px;
    color: #fff;
    transition: opacity 0.3s ease;
  }

  .pro-watch-experience .battery-status {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .pro-watch-experience .bat-percent {
    font-size: 10px;
    color: #4cd964;
    font-weight: 800;
  }

  .pro-watch-experience .bat-icon {
    width: 20px;
    height: 11px;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    border-radius: 3px;
    position: relative;
    padding: 1.5px;
    box-sizing: border-box;
  }

  .pro-watch-experience .bat-icon::after {
    content: '';
    position: absolute;
    right: -3.5px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 5px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 0 1px 1px 0;
  }

  .pro-watch-experience .bat-icon::before {
    content: '';
    display: block;
    width: 63%; /* Match the 63% text */
    height: 100%;
    background: #4cd964;
    border-radius: 1px;
  }

  .pro-watch-experience .viewport-canvas {
    width: 500%;
    height: 100%;
    display: flex;
    transition: transform 0.7s var(--ease-out);
  }

  .pro-watch-experience .ui-view {
    width: 20%;
    height: 100%;
    padding: 55px 30px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  /* Avatar Stats Face */
  .pro-watch-experience .avatar-stats-face {
    padding: 50px 25px 30px;
    background: transparent;
    justify-content: flex-start;
  }

  .pro-watch-experience .as-top-complications {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 5px;
  }

  .pro-watch-experience .as-pill {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 6px 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .pro-watch-experience .as-pill .val {
    font-size: 11px;
    font-weight: 800;
    color: #fff;
  }

  .pro-watch-experience .as-center-ring {
    position: relative;
    width: 190px;
    height: 190px;
    margin: 0 auto 20px;
    flex-shrink: 0;
  }

  .pro-watch-experience .as-glow-ring {
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    border: 2px solid #a855f7;
    box-shadow: 0 0 25px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.4);
    z-index: 2;
  }

  .pro-watch-experience .as-tick-ring {
    position: absolute;
    inset: -12px;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    z-index: 1;
  }

  .pro-watch-experience .as-avatar-wrapper {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    overflow: hidden;
    background: radial-gradient(circle at center, #6b21a8, #050505 80%);
    z-index: 3;
  }

  .pro-watch-experience .as-avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transform: scale(1.2); /* Zoom in to crop out the white border in the source image */
  }

  .pro-watch-experience .as-info {
    text-align: center;
    margin-bottom: 5px;
  }

  .pro-watch-experience .as-name {
    font-size: 18px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 2px;
  }

  .pro-watch-experience .as-role {
    font-size: 9px;
    font-weight: 700;
    color: #c084fc;
    letter-spacing: 1px;
  }

  .pro-watch-experience .as-hero-time {
    text-align: center;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
    margin-top: 0px;
    margin-bottom: 15px;
  }

  .pro-watch-experience .as-h-digits {
    font-family: "JetBrains Mono", monospace;
    font-size: 38px;
    font-weight: 800;
    color: #fff;
    line-height: 1;
    letter-spacing: -1px;
  }

  .pro-watch-experience .as-h-seconds {
    color: #a855f7;
    font-family: "JetBrains Mono", monospace;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 1px;
  }

  .pro-watch-experience .ring-stack {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 15px;
  }

  .pro-watch-experience .ring-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 12px;
    border-left: 4px solid var(--c);
  }

  .pro-watch-experience .ring-label {
    font-size: 9px;
    font-weight: 800;
    color: var(--c);
    margin-bottom: 2px;
  }
  .pro-watch-experience .ring-stats {
    font-size: 14px;
    font-weight: 800;
    color: #fff;
  }
  .pro-watch-experience .ring-stats small {
    font-size: 9px;
    opacity: 0.5;
  }

  .pro-watch-experience .face-vitals-pro {
    justify-content: center;
  }

  .pro-watch-experience .vital-header {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1px;
    color: #ff3b30;
    margin-bottom: 10px;
  }

  .pro-watch-experience .pulse-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
  }

  .pro-watch-experience .heart-icon {
    font-size: 40px;
    z-index: 2;
    animation: beat 0.8s infinite;
  }

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.2);
    }
    30% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.1);
    }
    60% {
      transform: scale(1);
    }
  }

  .pro-watch-experience .vital-value {
    font-size: 60px;
    font-weight: 800;
    color: #fff;
    font-family: "JetBrains Mono";
    line-height: 1;
  }
  .pro-watch-experience .vital-unit {
    font-size: 14px;
    font-weight: 800;
    opacity: 0.5;
    color: #fff;
  }

  .pro-watch-experience .media-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pro-watch-experience .media-art {
    width: 110px;
    height: 110px;
    background: linear-gradient(135deg, #333, #111);
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin-bottom: 20px;
    border: 1px solid var(--glass-border);
  }

  .pro-watch-experience .m-title {
    font-size: 18px;
    font-weight: 800;
    color: #fff;
    text-align: center;
  }
  .pro-watch-experience .m-artist {
    font-size: 13px;
    opacity: 0.5;
    color: #fff;
    text-align: center;
  }

  .pro-watch-experience .media-controls {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 25px;
    font-size: 24px;
    color: #fff;
  }

  .pro-watch-experience .ctrl-play {
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 20px solid #fff;
    margin-left: 5px;
  }

  .pro-watch-experience .app-honeycomb {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding-top: 40px;
  }

  .pro-watch-experience .app-node {
    width: 52px;
    height: 52px;
    background: #1c1c1e;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  .pro-watch-experience .page-indicator {
    position: absolute;
    bottom: 22px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 110;
  }

  .pro-watch-experience .dot-btn {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
  }

  .pro-watch-experience #face1:checked ~ .watch-assembly .viewport-canvas {
    transform: translateX(0);
  }
  .pro-watch-experience #face2:checked ~ .watch-assembly .viewport-canvas {
    transform: translateX(-20%);
  }
  .pro-watch-experience #face3:checked ~ .watch-assembly .viewport-canvas {
    transform: translateX(-40%);
  }
  .pro-watch-experience #face4:checked ~ .watch-assembly .viewport-canvas {
    transform: translateX(-60%);
  }
  .pro-watch-experience #face5:checked ~ .watch-assembly .viewport-canvas {
    transform: translateX(-80%);
  }

  .pro-watch-experience #face1:checked ~ .watch-assembly .b1 {
    background: #a855f7;
    width: 16px;
    border-radius: 4px;
  }

  .pro-watch-experience #face2:checked ~ .watch-assembly .b2,
  .pro-watch-experience #face3:checked ~ .watch-assembly .b3,
  .pro-watch-experience #face4:checked ~ .watch-assembly .b4,
  .pro-watch-experience #face5:checked ~ .watch-assembly .b5 {
    background: #fff;
    width: 16px;
    border-radius: 4px;
  }`;

export default SmartWatch;
