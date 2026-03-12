import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-2 sm:py-16 lg:py-2 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-slate-600/60 to-transparent" />
      <div className="relative">
        <div className="mb-8 max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
