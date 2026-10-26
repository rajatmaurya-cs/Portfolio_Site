import React, { memo } from 'react';
import styled from 'styled-components';

const Loader = ({ isTyping = true, isReturning = false }) => {
  return (
    <StyledWrapper $isTyping={isTyping} $isReturning={isReturning}>
      <div className="printer-scale-wrapper">
        <div className={`typewriter ${isTyping ? 'active' : 'idle'} ${isReturning ? 'returning' : ''}`}>
          <div className="slide"><i /></div>
          <div className="paper">
            {/* Glowing print slot emitter */}
            <div className="paper-emitter" />
          </div>
          <div className="keyboard" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .printer-scale-wrapper {
    transform: scale(1.4) translateZ(0);
    transform-origin: left top;
    display: inline-block;
    margin-bottom: 25px;
    margin-right: 50px;
    will-change: transform;
  }

  .typewriter {
    --blue: #c770f0;
    --blue-dark: #7b2fff;
    --key: #ffffff;
    --paper: #EEF0FD;
    --text: #c770f0;
    --tool: #FBC56C;
    --duration: ${({ $isTyping }) => ($isTyping ? '0.65s' : '3s')};
    position: relative;
    transition: transform 0.4s ease;
    ${({ $isTyping }) =>
      $isTyping
        ? 'animation: bounceTyping 0.65s ease-in-out infinite;'
        : 'animation: bounceIdle 3.5s ease-in-out infinite;'}
  }

  .typewriter .slide {
    width: 92px;
    height: 20px;
    border-radius: 3px;
    margin-left: 14px;
    transform: translateX(14px);
    background: linear-gradient(var(--blue), var(--blue-dark));
    box-shadow: 0 2px 10px rgba(199, 112, 240, 0.35);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    ${({ $isReturning, $isTyping }) =>
      $isReturning
        ? 'transform: translateX(-14px); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);'
        : $isTyping
        ? 'animation: slideTyping 0.75s ease-in-out infinite;'
        : 'transform: translateX(8px); transition: transform 0.5s ease;'}
  }

  .typewriter .slide:before, .typewriter .slide:after,
  .typewriter .slide i:before {
    content: "";
    position: absolute;
    background: var(--tool);
  }

  .typewriter .slide:before {
    width: 2px;
    height: 8px;
    top: 6px;
    left: 100%;
  }

  .typewriter .slide:after {
    left: 94px;
    top: 3px;
    height: 14px;
    width: 6px;
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(251, 197, 108, 0.4);
  }

  .typewriter .slide i {
    display: block;
    position: absolute;
    right: 100%;
    width: 6px;
    height: 4px;
    top: 4px;
    background: var(--tool);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    ${({ $isReturning }) =>
      $isReturning
        ? 'transform: rotate(-22deg);'
        : 'transform: rotate(0deg);'}
  }

  .typewriter .slide i:before {
    right: 100%;
    top: -2px;
    width: 4px;
    border-radius: 2px;
    height: 14px;
  }

  .typewriter .paper {
    position: absolute;
    left: 24px;
    top: -26px;
    width: 40px;
    height: 46px;
    border-radius: 5px;
    background: var(--paper);
    box-shadow: 0 0 12px rgba(199, 112, 240, 0.2);
    transform: translateY(12px);
    transition: transform 0.4s ease;
  }

  .typewriter .paper:before {
    content: "";
    position: absolute;
    left: 6px;
    right: 6px;
    top: 7px;
    border-radius: 2px;
    height: 3px;
    transform: scaleY(0.8);
    background: var(--text);
    box-shadow: 0 8px 0 var(--text), 0 16px 0 var(--text), 0 24px 0 var(--text);
    opacity: 0.75;
  }

  .typewriter .paper .paper-emitter {
    position: absolute;
    top: -2px;
    left: 2px;
    right: 2px;
    height: 3px;
    border-radius: 2px;
    background: #00f5ff;
    box-shadow: 0 0 8px #00f5ff, 0 0 14px #c770f0;
    opacity: ${({ $isTyping }) => ($isTyping ? '1' : '0.4')};
    transition: opacity 0.35s ease, box-shadow 0.35s ease;
    ${({ $isTyping }) => ($isTyping ? 'animation: laserPulse 0.65s infinite alternate ease-in-out;' : '')}
  }

  .typewriter .keyboard {
    width: 120px;
    height: 56px;
    margin-top: -10px;
    z-index: 1;
    position: relative;
  }

  .typewriter .keyboard:before, .typewriter .keyboard:after {
    content: "";
    position: absolute;
  }

  .typewriter .keyboard:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 7px;
    background: linear-gradient(135deg, var(--blue), var(--blue-dark));
    transform: perspective(10px) rotateX(2deg);
    transform-origin: 50% 100%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.3);
  }

  .typewriter .keyboard:after {
    left: 2px;
    top: 25px;
    width: 11px;
    height: 4px;
    border-radius: 2px;
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    ${({ $isTyping }) =>
      $isTyping
        ? 'animation: keyboard05 0.55s linear infinite;'
        : 'animation: none;'}
  }

  @keyframes laserPulse {
    from {
      opacity: 0.6;
      box-shadow: 0 0 6px #00f5ff, 0 0 10px #c770f0;
    }
    to {
      opacity: 1;
      box-shadow: 0 0 12px #00f5ff, 0 0 18px #c770f0;
    }
  }

  @keyframes bounceTyping {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1.5px);
    }
  }

  @keyframes bounceIdle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1.5px);
    }
  }

  @keyframes slideTyping {
    0%, 100% {
      transform: translateX(12px);
    }
    50% {
      transform: translateX(4px);
    }
  }

  @keyframes keyboard05 {
    0%, 100% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
    20% {
      box-shadow: 15px 1.5px 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
    40% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 1.5px 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
    60% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 1.5px 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
    80% {
      box-shadow: 15px 0 0 var(--key), 30px 1.5px 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
  }
`;

export default memo(Loader);
