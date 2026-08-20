"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Rocket from "../../components/Rocket.json";

function Pre({ load }) {
  const [shouldRender, setShouldRender] = useState(load);

  useEffect(() => {
    if (!load) {
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => clearTimeout(timeout);
    } else {
      setShouldRender(true);
    }
  }, [load]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center transition-opacity duration-300 ${
        load ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[900px] sm:w-[950px] translate-y-10 sm:translate-y-12 mt-20">
        <Lottie animationData={Rocket} loop={true} />
      </div>
    </div>
  );
}

export default React.memo(Pre);

