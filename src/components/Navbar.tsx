"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/content";
import { profile } from "@/assets";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="mb-6 flex items-center justify-between border-b border-white/5 pb-3 pt-2 sm:mb-10 sm:pb-4">
      <Link href="/" className="group flex items-center gap-2">
        <div className="relative h-9 w-9 overflow-hidden rounded-2xl border border-cyan-400/50 bg-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.45)]">
          <Image
            src={profile}
            alt={siteConfig.name}
            fill
            sizes="36px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </span>
          <span className="text-[11px] text-slate-400">{siteConfig.role}</span>
        </div>
      </Link>

      <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors hover:text-cyan-300 ${
                isActive ? "text-cyan-300" : ""
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0" />
              )}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        aria-label="Toggle navigation"
        className="relative flex h-9 w-9 items-center justify-center rounded-md border border-slate-700/70 bg-slate-900/60 text-slate-200 shadow-sm shadow-black/40 backdrop-blur sm:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Open navigation</span>
        <div className="space-y-1.5">
          <span className="block h-0.5 w-4 rounded-full bg-slate-200" />
          <span className="block h-0.5 w-4 rounded-full bg-slate-400" />
          <span className="block h-0.5 w-4 rounded-full bg-slate-200" />
        </div>
      </button>

      {open && (
        <div className="absolute inset-x-4 top-16 z-20 rounded-xl border border-slate-700/70 bg-slate-900/95 p-4 text-sm shadow-xl shadow-black/50 backdrop-blur sm:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-1.5 transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-300"
                      : "text-slate-200 hover:bg-slate-800/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
