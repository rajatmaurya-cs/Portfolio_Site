"use client";
import React, { useState, useEffect, memo } from "react";
import PrinterAnimation from "../../../components/printer.jsx";

const strings = [
  "Software Engineer | Backend & Distributed Systems",
  "Building Scalable Backend Infrastructure",
  "Architect of HYDRA — Reliable Webhook Platform",
  "Creator of Veyra — Home For Modern Creators",
  "Express.js • PostgreSQL • Redis • Kafka",
  "Next.js • React.js • React Query",
  "Docker • AWS Cloud • Microservices • CI/CD",
  "REST APIs • Testing • Performance • Reliability",
  "Strong in DSA and Problem Solving",
];

function Type() {
  const [mounted, setMounted] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [retractingIdx, setRetractingIdx] = useState(null);
  const [phase, setPhase] = useState("TYPING"); // "TYPING" | "PAUSED" | "DELETING"
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentString = strings[stringIndex];
  const tokens = currentString.split(" ");

  useEffect(() => {
    if (!mounted) return;

    let timer;

    if (phase === "TYPING") {
      if (visibleCount < tokens.length) {
        // Super smooth typing cadence
        const currentToken = tokens[visibleCount];
        const isSymbol = currentToken === "•" || currentToken === "|" || currentToken === "—";
        const delay = isSymbol ? 220 : currentToken.length <= 4 ? 280 : 340;

        timer = setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, delay);
      } else {
        // Sentence complete; hold for 2.6 seconds for comfortable reading
        setPhase("PAUSED");
      }
    } else if (phase === "PAUSED") {
      timer = setTimeout(() => {
        setPhase("DELETING");
      }, 2600);
    } else if (phase === "DELETING") {
      if (visibleCount > 0) {
        // Step 1: Smoothly animate the word retracting down towards the printer slot
        const targetIdx = visibleCount - 1;
        setRetractingIdx(targetIdx);

        // Step 2: Remove the word after the 180ms retraction transition completes
        timer = setTimeout(() => {
          setVisibleCount((prev) => prev - 1);
          setRetractingIdx(null);
        }, 180);
      } else {
        // All words smoothly retracted; trigger carriage return glide & advance
        setIsReturning(true);
        timer = setTimeout(() => {
          setIsReturning(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
          setPhase("TYPING");
        }, 360);
      }
    }

    return () => clearTimeout(timer);
  }, [mounted, phase, visibleCount, tokens.length, stringIndex]);

  // SSR Fallback
  if (!mounted) {
    return (
      <div className="relative flex flex-col items-start w-full">
        <div className="min-h-[85px] sm:min-h-[105px] flex items-end">
          <span className="text-[1.35em] sm:text-[1.8em] md:text-[2.1em] font-semibold text-[#c770f0]">
            {strings[0]}
          </span>
        </div>
        <div className="mt-4">
          <PrinterAnimation isTyping={false} isReturning={false} />
        </div>
      </div>
    );
  }

  const displayedTokens = tokens.slice(0, visibleCount);
  const isTypingActive = phase === "TYPING" || phase === "DELETING";

  return (
    <div className="relative flex flex-col items-start w-full max-w-3xl select-none">
      {/* Printed Words Output Stage (Clean, zero top clutter) */}
      <div className="relative min-h-[85px] sm:min-h-[105px] w-full flex items-end pb-2">
        <div className="text-[1.35em] sm:text-[1.8em] md:text-[2.1em] font-semibold leading-snug flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5">
          {displayedTokens.map((token, idx) => {
            const isRetracting = idx === retractingIdx;
            return (
              <span
                key={`${stringIndex}-${idx}`}
                className={`inline-block text-[#c770f0] tracking-tight ${
                  isRetracting ? "word-retract" : "word-pop"
                }`}
              >
                {token}
              </span>
            );
          })}

          {/* Blinking Neon Cursor with Smooth Breathe */}
          <span
            className="inline-block w-[3px] h-[1.15em] bg-[#cd5ff8] ml-1 align-middle rounded-full"
            style={{
              animation: "blink-cursor 0.85s step-end infinite",
              boxShadow: "0 0 10px rgba(205, 95, 248, 0.7)",
            }}
          />
        </div>
      </div>

      {/* Laser Printhead Emission Guide connecting printer to output */}
      <div className="relative w-full max-w-[260px] my-2">
        <div className="h-[2px] w-full bg-gradient-to-r from-[#00f5ff] via-[#c770f0] to-transparent opacity-50 rounded-full" />
        <div
          className={`absolute -top-1 left-0 w-8 h-3 rounded-full bg-[#c770f0]/40 blur-sm transition-opacity duration-400 ease-out ${
            isTypingActive ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
        />
      </div>

      {/* Typewriter Machine Engine */}
      <div className="relative pt-1 pl-1">
        <PrinterAnimation isTyping={isTypingActive} isReturning={isReturning} />
      </div>

      <style jsx global>{`
        @keyframes popWordFromSlot {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.9);
            filter: blur(3px);
          }
          70% {
            opacity: 1;
            transform: translateY(-2px) scale(1.02);
            filter: blur(0);
            text-shadow: 0 0 14px rgba(199, 112, 240, 0.6);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
            text-shadow: 0 0 6px rgba(199, 112, 240, 0.3);
          }
        }

        .word-pop {
          animation: popWordFromSlot 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity, filter;
        }

        @keyframes retractWordToSlot {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateY(14px) scale(0.9);
            filter: blur(3px);
            text-shadow: 0 0 10px rgba(199, 112, 240, 0.4);
          }
        }

        .word-retract {
          animation: retractWordToSlot 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          will-change: transform, opacity, filter;
        }

        @keyframes blink-cursor {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default memo(Type);
