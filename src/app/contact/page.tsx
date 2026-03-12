"use client";

import { useRef, useState, FormEvent } from "react";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/content";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_x5u4tb7";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_4ak6bub";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "_uHSCYUSzFc7bAxfn";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);

    try {
      await toast.promise(
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Abhishek",
            from_email: form.email,
            to_email: "abhichhetri09@gmail.com",
            message: form.message,
          },
          EMAILJS_PUBLIC_KEY,
        ),
        {
          pending: "Sending message...",
          success: "Message sent successfully!",
          error: "An error occurred, please try again later!",
        },
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      // error toast handled by toast.promise
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s talk about your next project."
        subtitle="Have an idea, opportunity, or just want to say hi? Reach out and we’ll take it from there."
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] md:items-start">
          <div className="space-y-4 text-sm text-slate-200/85 sm:text-base">
            <p>
              The fastest way to reach me is via email, but you can also connect
              with me on GitHub or LinkedIn. I&apos;m always open to discussing
              collaborations, freelance work, or interesting problems.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">Direct links</p>
              <ul className="space-y-1 text-slate-200">
                {siteConfig.email && (
                  <li>
                    Email:{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                )}
                {siteConfig.github && (
                  <li>
                    GitHub:{" "}
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
                    >
                      {siteConfig.github.replace("https://github.com/", "@")}
                    </a>
                  </li>
                )}
                {siteConfig.linkedin && (
                  <li>
                    LinkedIn:{" "}
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
                    >
                      LinkedIn profile
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
          >
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-600/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/40 transition focus:border-cyan-400/80 focus:ring-2"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-600/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/40 transition focus:border-cyan-400/80 focus:ring-2"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me a bit about what you’re looking to build."
                className="w-full resize-none rounded-lg border border-slate-600/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/40 transition focus:border-cyan-400/80 focus:ring-2"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-[0_12px_45px_rgba(6,182,212,0.7)] transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </Section>
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
}
