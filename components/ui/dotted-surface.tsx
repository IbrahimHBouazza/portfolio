export function DottedSurface() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
        backgroundSize: "6rem 4rem",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 500px at 50% 200px, var(--hero-glow), transparent)",
        }}
      />
    </div>
  );
}
