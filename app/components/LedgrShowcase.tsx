"use client";

import Image from "next/image";

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

export default function LedgrShowcase() {
  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="p-6 border-b border-zinc-100 dark:border-zinc-900">
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
      <div className="overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <div className="ml-4 rounded-md bg-zinc-200 dark:bg-zinc-800 h-5 w-52 flex items-center px-2.5">
            <span className="text-[10px] text-zinc-400">ledgr.it.com/dashboard</span>
          </div>
        </div>
        <Image
          src="/clients-view-snapshot.png"
          alt="Ledgr clients view"
          width={1400}
          height={900}
          className="w-full block"
          priority
        />
      </div>
      <div className="p-6 border-t border-zinc-100 dark:border-zinc-900">
        <StackPills />
      </div>
    </div>
  );
}
