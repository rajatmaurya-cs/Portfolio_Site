import React from 'react';
import styled, { keyframes } from 'styled-components';

let seed = 12345;
const random = () => {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

const generateStars = (n) => {
  let value = `${Math.floor(random() * 2000)}px ${Math.floor(random() * 2000)}px #fff`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(random() * 2000)}px ${Math.floor(random() * 2000)}px #fff`;
  }
  return value;
};

const starsSmall = generateStars(700);
const starsMedium = generateStars(200);
const starsLarge = generateStars(100);

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const StyledWrapper = styled.div`
  .stars-container {
    height: 100vh;
    width: 100vw;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${starsSmall};
    animation: ${animStar} 50s linear infinite;
  }
  #stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${starsSmall};
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${starsMedium};
    animation: ${animStar} 100s linear infinite;
  }
  #stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${starsMedium};
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${starsLarge};
    animation: ${animStar} 150s linear infinite;
  }
  #stars3:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${starsLarge};
  }
`;

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="stars-container">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
    </StyledWrapper>
  );
}

export default Pattern;
