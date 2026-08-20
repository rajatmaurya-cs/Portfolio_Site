"use client";
import React, { useEffect, useRef } from "react";

const Pattern = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // Create 3 layers of stars: small, medium, large
    let stars = [];

    const initStars = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Adapt star count for screen size / mobile
      const isMobile = width < 768;
      const countSmall = isMobile ? 80 : 180;
      const countMedium = isMobile ? 30 : 60;
      const countLarge = isMobile ? 15 : 30;

      stars = [];

      // Layer 1: Small stars (fastest drift, small size)
      for (let i = 0; i < countSmall; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 0.8 + 0.4,
          speed: 0.2 + Math.random() * 0.15,
          alpha: 0.3 + Math.random() * 0.5,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
          twinkleDir: 1,
        });
      }

      // Layer 2: Medium stars
      for (let i = 0; i < countMedium; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.0 + 1.0,
          speed: 0.12 + Math.random() * 0.08,
          alpha: 0.4 + Math.random() * 0.4,
          twinkleSpeed: 0.008 + Math.random() * 0.015,
          twinkleDir: 1,
        });
      }

      // Layer 3: Large stars
      for (let i = 0; i < countLarge; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.2 + 1.8,
          speed: 0.06 + Math.random() * 0.05,
          alpha: 0.5 + Math.random() * 0.4,
          twinkleSpeed: 0.005 + Math.random() * 0.01,
          twinkleDir: 1,
        });
      }
    };

    initStars();

    const handleResize = () => {
      initStars();
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastTime = performance.now();

    const render = (currentTime) => {
      if (!isVisible) return;

      const dt = Math.min((currentTime - lastTime) / 16.67, 2.5); // cap delta time
      lastTime = currentTime;

      // Draw background gradient directly to canvas
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height,
        10,
        width / 2,
        height,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, "#1b2735");
      bgGrad.addColorStop(1, "#090a0f");

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star upward
        star.y -= star.speed * dt;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Gentle twinkle
        star.alpha += star.twinkleSpeed * star.twinkleDir * dt;
        if (star.alpha > 0.9) {
          star.alpha = 0.9;
          star.twinkleDir = -1;
        } else if (star.alpha < 0.2) {
          star.alpha = 0.2;
          star.twinkleDir = 1;
        }

        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 h-full w-full"
      style={{ display: "block" }}
    />
  );
};

export default Pattern;

