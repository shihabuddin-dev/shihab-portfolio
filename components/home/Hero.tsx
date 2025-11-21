"use client";
import { Code, Sparkles } from "lucide-react";
import React from "react";
import Image from "next/image";
import { shihab_dev_Image_hero } from "@/utils/IMAGES";
import { ShinyLink, GradientLoaderLink } from "@/components/ui/Button";

const Hero: React.FC = () => {
  return (
    <header
      className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 items-center"
      aria-label="Hero"
    >
      {/* Hero Content */}
      <div className="space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
          <div className="h-6 w-6 rounded-full bg-fuchsia-500/20 border border-fuchsia-300/50 flex items-center justify-center">
            <Code name="Code2" className="h-3.5 w-3.5 text-fuchsia-300" />
          </div>
          <p className="text-xs sm:text-sm text-neutral-300">
            MERN Stack Developer • Passionate Full Stack Builder
          </p>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight space-grotesk text-white/90">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-sky-400 to-violet-400">
              Shihab Uddin
            </span>
            ,
            <span className="block mt-1 text-white/90">
              a MERN &amp; full stack developer
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl">
            I design and build user‑friendly, high‑performance web apps with{" "}
            <span className="text-fuchsia-300 font-medium">
              MongoDB, Express, React, and Node.js
            </span>
            - from pixel‑perfect UI to scalable APIs.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Shiny CTA */}
          <ShinyLink href="#contact">
            <span>
              <span>Let&apos;s build your next app</span>
              <Code name="ArrowRight" className="h-4 w-4 text-sky-200" />
            </span>
          </ShinyLink>

          {/* Secondary CTA: View Projects */}
          <GradientLoaderLink href="#projects" text="View Projects" />
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-medium text-neutral-400">
            Core stack:
          </span>
          <span className="rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-200 text-xs px-3 py-1">
            JavaScript
          </span>
          <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-200 text-xs px-3 py-1">
            React
          </span>
          <span className="rounded-full border border-sky-400/40 bg-sky-400/10 text-sky-200 text-xs px-3 py-1">
            Next
          </span>
          <span className="rounded-full border border-indigo-400/40 bg-indigo-400/10 text-indigo-200 text-xs px-3 py-1">
            Node.js
          </span>
        </div>
      </div>

      {/* Hero Card / Preview */}
      <aside className="relative" aria-label="Portfolio preview">
        <div className="absolute -inset-1 bg-gradient-to-tr from-fuchsia-500/20 via-sky-400/10 to-violet-500/10 blur-xl opacity-50"></div>
        <div className="relative rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-neutral-950/70">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-xs text-neutral-400">Portfolio Preview</span>
          </div>
          <div className="p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={shihab_dev_Image_hero}
                alt="Shihab Uddin portrait"
                height={64}
                width={64}
                priority
                className="h-17 w-15 rounded-xl object-cover border border-white/10 shadow-sm"
              />
              <div>
                <p className="text-sm text-neutral-400">Full Stack Developer</p>
                <p
                  className="text-lg font-semibold tracking-tight text-white/80"
                  style={{ fontFamily: "'Space Grotesk', system-ui" }}
                >
                  Shihab Uddin
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Available for freelance
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-950 to-slate-900 p-3 shadow-sm">
                <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.1),transparent_60%)]"></div>
                <div className="relative flex items-center justify-between">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Core Stack
                  </p>
                  <Code name="Code2" className="h-3.5 w-3.5 text-slate-200" />
                </div>
                <ul className="relative mt-3 space-y-1 text-[11px] text-slate-200">
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    React
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    Next.js
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div className="relative rounded-2xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-950 to-slate-900 p-3 shadow-sm">
                <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_60%)]"></div>
                <div className="relative flex items-center justify-between">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Also Working With
                  </p>
                  <Sparkles
                    name="Sparkles"
                    className="h-3.5 w-3.5 text-slate-200"
                  />
                </div>
                <ul className="relative mt-3 space-y-1 text-[11px] text-slate-200">
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    JavaScript / TypeScript
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    REST APIs
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Firebase / MongoDB
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-3 font-mono text-[11px] text-slate-200 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                  <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <Code name="FileCode2" className="h-3 w-3" />
                  <span>shihab.ts</span>
                </div>
              </div>
              <pre className="overflow-x-auto leading-relaxed">
                <code>
                  {`// Portfolio entry
export const shihab = {
  name: 'Shihab',
  role: 'Full Stack Developer',
  stack: ['React', 'Next.js', 'MongoDB'],
  basedIn: 'Bangladesh'
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Hero;
