import Image from "next/image";
import Clock from "./components/Clock";
import CursorDot from "./components/CursorDot";
import ScatterHero from "./components/ScatterHero";
import LedgrShowcase from "./components/LedgrShowcase";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { WavePath } from "@/components/ui/wave-path";

export default function Home() {
  const tickerItems = [
    "Full-Stack Development",
    "SaaS Products",
    "Web Applications",
    "API Design",
    "UI Engineering",
    "Cloud Infrastructure",
  ];

  return (
    <>
      <CursorDot />
      <DottedSurface />

      {/* ── NAV ── */}
      <header className="flex items-start justify-between px-6 pt-6 md:px-10">
        {/* Logo */}
        <a href="/" className="text-sm font-semibold leading-none">
          © Ibrahim<br />Bouazza
        </a>

        {/* Centre links */}
        <nav className="hidden md:flex flex-col items-center gap-0 text-sm font-medium">
          <a href="#about"    className="hover:opacity-50 transition-opacity">About</a>
          <a href="#projects" className="hover:opacity-50 transition-opacity">Projects</a>
          <a href="#websites" className="hover:opacity-50 transition-opacity">Websites</a>
          <a href="#skills"   className="hover:opacity-50 transition-opacity">Skills</a>
        </nav>

        {/* Contact */}
        <a
          href="mailto:hanif287173@gmail.com"
          className="text-sm font-semibold hover:opacity-50 transition-opacity"
        >
          Contact ↗
        </a>
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative flex flex-col justify-between min-h-[85vh] px-6 pb-8 pt-10 md:px-10 overflow-hidden"
      >
        <ScatterHero />

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          {/* Left: short bio + clock */}
          <div className="space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
            <p>Full-stack developer — London, UK</p>
            <p><Clock /> GMT</p>
          </div>

          {/* Right: Scroll */}
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

      {/* Wave divider */}
      <div className="flex justify-center py-2"><WavePath /></div>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="px-6 py-28 md:px-10 md:py-36 grid md:grid-cols-2 gap-16 md:gap-32 items-start max-w-screen-xl mx-auto w-full border-b border-zinc-100 dark:border-zinc-900"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400">About</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
            Building things<br />people actually<br />use.
          </h2>
        </div>

        <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {/* Profile pic inline */}
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
              <p className="text-zinc-500">Software Engineer · BT Group</p>
            </div>
          </div>
          <p>
            I&apos;m a full-stack developer focused on building clean,
            production-ready web applications. I work across the entire stack —
            database design, API architecture, and polished UIs that people enjoy using.
          </p>
          <p>
            Most of my work is in SaaS: auth, payments, dashboards, real data.
            I care about shipping things that actually work, not just things
            that look good in a demo.
          </p>
          <div className="flex flex-wrap gap-3 text-sm pt-2">
            <span className="flex items-center gap-2 text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Available for opportunities
            </span>
            <span className="flex items-center gap-2 text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              London, UK
            </span>
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

        <div className="space-y-8">
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
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Global Cloud Solutions · London, UK</p>
            </div>
          </div>

          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              Working within the Global Cloud Solutions division, delivering
              Contact Centre as a Service (CCaaS) solutions to large enterprise
              clients worldwide.
            </p>
            <p>
              Building and maintaining API integrations that connect client systems
              into BT&apos;s cloud contact centre platform — enabling seamless
              customer engagement at scale.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Enterprise Clients</p>
            <div className="flex flex-wrap gap-2">
              {["SONY", "Adecco", "Bridgestone", "& more"].map((c) => (
                <span
                  key={c}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2 text-sm font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-2"><WavePath /></div>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="px-6 py-28 md:px-10 md:py-36 max-w-screen-xl mx-auto w-full space-y-12 border-b border-zinc-100 dark:border-zinc-900"
      >
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Projects</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
              Things I&apos;ve<br />shipped.
            </h2>
          </div>
          <span className="text-xs text-zinc-400">02</span>
        </div>

        {/* Ledgr — scroll-driven showcase */}
        <LedgrShowcase />

        {/* Taxi Booking */}
        <div className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 bg-white dark:bg-black">
          <div className="bg-black dark:bg-zinc-900 flex items-center justify-center min-h-52 p-10">
            <div className="text-center space-y-2">
              <svg className="h-10 w-10 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <p className="text-white/30 text-xs uppercase tracking-widest">Past contribution</p>
              <p className="text-white text-xl font-bold">Taxi Booking Platform</p>
            </div>
          </div>
          <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h3 className="text-xl font-bold">Taxi Booking Platform</h3>
                <span className="rounded-full border border-zinc-200 dark:border-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-500">
                  Contributor
                </span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Contributed to a ride-booking system with real-time dispatch, driver tracking, and customer booking flows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {["Laravel", "PHP", "REST APIs", "SQL", "Git"].map((t) => (
                <span key={t} className="rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-2"><WavePath /></div>

      {/* ── WEBSITES ── */}
      <section
        id="websites"
        className="px-6 py-28 md:px-10 md:py-36 max-w-screen-xl mx-auto w-full space-y-12 border-b border-zinc-100 dark:border-zinc-900"
      >
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Websites</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
              Sites I&apos;ve built<br />&amp; worked on.
            </h2>
          </div>
          <span className="text-xs text-zinc-400">02</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="https://www.aslanza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 block"
          >
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
              <span className="text-4xl font-black tracking-tighter text-white">Aslanza</span>
            </div>
            <div className="p-5 bg-white dark:bg-black">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold">Aslanza</h3>
                <span className="text-zinc-400 text-sm group-hover:text-black dark:group-hover:text-white transition-colors">↗</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Dubai-based accounting &amp; compliance firm — corporate tax, VAT, bookkeeping and advisory for UAE businesses.
              </p>
              <p className="mt-3 text-xs text-zinc-300 dark:text-zinc-700">aslanza.com</p>
            </div>
          </a>

          <a
            href="https://rymaldubai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 block"
          >
            <div className="h-48 bg-gradient-to-br from-amber-900 to-stone-950 flex items-center justify-center">
              <span className="text-4xl font-black tracking-tighter text-amber-100">Rymal</span>
            </div>
            <div className="p-5 bg-white dark:bg-black">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold">Rymal Dubai</h3>
                <span className="text-zinc-400 text-sm group-hover:text-black dark:group-hover:text-white transition-colors">↗</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Luxury fragrance brand crafting high-end perfumes that blend desert heritage with modern sophistication.
              </p>
              <p className="mt-3 text-xs text-zinc-300 dark:text-zinc-700">rymaldubai.com</p>
            </div>
          </a>
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
              label: "Frontend",
              items: ["Next.js", "TypeScript", "Tailwind", "React"],
            },
            {
              label: "Backend",
              items: ["Node.js", "Express", "PHP", "Laravel", "REST APIs"],
            },
            {
              label: "Database",
              items: ["PostgreSQL", "SQL", "Supabase"],
            },
            {
              label: "Cloud & DevOps",
              items: ["AWS S3", "AWS Aurora", "AWS RDS", "IAM", "Docker", "Git"],
            },
            {
              label: "Payments & Auth",
              items: ["Stripe", "Clerk"],
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
                    className="border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-150 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white cursor-default select-none"
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
          className="font-black tracking-tighter leading-none mb-16"
          style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
        >
          Let&apos;s work<br />together.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:hanif287173@gmail.com"
            className="rounded-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-sm font-semibold transition-all hover:opacity-70 hover:scale-[1.02] active:scale-[0.98]"
          >
            hanif287173@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahim-bouazza-572073255/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-8 py-4 text-sm font-semibold transition-all hover:border-black dark:hover:border-white hover:scale-[1.02] active:scale-[0.98]"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-100 dark:border-zinc-900 px-6 py-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
        <span>© {new Date().getFullYear()} Ibrahim Bouazza</span>
        <span>Full-stack developer — London, UK</span>
      </footer>
    </>
  );
}
