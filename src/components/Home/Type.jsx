"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

const strings = [
  "Software Engineer | Backend & Distributed Systems",
  "Building Scalable Backend Infrastructure",
  "Creator of Veyra - Home For Modern Creator",
  "Express.js • PostgreSQL • Redis • Kafka",
  "Next.js • React.js • React Query",
  "Docker • AWS • GitHub Actions • CI/CD",
  "REST APIs • Testing • Performance • Reliability",
  "Strong in DSA and Problem Solving",
];

/**
 * FlyingChar — renders a character at its real DOM position,
 * then on mount reads that exact position, teleports to the typewriter,
 * and smoothly transitions back to the natural spot.
 *
 * This avoids ALL canvas / font-metric estimation. We let the browser
 * lay out the character first and measure the truth.
 */
function FlyingChar({ char, typewriterRef, isDeleting }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !typewriterRef?.current) return;

    // ── 1. Character is rendered at its natural position. Read it. ──
    const myRect = el.getBoundingClientRect();
    const twRect = typewriterRef.current.getBoundingClientRect();

    // Paper exit point: the slot where paper pokes out of the typewriter.
    // The printer CSS has .paper at left:24px, top:-26px inside a 1.6x scaled wrapper.
    // At 1.6× scale:  left ≈ 38px from wrapper left,  top ≈ -42px from wrapper top.
    // We point to the center-top of the paper card.
    const originX = twRect.left + 38 + 20; // paper left + half paper width (40/2)
    const originY = twRect.top - 10;        // just above the typewriter top (paper tip)

    // Character center in viewport
    const destX = myRect.left + myRect.width / 2;
    const destY = myRect.top  + myRect.height / 2;

    // Delta: how far from char's natural spot to the typewriter
    const dx = originX - destX;
    const dy = originY - destY;

    // ── 2. Instantly jump to the typewriter origin (no transition yet). ──
    el.style.transition = "none";
    el.style.transform = `translate(${dx}px, ${dy}px) scale(0.3)`;
    el.style.opacity = "0";

    // ── 3. One frame later, enable transition and fly home. ──
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition =
          "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.15s ease 0.05s";
        el.style.transform = "translate(0px, 0px) scale(1)";
        el.style.opacity = "1";
      });
    });
  // Only run on mount — the char's natural position is its destination.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      ref={ref}
      style={{
        display: "inline-block",
        whiteSpace: "pre",
        willChange: "transform, opacity",
        // Start invisible so there's no flicker before the useEffect fires
        opacity: 0,
      }}
    >
      {char}
    </span>
  );
}

/* ─── Main Type Component ─── */
function Type({ typewriterRef }) {
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);
  const [isPaused, setIsPaused]       = useState(false);
  // chars: array of { id, char } objects
  const [chars, setChars]             = useState([]);
  const idRef = useRef(0);

  const currentString = strings[stringIndex];

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // ── Typing forward ──
      if (charIndex < currentString.length) {
        const newChar = currentString[charIndex];
        const id = idRef.current++;
        setChars((prev) => [...prev, { id, char: newChar }]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Finished — pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // ── Deleting ──
      if (charIndex > 0) {
        setChars((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Done deleting — next string
        setChars([]);
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 500);
      }
    }
  }, [charIndex, isDeleting, isPaused, currentString]);

  useEffect(() => {
    if (isPaused) return;
    const speed = isDeleting ? 35 : 65;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isPaused, isDeleting]);

  return (
    <div className="relative h-[120px] sm:h-[140px] md:h-[180px] w-full">
      {/*
        Rendered text. Characters flow naturally so the browser
        handles all layout / wrapping. FlyingChar reads its own
        position post-render and then teleports to the typewriter.
      */}
      <span className="text-[1.4em] font-medium text-[#be6adf] md:text-[2.2em] md:font-semibold">
        {chars.map(({ id, char }) => (
          <FlyingChar
            key={id}
            char={char}
            typewriterRef={typewriterRef}
            isDeleting={isDeleting}
          />
        ))}

        {/* Blinking cursor */}
        <span
          className="inline-block w-[3px] h-[1.2em] md:h-[1.4em] bg-[#cd5ff8] ml-[2px] align-middle rounded-full"
          style={{
            animation: "blink-cursor 0.75s step-end infinite",
            boxShadow:
              "0 0 8px rgba(205,95,248,0.6), 0 0 16px rgba(205,95,248,0.3)",
          }}
        />
      </span>

      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Type;
