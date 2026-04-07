"use client";

import { useEffect, useRef } from "react";

const LINES = ["Engineering", "is my craft"];

export default function ScatterHero() {
  // Flatten all letters across both lines into one array
  const letters = LINES.flatMap((line, li) =>
    line.split("").map((char, ci) => ({ char, li, ci }))
  );

  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const targets = useRef<{ x: number; y: number; r: number }[]>([]);
  const seeded = useRef(false);

  useEffect(() => {
    // Seed random targets once, after mount so we have window dims
    if (!seeded.current) {
      targets.current = letters.map(() => ({
        x: (Math.random() - 0.5) * window.innerWidth * 2.2,
        y: (Math.random() - 0.5) * window.innerHeight * 2,
        r: (Math.random() - 0.5) * 80,
      }));
      seeded.current = true;
    }

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
      style={{ fontSize: "clamp(4.5rem, 15vw, 17rem)" }}
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
