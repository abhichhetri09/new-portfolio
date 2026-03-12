"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { projects } from "@/lib/projects";

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "ui", label: "UI" },
  { id: "backend", label: "Backend" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const visibleProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter,
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work and experiments."
      subtitle="A curated list of projects that highlight my interests and strengths."
    >
      <div className="mb-5 flex flex-wrap gap-2 text-xs text-slate-300">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full border px-3 py-1 transition ${
              activeFilter === filter.id
                ? "border-cyan-400/80 bg-cyan-500/10 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.65)]"
                : "cursor-pointer border-slate-600/70 bg-slate-900/80 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.slug}
            className="group relative flex flex-col rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-[0_22px_60px_rgba(8,47,73,0.95)]"
          >
            {project.highlight && (
              <span className="mb-2 inline-flex max-w-max items-center gap-1 rounded-full border border-amber-400/60 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                Highlight
              </span>
            )}
            <h3 className="text-base font-semibold text-slate-50">
              {project.title}
            </h3>
            <p className="mt-2 text-[13px] text-slate-300">
              {project.description}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-slate-400">
              {project.role}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-600/70 bg-slate-950/60 px-2.5 py-1 text-[11px] text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            {(project.github || project.link) && (
              <div className="mt-4 flex gap-4 text-[12px]">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
                  >
                    Live demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 underline-offset-2 hover:text-slate-100 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
