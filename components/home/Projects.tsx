'use client';

import React, { useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import {
  LayoutDashboard,
  ShoppingBag,
  MessagesSquare,
  ChevronDown,
  ExternalLink,
  Github
} from 'lucide-react';

const iconMap: any = {
  'layout-dashboard': LayoutDashboard,
  'shopping-bag': ShoppingBag,
  'messages-square': MessagesSquare,
};

const projects = [
  {
    title: 'TaskFlow Dashboard',
    category: 'MERN Stack',
    icon: 'layout-dashboard',
    description:
      'A modern task management dashboard with authentication, real-time status updates, and responsive UI.',
    features: [
      'React with reusable components & custom hooks.',
      'Node/Express REST API with JWT auth & role-based access.',
      'MongoDB models for projects, tasks, and activity logs.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    color: 'fuchsia',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'DevCommerce Store',
    category: 'Full Stack',
    icon: 'shopping-bag',
    description:
      'A glowing, responsive e-commerce experience with product listing, cart, checkout, and admin product management.',
    features: [
      'React front-end with global state management for cart.',
      'Secure REST API for products, orders, and users.',
      'Authentication, protected routes, and admin panel UI.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    color: 'sky',
    image:
      'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Real-time Chat & Collaboration App',
    category: 'Real-time',
    icon: 'messages-square',
    description:
      'A minimal, glowing chat interface with real-time messaging, online status indicators, and clean room management.',
    features: [
      'WebSocket / real-time messaging architecture.',
      'Node / Express backend with modular controllers.',
      'MongoDB for users, rooms, and message history.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    color: 'emerald',
    image:
      'https://images.unsplash.com/photo-1584983999920-59365a1b3c43?q=80&w=800&auto=format&fit=crop',
  },
];

const Projects: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const colorClasses = {
    fuchsia: {
      border: 'border-fuchsia-400/70',
      bg: 'bg-fuchsia-500/10',
      text: 'text-fuchsia-300',
    },
    sky: {
      border: 'border-sky-400/70',
      bg: 'bg-sky-500/10',
      text: 'text-sky-300',
    },
    emerald: {
      border: 'border-emerald-400/70',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-300',
    },
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader title="Portfolio" subtitle="Featured Projects" color="sky" />
      <p className="text-base text-neutral-400 mt-[-2rem] mb-8">
        Real-world style projects that show my full stack capabilities.
      </p>

      <div className="space-y-4">
        {projects.map((project, index) => {
          const isOpen = openIndex === index;
          const activeColor =
            colorClasses[project.color as keyof typeof colorClasses];

          const Icon = iconMap[project.icon];

          return (
            <div
              key={index}
              className={`rounded-2xl border bg-neutral-950/60 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition-all duration-300 ${
                isOpen ? activeColor.border : 'border-white/10'
              }`}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                      isOpen ? activeColor.border : 'border-white/10'
                    } ${activeColor.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${activeColor.text}`} />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-50">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400">{project.category}</p>
                  </div>
                </div>

                <ChevronDown
                  className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  isOpen ? 'max-h-[1200px]' : 'max-h-0'
                }`}
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
                          href="#"
                          className={`inline-flex items-center gap-1.5 hover:${activeColor.text} transition-colors`}
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>

                        <a
                          href="https://github.com/shihab-dev"
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-1.5 hover:${activeColor.text} transition-colors`}
                        >
                          <Github className="h-4 w-4" /> Source Code
                        </a>
                      </div>
                    </div>

                    <div className="mt-2 md:mt-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl border border-white/10 object-cover w-full h-auto aspect-video"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
