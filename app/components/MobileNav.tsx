"use client";

import { useState, useEffect } from "react";

const links: [string, string][] = [
  ["Projects", "#projects"],
  ["About",    "#about"],
  ["Skills",   "#skills"],
  ["Contact",  "mailto:bouazza287173@gmail.com"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden text-sm font-semibold hover:opacity-50 transition-opacity"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black flex flex-col">
          {/* Top bar */}
          <div className="flex items-start justify-between px-6 pt-6">
            <a
              href="/"
              className="text-sm font-semibold leading-none"
              onClick={() => setOpen(false)}
            >
              © Ibrahim<br />Bouazza
            </a>
            <button
              className="text-sm font-semibold hover:opacity-50 transition-opacity"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-5xl font-black tracking-tighter leading-tight hover:opacity-40 transition-opacity"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Footer */}
          <p className="px-6 pb-8 text-xs text-zinc-400">AI Automation Specialist — London, UK</p>
        </div>
      )}
    </>
  );
}
