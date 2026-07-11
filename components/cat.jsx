import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="dot-one" /> 
        <div className="dot-two" /> 
        <div className="dot-three" /> 
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-left: 10px;
  }

  .dot-two {
    background-color: #cd5ff8;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    padding: 4px;
    color: white;
  }

  .dot-one,
  .dot-three {
    background-color: transparent;
    box-shadow: inset 0 12px 0 0 #cd5ff8;
    height: 30px;
    width: 20px;
    border-radius: 50%;
    text-align: center;
    animation: flap-wings 1s infinite ease-in-out;
  }

  .dot-two {
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #cd5ff8;
    animation: flap-wings 1s infinite ease-in-out;
    animation-delay: 0.1s;
  }

  .dot-two::before,
  .dot-two::after {
    content: "";
    position: absolute;
    background-color: #cd5ff8;
  }

  .dot-two::before {
    height: 20px;
    width: 10px;
    bottom: 20px;
    left: 1px;
    border-radius: 50% 50% 0 0;
    transform: rotate(-20deg);
  }

  .dot-two::after {
    height: 20px;
    width: 10px;
    bottom: 20px;
    left: 19px;
    transform: rotate(20deg);
    border-radius: 50% 50% 0 0;
  }

  @keyframes flap-wings {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }`;

export default Loader;
