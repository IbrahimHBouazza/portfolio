import Image from "next/image";
import Clock from "./components/Clock";
import CursorDot from "./components/CursorDot";
import ScatterHero from "./components/ScatterHero";
import LedgrShowcase from "./components/LedgrShowcase";
import MobileNav from "./components/MobileNav";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { WavePath } from "@/components/ui/wave-path";

export default function Home() {
  const tickerItems = [
    "AI Automation",
    "n8n Workflows",
    "LLM Integration",
    "Data Pipelines",
    "PDF Extraction",
    "Email Automation",
    "API Integrations",
    "No-Code to Code",
  ];

  const clients = [
    { name: "BT Group", logo: "/bt-logo.png" },
    { name: "SONY", logo: null },
    { name: "Adecco", logo: null },
    { name: "Bridgestone", logo: null },
  ];

  return (
    <>
      <CursorDot />
      <DottedSurface />

      {/* ── NAV ── */}
      <header className="flex items-start justify-between px-6 pt-6 md:px-10">
        <a href="/" className="text-sm font-semibold leading-none">
          © Ibrahim<br />Bouazza
        </a>
        <MobileNav />
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative flex flex-col justify-between min-h-[85vh] px-6 pb-8 pt-10 md:px-10 overflow-hidden"
      >
        <ScatterHero />

        <div className="flex items-end justify-between">
          <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
            <p>AI automation specialist — London, UK</p>
            <p><Clock /> GMT</p>
          </div>
          <span className="text-sm font-semibold">Scroll ↘</span>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="overflow-hidden border-y border-black dark:border-white py-4">
        <div className="ticker-track flex gap-16 text-sm font-semibold uppercase tracking-widest">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="shrink-0 flex items-center gap-16">
              {item}
              <span className="text-zinc-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-2"><WavePath /></div>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="px-6 py-28 md:px-10 md:py-36 max-w-screen-xl mx-auto w-full space-y-12 border-b border-zinc-100 dark:border-zinc-900"
      >
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Automations</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
              Workflows I&apos;ve<br />built &amp; shipped.
            </h2>
          </div>
          <span className="text-xs text-zinc-400">02</span>
        </div>

        {/* Ledgr — scroll-driven showcase */}
        <LedgrShowcase />

        {/* Email-to-Excel Automation */}
        <div className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 bg-white dark:bg-black">
          <div className="bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center px-6 py-6 sm:px-10 sm:py-8">
            <div className="w-full max-w-2xl rounded-lg overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/A9HfXNOLKn0"
                title="Email-to-Excel Automation Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-bold">Email-to-Excel Automation</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-200 font-medium">Send a PDF to an inbox. Get back a formatted Excel file.</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                End-to-end automation that watches an email inbox for attachments — when a PDF arrives,
                it&apos;s automatically extracted, sent to an AI model to read and structure the data,
                converted into a formatted Excel file, and emailed back. No manual steps. No copy-pasting.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end sm:max-w-[220px]">
              {["n8n", "LLM Integration", "PDF Extraction", "Excel", "Email Automation", "Data Processing"].map((t) => (
                <span key={t} className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-2"><WavePath /></div>

      {/* ── CURRENT POSITION ── */}
      <section className="px-6 py-28 md:px-10 md:py-36 grid md:grid-cols-2 gap-16 md:gap-32 items-start max-w-screen-xl mx-auto w-full border-b border-zinc-100 dark:border-zinc-900">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400">Current Position</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
            Software<br />Engineer<br />@ BT Group.
          </h2>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-2 shrink-0">
              <Image
                src="/bt-logo.png"
                alt="BT Group"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <p className="font-bold">BT Group</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Global Cloud Solutions · London, UK</p>
            </div>
          </div>

          <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>
              Working within the Global Cloud Solutions division, delivering
              Contact Centre as a Service (CCaaS) solutions to large enterprise
              clients worldwide — building API integrations that connect complex client
              systems at scale.
            </p>
          </div>

          {/* Worked with */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Worked with</p>
            <div className="flex flex-wrap gap-3 items-center">
              {clients.map((c) =>
                c.logo ? (
                  <div
                    key={c.name}
                    className="h-12 px-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
                  >
                    <Image src={c.logo} alt={c.name} width={56} height={28} className="object-contain h-7 w-auto" />
                  </div>
                ) : (
                  <span
                    key={c.name}
                    className="h-12 px-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center text-sm font-bold tracking-tight"
                  >
                    {c.name}
                  </span>
                )
              )}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-1">
              Including Fortune 500 enterprises across Europe &amp; globally.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-2"><WavePath /></div>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="px-6 py-28 md:px-10 md:py-36 grid md:grid-cols-2 gap-16 md:gap-32 items-start max-w-screen-xl mx-auto w-full border-b border-zinc-100 dark:border-zinc-900"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400">About</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
            I eliminate<br />manual work<br />with AI.
          </h2>
        </div>

        <div className="space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/profile-pic.jpeg"
                alt="Ibrahim Bouazza"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-black dark:text-white">Ibrahim Bouazza</p>
              <p className="text-zinc-500 dark:text-zinc-400">AI Automation Specialist · BT Group</p>
            </div>
          </div>
          <p>
            I specialise in AI-powered automation — building workflows that replace
            repetitive manual processes with systems that just run. From PDF extraction
            pipelines to multi-step LLM integrations, I design automations that save
            businesses real hours every week.
          </p>
          <p>
            If your team is still manually moving data between spreadsheets, copy-pasting
            from emails, or waiting on reports that should generate themselves — that&apos;s
            a solvable problem.
          </p>
          <div className="flex flex-wrap gap-3 text-sm pt-2">
            <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Available for new projects
            </span>
            <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              London, UK
            </span>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-2"><WavePath /></div>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        className="px-6 py-28 md:px-10 md:py-36 max-w-screen-xl mx-auto w-full border-b border-zinc-100 dark:border-zinc-900 space-y-16"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
            Tools I work<br />with daily.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              label: "Automation",
              items: ["n8n", "Make.com", "Zapier", "OpenAI API", "LLM Pipelines"],
            },
            {
              label: "Frontend",
              items: ["Next.js", "TypeScript", "Tailwind", "React"],
            },
            {
              label: "Backend",
              items: ["Node.js", "Express", "PHP", "Laravel", "REST APIs"],
            },
            {
              label: "Database & Cloud",
              items: ["PostgreSQL", "Supabase", "AWS S3", "AWS RDS", "Docker"],
            },
          ].map((category) => (
            <div key={category.label} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {category.label}
              </p>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-100 transition-all duration-150 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white cursor-default select-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="px-6 py-28 md:px-10 md:py-36 max-w-screen-xl mx-auto w-full"
      >
        <h2
          className="font-black tracking-tighter leading-none mb-16 text-black dark:text-white"
          style={{ fontSize: "clamp(2.5rem, 8vw, 10rem)" }}
        >
          Got a process<br />that should<br />run itself?<br />
          <span className="text-zinc-400">Let&apos;s talk.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:bouazza287173@gmail.com"
            className="rounded-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-sm font-semibold transition-all hover:opacity-70 hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            Email me ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahim-bouazza-572073255/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 dark:border-zinc-600 px-8 py-4 text-sm font-semibold text-zinc-800 dark:text-zinc-100 transition-all hover:border-black dark:hover:border-white hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-100 dark:border-zinc-900 px-6 py-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
        <span>© {new Date().getFullYear()} Ibrahim Bouazza</span>
        <span>AI Automation Specialist — London, UK</span>
      </footer>
    </>
  );
}
