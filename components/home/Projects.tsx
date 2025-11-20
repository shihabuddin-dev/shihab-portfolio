"use client";

import React, { useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import {
  LayoutDashboard,
  ShoppingBag,
  MessagesSquare,
  ChevronDown,
  ExternalLink,
  Github,
} from "lucide-react";
import { projectsData } from "@/Data/projectsData";
import Image from "next/image";

const iconMap: any = {
  "layout-dashboard": LayoutDashboard,
  "shopping-bag": ShoppingBag,
  "messages-square": MessagesSquare,
};

const Projects: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const colorClasses = {
    fuchsia: {
      border: "border-fuchsia-400/70",
      bg: "bg-fuchsia-500/10",
      text: "text-fuchsia-300",
    },
    sky: {
      border: "border-sky-400/70",
      bg: "bg-sky-500/10",
      text: "text-sky-300",
    },
    emerald: {
      border: "border-emerald-400/70",
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
    },
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader title="Portfolio" subtitle="Featured Projects" />
      <p className="text-base text-neutral-400 mt-[-2rem] mb-8">
        Real-world style projects that show my full stack capabilities.
      </p>

      <ul className="space-y-4" role="list">
        {projectsData.map((project, index) => {
          const isOpen = openIndex === index;
          const activeColor =
            colorClasses[project.color as keyof typeof colorClasses];

          const Icon = iconMap[project.icon];

          return (
            <li key={index}>
              <article
                className={`rounded-2xl border bg-neutral-950/60 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition-all duration-300 ${
                  isOpen ? activeColor.border : "border-white/10"
                }`}
                aria-labelledby={`project-title-${index}`}
                role="article"
              >
                <header>
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`project-panel-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                          isOpen ? activeColor.border : "border-white/10"
                        } ${activeColor.bg}`}
                      >
                        <Icon className={`h-5 w-5 ${activeColor.text}`} />
                      </div>

                      <div>
                        <h3
                          id={`project-title-${index}`}
                          className="text-base sm:text-lg font-semibold tracking-tight text-neutral-50"
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-400">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </header>

                <section
                  id={`project-panel-${index}`}
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isOpen ? "max-h-[1200px]" : "max-h-0"
                  }`}
                  aria-labelledby={`project-title-${index}`}
                  role="region"
                >
                  <div className="border-t border-white/10 p-4 sm:p-5">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                      <div className="space-y-4">
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {project.description}
                        </p>

                        <div>
                          <h4 className="text-xs font-semibold mb-2 text-neutral-100">
                            Key Features:
                          </h4>
                          <ul className="text-sm text-neutral-400 space-y-1.5 list-disc list-inside">
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold mb-2 text-neutral-100">
                            Tech Stack:
                          </h4>
                          <div className="flex flex-wrap items-center gap-2">
                            {project.stack.map((tech, i) => (
                              <span
                                key={i}
                                className="text-[0.7rem] rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 pt-2 text-sm text-neutral-300">
                          <a
                            href={project.live}
                            target="_blank"
                            className={`inline-flex items-center gap-1.5 hover:text-fuchsia-400 hover:skew-1 transition-colors`}
                          >
                            <ExternalLink className="h-4 w-4" /> Live Demo
                          </a>

                          <a
                            href={project.source}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-1.5 hover:text-fuchsia-400 hover:skew-1 transition-colors`}
                          >
                            <Github className="h-4 w-4" /> Source Code
                          </a>
                        </div>
                      </div>

                      <figure className="mt-2 md:mt-0 h-[200px] md:h-[350px] overflow-hidden group relative rounded-xl border border-white/10">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={1600}
                          className="w-full h-auto transition-transform duration-[4000ms] ease-in-out group-hover:-translate-y-[calc(100%-200px)] md:group-hover:-translate-y-[calc(100%-350px)]"
                        />
                        <figcaption className="sr-only">
                          Preview image for {project.title}
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
