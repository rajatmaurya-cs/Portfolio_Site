import React, { memo } from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="boxshadow" />
        <div className="main">
          <div className="top" />
          <div className="left side" />
          <div className="right side" />
          <div className="title">Rajat Maurya</div>
          <div className="button-container">
            {/* WhatsApp */}
            <a
              className="button"
              href="https://wa.me/916350624971"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <svg className="svg" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"/>
              </svg>
            </a>
            {/* Mail */}
            <a
              className="button"
              href="mailto:rajatmaurya.dev@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <svg className="svg" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              className="button"
              href="https://www.linkedin.com/in/rajat-maurya-3a172331b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="svg" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a
              className="button"
              href="https://github.com/rajatmaurya-cs"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg className="svg" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    height: 300px;
    width: 230px;
  }

  .card .boxshadow {
    position: absolute;
    height: 100%;
    width: 100%;
    border: 1px solid #cd5ff8;
    transform: scale(0.8) translateZ(0);
    box-shadow: rgba(205, 95, 248, 0.6) 0px 15px 40px 0px;
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card .main {
    width: 230px;
    height: 300px;
    overflow: hidden;
    background: linear-gradient(
      0deg,
      #2a0045 0%,
      #cd5ff8 60%,
      #2a0045 100%
    );
    position: relative;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 40px,
      100% calc(100% - 40px),
      calc(100% - 40px) 100%,
      40px 100%,
      0 calc(100% - 40px)
    );
    box-shadow: rgba(205, 95, 248, 0.6) 0px 7px 20px 0px;
    transform: translateZ(0);
    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card .main .top {
    position: absolute;
    top: 0px;
    left: 0;
    width: 0px;
    height: 0px;
    z-index: 2;
    border-top: 115px solid #0b0914;
    border-left: 115px solid transparent;
    border-right: 115px solid transparent;
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card .main .side {
    position: absolute;
    width: 100%;
    top: 0;
    transform: translateX(-50%);
    height: 101%;
    background: #0b0914;
    clip-path: polygon(0% 0%, 50% 0, 95% 45%, 100% 100%, 0% 100%);
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s;
  }

  .card .main .left {
    left: 0;
  }

  .card .main .right {
    right: 0;
    transform: translateX(50%) scale(-1, 1);
  }

  .card .main .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 90px;
    font-weight: bold;
    font-size: 18px;
    color: #0b0914;
    white-space: nowrap;
    opacity: 0;
    z-index: 3;
    transition: all 0.2s ease-out 0s;
  }

  .card .main .button-container {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }

  .card .main .button-container .button {
    position: absolute;
    transform: translateX(-50%);
    padding: 7px 12px;
    clip-path: polygon(0 0, 100% 0, 81% 100%, 21% 100%);
    background: #0b0914;
    border: none;
    color: #cd5ff8;
    display: grid;
    place-content: center;
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    cursor: pointer;
    text-decoration: none;
  }

  .card .main .button-container .button .svg {
    width: 16px;
    height: 16px;
    transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  /* Initial positions — all stacked far below (hidden) */
  .card .main .button-container .button:nth-child(1) {
    bottom: 300px;
    transition-delay: 0.6s;
  }

  .card .main .button-container .button:nth-child(2) {
    bottom: 300px;
    transition-delay: 0.75s;
  }

  .card .main .button-container .button:nth-child(3) {
    bottom: 300px;
    transition-delay: 0.9s;
  }

  .card .main .button-container .button:nth-child(4) {
    bottom: 300px;
    transition-delay: 1.05s;
  }

  .card .main .button-container .button:hover .svg {
    transform: scale(1.25);
    color: #e090ff;
  }

  .card .main .button-container .button:active .svg {
    transform: scale(0.8);
  }

  /* Hover: scale card */
  .card:hover .main {
    transform: scale(1.08);
  }

  /* Reveal Y shape — push triangle and sides away */
  .card:hover .main .top {
    top: -50px;
  }

  .card:hover .main .left {
    left: -50px;
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
  }

  .card:hover .main .right {
    right: -50px;
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
  }

  /* Reveal title */
  .card:hover .main .title {
    opacity: 1;
    transition: all 0.2s ease-out 1.3s;
  }

  /* Animate buttons up one by one */
  .card:hover .main .button-container .button:nth-child(1) {
    bottom: 120px;
    transition-delay: 0.6s;
  }

  .card:hover .main .button-container .button:nth-child(2) {
    bottom: 80px;
    transition-delay: 0.75s;
  }

  .card:hover .main .button-container .button:nth-child(3) {
    bottom: 40px;
    transition-delay: 0.9s;
  }

  .card:hover .main .button-container .button:nth-child(4) {
    bottom: 0px;
    transition-delay: 1.05s;
  }
`;

export default memo(Card);
