"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import { Gem, ServerCog, FileCode2 } from "lucide-react";
import { shihab_dev_Image_about } from "@/utils/IMAGES";

const About: React.FC = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const [cardStyle, setCardStyle] = useState({});
  const [glowStyle, setGlowStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = (
      cardRef.current as HTMLElement
    ).getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = -((y - height / 2) / (height / 2)) * 8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    setCardStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
    });

    setGlowStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(168, 85, 247, 0.25), transparent 40%)`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
    });
    setGlowStyle({ opacity: 0 });
  };

  return (
    <section id="about" className="scroll-mt-24">
      {/* Header */}
      <SectionHeader title="Introduction" subtitle="About Me" />

      {/* Top Grid: Portrait + Intro */}
      <div className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-stretch mb-16">
        {/* Interactive 3D Card */}
        <figure
          className="relative"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: "1000px" }}
          aria-label="Interactive portrait"
        >
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-transparent backdrop-blur p-2 shadow-2xl shadow-black/60 h-full"
            style={cardStyle}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ ...glowStyle, transition: "opacity 0.5s ease" }}
            ></div>
            <div className="relative w-full h-full">
              <Image
                src={shihab_dev_Image_about}
                alt="Shihab Uddin portrait"
                className="background-blur-2xl rounded-2xl border border-fuchsia-500/10"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
          <figcaption className="sr-only">Portrait of Shihab Uddin</figcaption>
        </figure>

        {/* Text on the right */}
        <article className="flex flex-col" aria-label="About text">
          <div className="space-y-5 text-base text-neutral-300 leading-relaxed">
            <p>
              I&apos;m{" "}
              <span className="font-medium text-neutral-50">Shihab Uddin</span>,
              a{" "}
              <span className="text-fuchsia-300 font-medium">
                MERN stack developer
              </span>{" "}
              passionate about building full stack applications that are not
              only functional but also beautiful and intuitive. I thrive on
              turning complex ideas into elegant, real-world products with clean
              code and strong architecture.
            </p>
            <p>
              My process covers the full development lifecycle, from designing
              scalable backend APIs and database schemas to building responsive,
              pixel-perfect user interfaces with reusable components. I&apos;m
              driven by a commitment to{" "}
              <span className="font-medium text-neutral-50">performance</span>,{" "}
              <span className="font-medium text-neutral-50">accessibility</span>
              , and a seamless{" "}
              <span className="font-medium text-neutral-50">
                developer experience
              </span>
              .
            </p>
          </div>

          {/* Stats at the bottom */}
          <dl
            className="mt-auto pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4"
            aria-label="Key statistics"
          >
            <div className="rounded-xl border border-white/10 bg-neutral-950/80 p-4 text-center">
              <dd className="text-2xl font-semibold text-fuchsia-300">2+</dd>
              <dt className="text-xs text-neutral-400">Years of Experience</dt>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/80 p-4 text-center">
              <dd className="text-2xl font-semibold text-sky-300">15+</dd>
              <dt className="text-xs text-neutral-400">Projects Completed</dt>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/80 p-4 text-center col-span-2 sm:col-span-1">
              <dd className="text-2xl font-semibold text-emerald-300">4</dd>
              <dt className="text-xs text-neutral-400">Core Technologies</dt>
            </div>
          </dl>
        </article>
      </div>

      {/* Bottom Grid: Guiding Principles */}
      <section
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        aria-label="Guiding principles"
      >
        <article className="group relative rounded-2xl border border-white/10 bg-neutral-950/80 p-5 transition-all duration-300 hover:border-fuchsia-400/70 hover:bg-neutral-900">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 border border-fuchsia-400/40 text-fuchsia-300">
              <Gem className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-neutral-50">Pixel-Perfect UI</h3>
          </div>
          <p className="text-sm text-neutral-400">
            Crafting beautiful, intuitive, and highly polished user interfaces
            that provide an exceptional user experience.
          </p>
        </article>
        <article className="group relative rounded-2xl border border-white/10 bg-neutral-950/80 p-5 transition-all duration-300 hover:border-sky-400/70 hover:bg-neutral-900">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-400/40 text-sky-300">
              <ServerCog className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-neutral-50">Scalable Backend</h3>
          </div>
          <p className="text-sm text-neutral-400">
            Building robust, efficient, and secure server-side logic and RESTful
            APIs that can grow with your product.
          </p>
        </article>
        <article className="group relative rounded-2xl border border-white/10 bg-neutral-950/80 p-5 transition-all duration-300 hover:border-emerald-400/70 hover:bg-neutral-900">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/40 text-emerald-300">
              <FileCode2 className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-neutral-50">
              Clean & Maintainable Code
            </h3>
          </div>
          <p className="text-sm text-neutral-400">
            Writing professional, well-structured, and documented code that is
            easy to understand, test, and maintain.
          </p>
        </article>
      </section>
    </section>
  );
};

export default About;
