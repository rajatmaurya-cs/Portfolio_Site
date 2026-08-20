"use client";
import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
      params={{
        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "right",
            speed: 0.08,
            out_mode: "out",
          },
          size: {
            value: 1.2,
          },
          opacity: {
            value: 0.6,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: false,
      }}
    />
  );
}

export default React.memo(Particle);

