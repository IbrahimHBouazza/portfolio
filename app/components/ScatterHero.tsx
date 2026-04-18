"use client";

import { useEffect, useRef } from "react";

const LINES = ["Full-stack", "automation", "engineer."];

export default function ScatterHero() {
  // Flatten all letters across both lines into one array
  const letters = LINES.flatMap((line, li) =>
    line.split("").map((char, ci) => ({ char, li, ci }))
  );

  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const targets = useRef<{ x: number; y: number; r: number }[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    targets.current = letters.map(() => ({
      x: (Math.random() - 0.5) * window.innerWidth * (isMobile ? 1.4 : 2.2),
      y: (Math.random() - 0.5) * window.innerHeight * (isMobile ? 1.2 : 2),
      r: (Math.random() - 0.5) * (isMobile ? 40 : 80),
    }));

    const onScroll = () => {
      // Scatter over first 80vh of scroll
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.8), 1);
      // Ease-in so it accelerates as you scroll
      const eased = progress * progress;

      refs.current.forEach((el, i) => {
        if (!el || !targets.current[i]) return;
        const { x, y, r } = targets.current[i];
        el.style.transform = `translate(${x * eased}px, ${y * eased}px) rotate(${r * eased}deg)`;
        el.style.opacity = String(Math.max(1 - eased * 0.4, 0.6));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let idx = 0;

  return (
    <h1
      className="font-black tracking-tighter leading-[0.9] select-none"
      style={{ fontSize: "clamp(3rem, 10vw, 11rem)" }}
    >
      {LINES.map((line, li) => (
        <span key={li} className="block overflow-visible">
          {line.split("").map((char) => {
            const i = idx++;
            return (
              <span
                key={i}
                ref={(el) => { refs.current[i] = el; }}
                className="inline-block"
                style={{ willChange: "transform" }}
              >
                {char === " " ? "\u00a0" : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
