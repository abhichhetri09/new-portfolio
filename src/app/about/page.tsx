import Image from "next/image";
import { Section } from "@/components/Section";
import { profile } from "@/assets";
export default function AboutPage() {
  return (
    <>
      <Section
        id="about"
        eyebrow="About"
        title="Full Stack Developer | Hoviber."
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-start">
          <div className="space-y-5 text-sm text-slate-200/85 sm:text-base">
            <p className="text-sm text-slate-300 sm:text-base">
              Full Stack Software Engineer with hands-on experience building
              scalable web and mobile applications.
            </p>
            <div className="space-y-4">
              <p>
                I&apos;m a full stack software engineer with hands‑on experience
                building scalable web and mobile applications. I enjoy
                developing modern user interfaces, designing REST APIs, and
                integrating backend services with cross‑platform mobile
                applications.
              </p>
              <p>
                Currently at Hoviber, I contribute to both frontend and backend
                development while delivering production‑ready features for
                mobile platforms. I work daily with React, React Native (Expo),
                TypeScript, Node.js, PostgreSQL, and modern tooling in Agile
                teams.
              </p>
              <p>
                Previously, I was a Frontend Developer at Vesko, where I built
                and maintained the business website and later joined the mobile
                team, and a Production Specialist at Swappie, operating in a
                fast‑paced environment with a strong focus on quality and
                efficiency.
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
            <div className="flex justify-center md:justify-start">
              <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
                <Image
                  src={profile}
                  alt="Abhishek Khati Chhetri"
                  width={180}
                  height={220}
                  className="h-48 w-40 rounded-[1rem] object-cover sm:h-56 sm:w-44"
                  priority
                />
              </div>
            </div>
            <h3 className="text-sm font-semibold text-slate-100">
              Quick snapshot
            </h3>
            <dl className="space-y-2 text-[13px] text-slate-300">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Location</dt>
                <dd className="text-right">Helsinki, Finland</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Focus</dt>
                <dd className="text-right">
                  Full stack web & mobile (React, React Native, Node.js)
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Currently</dt>
                <dd className="text-right">
                  Full Stack Developer at Hoviber, open to new opportunities
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Skills"
        title="Technologies I work with."
        subtitle="A selection of tools and technologies I use regularly."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <SkillGroup
            title="Frontend"
            skills={[
              "HTML",
              "CSS / Sass",
              "JavaScript / TypeScript",
              "React / Next.js",
              "Tailwind CSS / Material UI",
              "Vite",
            ]}
          />
          <SkillGroup
            title="Backend"
            skills={[
              "Node.js / Express",
              "REST APIs",
              "Java",
              "Laravel / PHP",
              "Prisma",
              "PostgreSQL / MongoDB",
            ]}
          />
          <SkillGroup
            title="Workflow"
            skills={[
              "Git & GitHub",
              "Docker",
              "Jira",
              "Expo (React Native)",
              "Agile / Scrum",
            ]}
          />
        </div>
      </Section>

      <Section
        eyebrow="Timeline"
        title="Experience & milestones."
        subtitle="Roles and experiences that shaped how I build software."
      >
        <div className="space-y-6 border-l border-slate-700/70 pl-5">
          <TimelineItem
            period="07/2025 – Present"
            title="Full Stack Developer · Hoviber"
            description="Design and maintain scalable cross‑platform mobile applications using React Native (Expo) and TypeScript, build REST APIs with Node.js, work with PostgreSQL via Prisma/Drizzle, and implement secure authentication flows while collaborating closely with designers and developers."
          />
          <TimelineItem
            period="07/2024 – 07/2025"
            title="Frontend Developer · Vesko"
            description="Developed and maintained Vesko’s business website using React, Vite, TypeScript, and Tailwind CSS, later joining the mobile team to build a cross‑platform app with Expo and React Native while participating in agile processes and design collaboration."
          />
          <TimelineItem
            period="09/2021 – 05/2023"
            title="Production Specialist · Swappie"
            description="Repaired iPhones to high‑quality standards in a fast‑paced production environment, maintaining speed and accuracy while collaborating with the team to meet targets and improve efficiency."
          />
        </div>
      </Section>
    </>
  );
}

type SkillGroupProps = {
  title: string;
  skills: string[];
};

function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm shadow-[0_16px_45px_rgba(15,23,42,0.9)]">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

type TimelineItemProps = {
  period: string;
  title: string;
  description: string;
};

function TimelineItem({ period, title, description }: TimelineItemProps) {
  return (
    <article className="relative pl-5">
      <div className="absolute -left-[9px] top-1 h-3 w-3 rounded-full border border-cyan-300/70 bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {period}
      </p>
      <h3 className="mt-1 text-sm font-semibold text-slate-100">{title}</h3>
      <p className="mt-1 text-[13px] text-slate-300">{description}</p>
    </article>
  );
}
