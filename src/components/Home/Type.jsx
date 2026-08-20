"use client";
import React, { useState, useEffect, useCallback, useRef, memo } from "react";

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

const FlyingChar = memo(function FlyingChar({ char, originCoords }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If origin coords are provided, animate from typewriter origin
    if (originCoords) {
      const myRect = el.getBoundingClientRect();
      const dx = originCoords.x - (myRect.left + myRect.width / 2);
      const dy = originCoords.y - (myRect.top + myRect.height / 2);

      el.style.transform = `translate(${dx}px, ${dy}px) scale(0.3)`;
      el.style.opacity = "0";

      const rafId = requestAnimationFrame(() => {
        el.style.transition =
          "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.15s ease 0.05s";
        el.style.transform = "translate3d(0px, 0px, 0) scale(1)";
        el.style.opacity = "1";
      });

      return () => cancelAnimationFrame(rafId);
    } else {
      el.style.opacity = "1";
    }
  }, [originCoords]);

  return (
    <span
      ref={ref}
      style={{
        display: "inline-block",
        whiteSpace: "pre",
        willChange: "transform, opacity",
        opacity: originCoords ? 0 : 1,
      }}
    >
      {char}
    </span>
  );
});

/* ─── Main Type Component ─── */
function Type({ typewriterRef }) {
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [chars, setChars] = useState([]);
  const idRef = useRef(0);
  const originRef = useRef(null);

  const currentString = strings[stringIndex];

  // Update cached typewriter origin periodically or on string change
  const updateOrigin = useCallback(() => {
    if (typewriterRef?.current && typeof window !== "undefined") {
      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        originRef.current = null; // direct type on mobile for maximum battery & smoothness
        return;
      }
      const twRect = typewriterRef.current.getBoundingClientRect();
      originRef.current = {
        x: twRect.left + 58,
        y: twRect.top - 10,
      };
    }
  }, [typewriterRef]);

  useEffect(() => {
    updateOrigin();
    window.addEventListener("resize", updateOrigin, { passive: true });
    return () => window.removeEventListener("resize", updateOrigin);
  }, [updateOrigin]);

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (charIndex < currentString.length) {
        const newChar = currentString[charIndex];
        const id = idRef.current++;
        setChars((prev) => [...prev, { id, char: newChar }]);
        setCharIndex((prev) => prev + 1);
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (charIndex > 0) {
        setChars((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setChars([]);
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        setIsPaused(true);
        setTimeout(() => {
          updateOrigin();
          setIsPaused(false);
        }, 400);
      }
    }
  }, [charIndex, isDeleting, isPaused, currentString, updateOrigin]);

  useEffect(() => {
    if (isPaused) return;
    const speed = isDeleting ? 30 : 60;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isPaused, isDeleting]);

  return (
    <div className="relative h-[120px] sm:h-[140px] md:h-[180px] w-full">
      <span className="text-[1.4em] font-medium text-[#be6adf] md:text-[2.2em] md:font-semibold">
        {chars.map(({ id, char }) => (
          <FlyingChar
            key={id}
            char={char}
            originCoords={originRef.current}
          />
        ))}

        {/* Blinking cursor */}
        <span
          className="inline-block w-[3px] h-[1.2em] md:h-[1.4em] bg-[#cd5ff8] ml-[2px] align-middle rounded-full"
          style={{
            animation: "blink-cursor 0.75s step-end infinite",
            boxShadow:
              "0 0 8px rgba(205,95,248,0.6)",
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

export default memo(Type);

