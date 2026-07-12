"use client";
import React, { useState, useEffect, useCallback } from "react";

const strings = [
  "Full Stack MERN Developer",
  "Building Production-Grade Web Apps with AI Integration",
  "Creator of Postify — AI-Powered Blogging Platform",
  "Strong in DSA and Problem Solving",
  "Exploring Scalable Systems and AI",
];

function Type() {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentString = strings[stringIndex];

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing forward
      if (charIndex < currentString.length) {
        setText(currentString.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        // Finished typing — pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        setText(currentString.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Finished deleting — move to next string
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
        }, 500);
      }
    }
  }, [charIndex, isDeleting, isPaused, currentString, stringIndex]);

  useEffect(() => {
    if (isPaused) return;

    const speed = isDeleting ? 35 : 65;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isPaused, isDeleting]);

  return (
    <div className="relative inline-block h-[120px] sm:h-[140px] md:h-[180px] w-full">
      <span className="text-[1.4em] font-medium text-[#be6adf] md:text-[2.2em] md:font-semibold transition-all duration-100 ease-out">
        {text}
      </span>
      <span
        className="inline-block w-[3px] h-[1.2em] md:h-[1.4em] bg-[#cd5ff8] ml-[2px] align-middle rounded-full"
        style={{
          animation: "blink-cursor 0.75s step-end infinite",
          boxShadow: "0 0 8px rgba(205,95,248,0.6), 0 0 16px rgba(205,95,248,0.3)",
        }}
      />
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Type;
