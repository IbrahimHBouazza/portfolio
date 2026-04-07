"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STACK = ["Next.js", "Node.js", "Express", "PostgreSQL", "AWS S3", "AWS Aurora", "AWS RDS", "IAM", "Docker", "Git"];

function StackPills() {
  return (
    <div className="flex flex-wrap gap-2">
      {STACK.map((t) => (
        <span
          key={t}
          className="rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectHeader() {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-1">
        <h3 className="text-2xl font-black tracking-tight">Ledgr</h3>
        <a
          href="https://ledgr.it.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400 hover:opacity-80 transition-opacity"
        >
          Live ↗
        </a>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Multi-tenant accounting SaaS — client management, invoicing &amp; org admin
      </p>
    </div>
  );
}

// Mobile: simple static card
function MobileCard() {
  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="p-6 border-b border-zinc-100 dark:border-zinc-900">
        <ProjectHeader />
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image
          src="/org-admin-snapshot.png"
          alt="Ledgr org admin dashboard"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="p-6 border-t border-zinc-100 dark:border-zinc-900">
        <StackPills />
      </div>
    </div>
  );
}

// Desktop: scroll-driven showcase
function DesktopShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current || !screensRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScrollable = wrapperRef.current.offsetHeight - window.innerHeight;
      if (rect.top > 0 || -rect.top > totalScrollable) return;
      const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      const scrollHeight = screensRef.current.scrollHeight / 2;
      screensRef.current.style.transform = `translateY(-${scrollHeight * progress}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "260vh" }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col px-6 py-6 md:px-10 md:py-8 bg-white dark:bg-black">
        <div className="flex items-start justify-between mb-4 shrink-0">
          <ProjectHeader />
          <p className="text-xs text-zinc-400 uppercase tracking-widest hidden sm:block">Scroll to explore ↓</p>
        </div>

        <div className="flex-1 min-h-0 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl flex flex-col">
          <div className="shrink-0 flex items-center gap-1.5 px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <div className="ml-4 rounded-md bg-zinc-200 dark:bg-zinc-800 h-5 w-52 flex items-center px-2.5">
              <span className="text-[10px] text-zinc-400">ledgr.it.com/dashboard</span>
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-hidden">
            <div ref={screensRef}>
              <Image
                src="/org-admin-snapshot.png"
                alt="Ledgr org admin dashboard"
                width={1400}
                height={900}
                className="w-full block"
                priority
              />
              <Image
                src="/clients-view-snapshot.png"
                alt="Ledgr clients view"
                width={1400}
                height={900}
                className="w-full block"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 shrink-0">
          <StackPills />
        </div>
      </div>
    </div>
  );
}

export default function LedgrShowcase() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Before mount: render desktop version (avoids layout shift on desktop)
  if (!mounted) return <DesktopShowcase />;

  return isMobile ? <MobileCard /> : <DesktopShowcase />;
}
