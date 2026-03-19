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
        wrapperClassName:
          "text-[1.4em] font-medium text-[#be6adf] md:text-[2.2em] md:font-semibold",
        cursorClassName: "hidden text-[2.4em] text-[#b562d6] md:inline",
      }}
    />
  );
}

export default Type;
