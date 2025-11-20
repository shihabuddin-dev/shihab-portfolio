"use client";
import React from "react";
import { ArrowUp, Star, GitBranch, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const thanks = [{ text: "Thanks" }, { text: "شکریہ" }, { text: "ধন্যবাদ" }];

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-black/80 text-neutral-300 backdrop-blur mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Thanks */}
        <div className="flex items-center gap-4 ">
          {thanks.map((item, i) => (
            <span
              key={i}
              className="font-medium border-b border-fuchsia-500/50"
            >
              {item.text}
            </span>
          ))}
        </div>

        {/* Middle: Copyright & Made With */}
        <div className="flex flex-col items-center gap-1 text-xs text-center">
          <p>© {currentYear} Shihab Uddin. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            Made with{" "}
            <Heart className="h-3.5 w-3.5 text-fuchsia-500 animate-pulse" />
          </p>
        </div>

        {/* Right: GitHub Actions & Back to Top */}
        <div className="flex items-center gap-4 ">
          <a
            href="https://github.com/shihabuddin-dev/shihab-portfolio"
            target="_blank"
            aria-label="Source of Code"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-fuchsia-400 transition-colors"
          >
            <Star className="h-4 w-4" />
            <span>Star</span>
          </a>
          <a
            href="https://github.com/shihabuddin-dev/shihab-portfolio"
            target="_blank"
            aria-label="Source of Code"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-fuchsia-400 transition-colors"
          >
            <GitBranch className="h-4 w-4" />
            <span>Fork</span>
          </a>
          <button
            onClick={handleGoToTop}
            className="inline-flex items-center gap-1 hover:text-fuchsia-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
