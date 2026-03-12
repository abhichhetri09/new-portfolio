import Link from "next/link";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Section
        id="hero"
        eyebrow="Portfolio 2026"
        title="Building reliable web & mobile experiences with modern JavaScript."
        subtitle="Hi, I&apos;m Abhishek Khati Chhetri — a full‑stack software engineer based in Helsinki, focused on building reliable web and mobile products."
      >
        <div className="glass-panel relative flex flex-col gap-8 px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center">
          <div className="relative z-10 flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.45)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Available for new opportunities
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Building interfaces that feel{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                futuristic
              </span>{" "}
              yet familiar.
            </h1>
            <p className="max-w-xl text-sm text-slate-200/80 sm:text-base">
              I turn product ideas into shipped features using React, React
              Native, TypeScript, Node.js, PostgreSQL, and modern tooling. With
              over three years of hands‑on experience, I&apos;ve contributed to
              production systems for companies like Hoviber and Vesko.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_12px_45px_rgba(6,182,212,0.7)] transition hover:bg-cyan-400"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200"
              >
                Let&apos;s collaborate
              </Link>
            </div>
          </div>
          <div className="relative mt-8 flex-1 lg:mt-0 lg:pl-6">
            <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-fuchsia-500/40 blur-3xl" />
            <div className="relative mx-auto flex w-full max-w-xs flex-col gap-3 rounded-2xl border border-slate-600/80 bg-slate-900/60 p-4 text-xs text-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.95)] backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  Tech stack
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Full‑stack
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <ul className="space-y-1 text-slate-300">
                  <li>• TypeScript / JavaScript</li>
                  <li>• React / Next.js</li>
                  <li>• Tailwind CSS</li>
                </ul>
                <ul className="space-y-1 text-slate-300">
                  <li>• Node.js / APIs</li>
                  <li>• Databases</li>
                  <li>• CI/CD & tooling</li>
                </ul>
              </div>
              <div className="mt-1 h-px bg-gradient-to-r from-transparent via-slate-600/70 to-transparent" />
              <p className="text-[11px] text-slate-400">
                Focused on clean architecture, performance, and DX.
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
