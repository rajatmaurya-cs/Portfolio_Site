import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import styled from 'styled-components';
import myImg from '../src/Assets/myImg.jpg';

// Isolated Clock component to prevent re-rendering the whole watch assembly every second
const SystemTimeDisplay = memo(() => {
  const [timeStr, setTimeStr] = useState('--:--');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h24 = now.getHours();
      const h12 = h24 % 12 || 12;
      const hours = h12.toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTimeStr(`${hours}:${minutes}`);
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="system-time" suppressHydrationWarning>{timeStr}</div>;
});

const HeroTimeDisplay = memo(() => {
  const [digits, setDigits] = useState({ hours: '--', minutes: '--', seconds: '--' });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h24 = now.getHours();
      const h12 = h24 % 12 || 12;
      setDigits({
        hours: h12.toString().padStart(2, '0'),
        minutes: now.getMinutes().toString().padStart(2, '0'),
        seconds: now.getSeconds().toString().padStart(2, '0'),
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="as-hero-time" suppressHydrationWarning>
      <div className="as-h-digits" suppressHydrationWarning>{digits.hours}:{digits.minutes}</div>
      <div className="as-h-seconds" suppressHydrationWarning>{digits.seconds}</div>
    </div>
  );
});

const SmartWatch = () => {
  const watchRef = useRef(null);
  const boundsRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (watchRef.current) {
      boundsRef.current = watchRef.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!watchRef.current) return;
    if (!boundsRef.current) {
      boundsRef.current = watchRef.current.getBoundingClientRect();
    }

    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!watchRef.current || !boundsRef.current) return;
      const { left, top, width, height } = boundsRef.current;
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      watchRef.current.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    boundsRef.current = null;
    if (watchRef.current) {
      watchRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    }
  }, []);

  return (
    <StyledWrapper>
      <div 
        className="pro-watch-experience"
        ref={watchRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.15s ease-out', willChange: 'transform' }}
      >
        <div className="main-wrapper">
          <div className="watch-assembly">
            <div className="strap-piece strap-top" />
            <div className="strap-piece strap-bottom" />
            <div className="ultra-chassis">
              <div className="crown-mechanism" />
              <div className="side-utility-bar" />
              <div className="action-trigger" />
              <div className="sapphire-glass">
                <div className="os-overlay">
                  <SystemTimeDisplay />
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

                    <HeroTimeDisplay />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

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

  .pro-watch-experience .watch-assembly {
    position: relative;
    width: 380px;
    height: 460px;
  }

  @media (max-width: 480px) {
    .pro-watch-experience .watch-assembly {
      transform: scale(0.8);
    }
  }

  @media (max-width: 380px) {
    .pro-watch-experience .watch-assembly {
      transform: scale(0.65);
    }
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
    right: -12px;
    top: 75px;
    width: 14px;
    height: 50px;
    background-color: #d1d1d6;
    background-image: repeating-linear-gradient(to bottom, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1.5px, transparent 1.5px, transparent 3px), linear-gradient(to right, #b0b0b5, #e5e5ea);
    border-radius: 4px 6px 6px 4px;
    z-index: 15;
    border: 1px solid #999;
    border-left: none;
    box-shadow: 2px 0 5px rgba(0,0,0,0.2), inset -1px 0 2px rgba(255,255,255,0.8);
  }

  .pro-watch-experience .crown-mechanism::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -2px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: radial-gradient(circle at center, #f2f2f7, #c7c7cc);
    border-radius: 50%;
    border: 1px solid #a1a1a6;
    box-shadow: inset 0 0 2px #fff;
    filter: none;
  }

  .pro-watch-experience .side-utility-bar {
    position: absolute;
    right: -1px;
    top: 170px;
    width: 12px;
    height: 80px;
    background: #9ca3af;
    border-radius: 10px;
    z-index: 14;
    box-shadow: inset 2px 0 4px rgba(0,0,0,0.3);
  }

  .pro-watch-experience .side-utility-bar::after {
    content: '';
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 56px;
    background: linear-gradient(to bottom, #d1d1d6, #f2f2f7, #d1d1d6);
    border-radius: 6px;
    border: 1px solid #b0b0b5;
    box-shadow: -1px 0 2px rgba(0,0,0,0.2), inset 1px 0 2px rgba(255,255,255,1);
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
    width: 63%;
    height: 100%;
    background: #4cd964;
    border-radius: 1px;
  }

  .pro-watch-experience .viewport-canvas {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .pro-watch-experience .ui-view {
    width: 100%;
    height: 100%;
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
    transform: scale(1.2);
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
`;

export default SmartWatch;

