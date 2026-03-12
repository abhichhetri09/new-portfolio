import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description:
    "Dark, futuristic developer portfolio – showcasing projects, skills, and experience.",
  metadataBase:
    typeof window === "undefined"
      ? new URL("https://your-portfolio-domain.com")
      : undefined,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Dark, futuristic developer portfolio – showcasing projects, skills, and experience.",
    type: "website",
    url: "https://your-portfolio-domain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Dark, futuristic developer portfolio – showcasing projects, skills, and experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          {/* Background gradients / glow */}
          <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950">
            <div className="absolute -top-40 left-1/2 h-72 w-[480px] -translate-x-1/2 rounded-full bg-purple-600/40 blur-3xl" />
            <div className="absolute bottom-[-160px] left-[-120px] h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />
            <div className="absolute bottom-[-200px] right-[-120px] h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15)_0,_transparent_60%)]" />
          </div>

          <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-8 pt-4 sm:px-6 lg:px-8">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
