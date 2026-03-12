import Link from "next/link";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Section
        id="hero"
        eyebrow="Abhishek Khati Chhetri"
        title="Full Stack Developer crafting reliable web & mobile products."
        subtitle="Based in Helsinki, I help teams ship modern React, React Native, and Node.js experiences that feel fast, polished, and production‑ready."
      >
        <div className="glass-panel relative flex flex-col gap-10 px-6 py-9 sm:px-10 sm:py-12 lg:flex-row lg:items-center">
          {/* Left: main intro */}
          <div className="relative z-10 flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.45)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Open to full‑time & freelance roles
            </p>

            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Building{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                future‑ready
              </span>{" "}
              products with modern JavaScript.
            </h1>

            <p className="max-w-xl text-sm text-slate-200/80 sm:text-base">
              At Hoviber and Vesko I&apos;ve worked across the stack—from React
              frontends and React Native apps to Node.js APIs and PostgreSQL.
              I enjoy taking ownership from idea to shipped feature.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_18px_55px_rgba(6,182,212,0.9)] transition hover:bg-cyan-400"
              >
                View selected projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200"
              >
                Let&apos;s work together
              </Link>
            </div>

            <div className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-600/70 bg-slate-950/40 px-3 py-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Experience
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  3+ years shipping to production
                </p>
              </div>
              <div className="rounded-xl border border-slate-600/70 bg-slate-950/40 px-3 py-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Focus
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  React, React Native, Node.js
                </p>
              </div>
              <div className="rounded-xl border border-slate-600/70 bg-slate-950/40 px-3 py-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Location
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  Helsinki · working remotely
                </p>
              </div>
            </div>
          </div>

          {/* Right: tech / stack card */}
          <div className="relative mt-6 flex-1 lg:mt-0 lg:pl-8">
            <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/35 blur-3xl" />

            <div className="relative mx-auto flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-slate-600/80 bg-slate-900/70 p-5 text-xs text-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.98)] backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  Current toolbox
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Full stack
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="space-y-1">
                  <p className="text-slate-400">Frontend</p>
                  <ul className="space-y-0.5 text-slate-200">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS / MUI</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400">Backend & tools</p>
                  <ul className="space-y-0.5 text-slate-200">
                    <li>Node.js / REST</li>
                    <li>PostgreSQL / Prisma</li>
                    <li>Docker · Jira</li>
                  </ul>
                </div>
              </div>

              <div className="mt-1 h-px bg-gradient-to-r from-transparent via-slate-600/70 to-transparent" />
              <p className="text-[11px] text-slate-400">
                Comfortable owning features end‑to‑end—from UI to database and
                deployment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="highlights"
        eyebrow="Highlights"
        title="A quick glimpse into my work."
        subtitle="Selected projects, technologies, and problem spaces I enjoy working in."
        className="pt-4"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm shadow-[0_14px_45px_rgba(15,23,42,0.9)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Interfaces
            </p>
            <p className="mt-2 text-slate-100">
              Modern, responsive UIs with attention to motion and micro‑details.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm shadow-[0_14px_45px_rgba(15,23,42,0.9)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
              Systems
            </p>
            <p className="mt-2 text-slate-100">
              Robust backends, APIs, and data flows that scale with your
              product.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm shadow-[0_14px_45px_rgba(15,23,42,0.9)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Collaboration
            </p>
            <p className="mt-2 text-slate-100">
              Working closely with designers, devs, and stakeholders to ship
              great experiences.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
