"use client";
import { useState, useEffect } from "react";
import { FloatingDockClient } from "./FloatingDockClient";
import {
  BriefcaseBusiness,
  FolderCode,
  FolderOpenDot,
  Home,
  Send,
  SquareUser,
} from "lucide-react";

export default function FloatingDockWithScroll() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#",
    },
    {
      title: "About Me",
      icon: (
        <SquareUser className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <FolderOpenDot className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <FolderCode className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#skills",
    },
    {
      title: "Experience",
      icon: (
        <BriefcaseBusiness className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#experience",
    },
    {
      title: "Contact Me",
      icon: (
        <Send className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#contact",
    },
  ];

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 flex items-center justify-center w-full px-4 z-50 transition-transform ease-in-out duration-600 ${
        isVisible ? "translate-y-0" : "translate-y-32"
      }`}
    >
      <FloatingDockClient items={links} />
    </div>
  );
}
