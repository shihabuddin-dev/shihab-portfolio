"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search, AlertCircle } from "lucide-react";
import { ShinyLink } from "@/components/ui/Button";

export default function NotFound() {
  const floatingElements = [
    { icon: "🚀", delay: 0, x: -200, y: -150 },
    { icon: "💻", delay: 0.5, x: 180, y: -120 },
    { icon: "⚡", delay: 1, x: -150, y: 180 },
    { icon: "🎯", delay: 1.5, x: 200, y: 160 },
    { icon: "🌟", delay: 2, x: -180, y: 100 },
    { icon: "🔥", delay: 2.5, x: 160, y: -180 },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-neutral-950 via-neutral-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-5 pointer-events-none"
          initial={{
            x: element.x,
            y: element.y,
            rotate: 0,
          }}
          animate={{
            x: element.x * -1,
            y: element.y * -1,
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            delay: element.delay,
            ease: "linear",
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Main Content */}
      <section className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-6"
        >
          <h1 className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-fuchsia-400 via-sky-400 to-violet-400 bg-clip-text text-fuchsia-400">
            404
          </h1>
        </motion.div>

        {/* Error Icon */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full border-2 border-red-500/30">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.article
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-3">
            Oops! This Page Doesn&apos;t Exist
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Looks like you've ventured into uncharted code territory. No
            worries—let&apos;s get you back to exploring my MERN stack projects,
            skills, and work.
          </p>
        </motion.article>

        {/* Fun Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 text-2xl">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              😕
            </motion.div>
            <span className="text-neutral-600">|</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            >
              🚀
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.nav
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
          aria-label="Error page navigation"
        >
          <ShinyLink href="/">
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </span>
          </ShinyLink>
        </motion.nav>

        {/* Search Suggestion */}
        <motion.aside
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6"
          aria-labelledby="portfolio-heading"
        >
          <h3 id="portfolio-heading" className="text-base font-semibold text-neutral-100 mb-3 flex items-center justify-center gap-2">
            <Search className="w-5 h-5 text-fuchsia-400" />
            Explore My Portfolio
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            Check out these sections to discover my work and expertise:
          </p>
          <nav className="flex flex-wrap gap-2 justify-center" aria-label="Portfolio sections">
            {[
              { name: "About", path: "/#about" },
              { name: "Projects", path: "/#projects" },
              { name: "Skills", path: "/#skills" },
              { name: "Experience", path: "/#experience" },
              { name: "Contact", path: "/#contact" },
            ].map((section) => (
              <Link key={section.name} href={section.path}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border border-fuchsia-500/30 rounded-lg text-sm font-medium text-fuchsia-300 transition-all cursor-pointer inline-block"
                >
                  {section.name}
                </motion.span>
              </Link>
            ))}
          </nav>
        </motion.aside>

        {/* Fun Fact */}
        <motion.footer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="p-4 bg-linear-to-r from-fuchsia-500/10 to-violet-500/10 rounded-lg border border-fuchsia-500/20"
        >
          <p className="text-xs text-neutral-400 italic">
            💡 Pro tip: Every broken link is a chance to discover something new.
            Let&apos;s redirect you to something amazing!
          </p>
        </motion.footer>
      </section>

      {/* Decorative Corner Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-fuchsia-500/30 rounded-tl-2xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-violet-500/30 rounded-tr-2xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-sky-400/30 rounded-bl-2xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-fuchsia-500/30 rounded-br-2xl pointer-events-none" aria-hidden="true"></div>
    </main>
  );
}
