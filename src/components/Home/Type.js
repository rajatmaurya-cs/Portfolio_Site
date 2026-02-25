import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack MERN Developer",
          "Building Production-Grade Web Apps with AI Integration",
          "Creator of Postify — AI-Powered Blogging Platform",
          "Strong in DSA and Problem Solving",
          "Exploring Scalable Systems and AI"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
