import { siteConfig } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-white/5 pt-6 text-xs text-slate-500 sm:mt-14 sm:text-[13px]">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          <span>
            Designed & built by{" "}
            <span className="font-medium text-slate-300">{siteConfig.name}</span>
          </span>
        </p>
        <p className="flex gap-4">
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cyan-300"
            >
              GitHub
            </a>
          )}
          {siteConfig.linkedin && (
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cyan-300"
            >
              LinkedIn
            </a>
          )}
          <span className="hidden text-slate-600 sm:inline">
            © {year}
          </span>
        </p>
      </div>
      <p className="mt-3 text-[11px] text-slate-600 sm:hidden">
        © {year} • All rights reserved.
      </p>
    </footer>
  );
}

