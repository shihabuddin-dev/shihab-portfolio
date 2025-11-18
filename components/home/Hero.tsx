"use client";
import { Code, Sparkles } from "lucide-react";
import React from "react";
import "./hero.css";
import Image from "next/image";
import { shihab_dev_Image_hero } from "@/utils/IMAGES";

const Hero: React.FC = () => {
  return (
    <>
      <section className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 items-center">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight space-grotesk">
              I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-sky-400 to-violet-400">
                Shihab Uddin
              </span>
              ,
              <span className="block mt-1">
                a MERN &amp; full stack developer
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl">
              I design and build user‑friendly, high‑performance web apps with{" "}
              <span className="text-fuchsia-300 font-medium">
                MongoDB, Express, React, and Node.js
              </span>
              — from pixel‑perfect UI to scalable APIs.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Shiny CTA */}
            <a href="#contact" className="shiny-cta focus:outline-none">
              <span>
                <span>Let’s build your next app</span>
                <Code name="ArrowRight" className="h-4 w-4 text-sky-200" />
              </span>
            </a>

            {/* Secondary CTA: View Projects */}
            <a
              href="#projects"
              className="inline-flex transition overflow-hidden group text-sm font-medium text-white rounded-full relative gap-x-2 items-center border border-fuchsia-400/10 h-12 pl-4 pr-5"
              style={{
                background:
                  "linear-gradient(135deg, rgb(24, 24, 27) 100%, rgb(9, 9, 11) 100%)",
                boxShadow:
                  "rgba(0, 0, 0, 0.45) 0 10px 35px, rgba(255, 255, 255, 0.08) 0 1px 0 inset, rgba(0, 0, 0, 0.6) 0 -1px 0 inset",
                transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: "translateY(0)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 35px rgba(15, 23, 42, 0.8), 0 0 15px rgba(249, 69, 99, 0.35)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 35px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.6)";
              }}
            >
              <div
                className="loader"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  zIndex: 1,
                  backgroundColor: "transparent",
                  mask: "repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)",
                  WebkitMask:
                    "repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)",
                  opacity: 0.55,
                }}
              >
                <div
                  style={{
                    content: "",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, #38bdf8 0%, transparent 50%), radial-gradient(circle at 45% 45%, #6366f1 0%, transparent 45%), radial-gradient(circle at 55% 55%, #a855f7 0%, transparent 45%), radial-gradient(circle at 45% 55%, #22d3ee 0%, transparent 45%), radial-gradient(circle at 55% 45%, #0ea5e9 0%, transparent 45%)",
                    mask: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)",
                    WebkitMask:
                      "radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)",
                    animation:
                      "transform-animation 2s infinite alternate, opacity-animation 4s infinite",
                    animationTimingFunction: "cubic-bezier(0.6, 0.8, 0.5, 1)",
                    filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.7))",
                  }}
                ></div>
              </div>
              <span
                style={{
                  position: "relative",
                  zIndex: 2,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  userSelect: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                {"View Projects".split("").map((letter, i) => (
                  <span
                    key={i}
                    className="loader-letter"
                    style={{
                      display: "inline-block",
                      opacity: 0,
                      animation: "loader-letter-anim 4s infinite linear",
                      animationDelay: `${0.1 + i * 0.11}s`,
                    }}
                  >
                    {letter === " " ? (
                      <span
                        style={{ display: "inline-block", width: "0.3rem" }}
                      ></span>
                    ) : (
                      letter
                    )}
                  </span>
                ))}
              </span>
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-medium text-neutral-400">
              Core stack:
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-200 text-xs px-3 py-1">
              MongoDB
            </span>
            <span className="rounded-full border border-sky-400/40 bg-sky-400/10 text-sky-200 text-xs px-3 py-1">
              Express.js
            </span>
            <span className="rounded-full border border-indigo-400/40 bg-indigo-400/10 text-indigo-200 text-xs px-3 py-1">
              React.js
            </span>
            <span className="rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-200 text-xs px-3 py-1">
              Node.js
            </span>
          </div>
        </div>

        {/* Hero Card / Preview */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-fuchsia-500/30 via-sky-400/20 to-violet-500/20 blur-2xl opacity-70"></div>
          <div className="relative rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.9)] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-neutral-950/70">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs text-neutral-400">
                Portfolio Preview
              </span>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src={shihab_dev_Image_hero}
                  alt="Shihab Uddin portrait"
                  height={64}
                  width={64}
                  className="h-17 w-15 rounded-xl object-cover border border-white/10 shadow-md shadow-fuchsia-500/30"
                />
                <div>
                  <p className="text-sm text-neutral-400">
                    Full Stack Developer
                  </p>
                  <p
                    className="text-lg font-semibold tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', system-ui" }}
                  >
                    Shihab Uddin
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Available for freelance
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-3 shadow-[0_0_18px_rgba(79,70,229,0.55)]">
                  <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_60%)]"></div>
                  <div className="relative flex items-center justify-between">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                      Core Stack
                    </p>
                    <Code name="Code2" className="h-3.5 w-3.5 text-slate-200" />
                  </div>
                  <ul className="relative mt-3 space-y-1 text-[11px] text-slate-200">
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                      React
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                      Next.js
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-3 shadow-[0_0_18px_rgba(56,189,248,0.55)]">
                  <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]"></div>
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
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)]"></span>
                      JavaScript / TypeScript
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)]"></span>
                      REST APIs
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)]"></span>
                      Firebase / MongoDB
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-3 font-mono text-[11px] text-slate-200 shadow-[0_0_20px_rgba(15,23,42,0.9)]">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]"></span>
                    <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]"></span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"></span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <Code name="FileCode2" className="h-3 w-3" />
                    <span>shihab.ts</span>
                  </div>
                </div>
                <pre className="overflow-x-auto leading-relaxed">
                  <code>
                    <span className="text-slate-500">// Portfolio entry</span>
                    {`
`}
                    <span className="text-indigo-200">export</span>{" "}
                    <span className="text-indigo-200">const</span> shihab ={" "}
                    {"{"}
                    {`
`}{" "}
                    name: <span className="text-emerald-300">'Shihab'</span>,
                    {`
`}{" "}
                    role:{" "}
                    <span className="text-emerald-300">
                      'Full Stack Developer'
                    </span>
                    ,
                    {`
`}{" "}
                    stack: [<span className="text-emerald-300">'React'</span>,{" "}
                    <span className="text-emerald-300">'Next.js'</span>,{" "}
                    <span className="text-emerald-300">'MongoDB'</span>],
                    {`
`}{" "}
                    basedIn:{" "}
                    <span className="text-emerald-300">'Bangladesh'</span>,
                    {`
`}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
