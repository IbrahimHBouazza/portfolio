"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0;
    let cx = 0, cy = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (dot.current) {
        dot.current.style.transform = `translate(${cx - 12}px, ${cy - 12}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dot}
      className="pointer-events-none fixed top-0 left-0 z-[999] h-6 w-6 rounded-full bg-blue-500 mix-blend-multiply dark:mix-blend-screen hidden md:block"
    />
  );
}
