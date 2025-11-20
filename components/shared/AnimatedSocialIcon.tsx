import React from "react";
import { Linkedin, Github, Twitter, Facebook, Slack } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://linkedin.com/in/shihab-dev",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/shihabuddin-dev", Icon: Github, label: "GitHub" },
  { href: "https://twitter.com/shihab_dev", Icon: Twitter, label: "Twitter" },
  {
    href: "https://www.facebook.com/shihab.dev",
    Icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://stackoverflow.com/users/29589367/shihab-dev",
    Icon: Slack,
    label: "Stack Overflow",
  },
];

// Unified but unique smooth animation for all icons
const baseIconVariants = {
  initial: { y: 0, scale: 1, opacity: 1 },
  hover: {
    scale: 1.18,
    color: "#A855F7",
    boxShadow: "0 8px 24px rgba(168,85,247,0.18)",
  },
};

const AnimatedSocialIcon: React.FC = () => {
  return (
    <nav aria-label="Social links" className="mt-2">
      <ul className="flex items-center justify-start gap-3 text-xl list-none p-0 m-0">
        {socialLinks.map((link, i) => {
          const Icon = link.Icon;
          return (
            <li key={link.label} className="inline-flex">
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-fuchsia-400 hover:border-fuchsia-500/70 hover:bg-fuchsia-500/10 transition-all group"
                initial={{ y: 0, scale: 1 }}
                animate={{ y: [0, -8, 0], scale: [1, 1.13, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8 + i * 0.2,
                  ease: "easeInOut",
                  repeatType: "loop",
                  delay: 0.1 * i,
                }}
                whileHover={baseIconVariants.hover}
                aria-label={link.label}
                title={link.label}
              >
                <div className="group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
              </motion.a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AnimatedSocialIcon;
