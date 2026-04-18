"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function DottedSurface() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === "dark";

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      style={{
        backgroundColor: dark ? "#000000" : "#ffffff",
        backgroundImage: dark
          ? "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)"
          : "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
        backgroundSize: "6rem 4rem",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: dark
            ? "radial-gradient(circle 500px at 50% 200px, #0d1f30, transparent)"
            : "radial-gradient(circle 500px at 50% 200px, #C9EBFF, transparent)",
        }}
      />
    </div>
  );
}
