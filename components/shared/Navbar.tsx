// components/Navbar.tsx
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react'; // Removed Rocket as it was only in the hero button

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isButton }) => {
  return (
    <Link href={href} className={isButton ? 
      "group relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-tight text-slate-100 shadow-[0_0_20px_rgba(124,58,237,0.25)] transition hover:border-[#ff7ce5]/70 hover:bg-[#7b5cff]/20 hover:text-white" : 
      "relative group transition hover:text-white"
    }>
      <span className="relative z-10">{children}</span>
      {!isButton && (
        <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-[#7b5cff] to-transparent opacity-0 transition group-hover:opacity-100"></span>
      )}
      {isButton && (
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,124,229,0.4),_transparent_60%)] opacity-0 transition group-hover:opacity-100"></span>
      )}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // Tailwind's 'sm' breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="border-b border-white/10 bg-[#020015]/80 backdrop-blur-xl fixed w-full z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-[#05001f] ring-1 ring-white/15">
            <div className="absolute inset-0 -z-10 rounded-md bg-[conic-gradient(from_210deg,_#7b5cff,_#ff7ce5,_#22d3ee,_#7b5cff)] opacity-40 blur-[6px]"></div>
            <span className="text-xs font-semibold tracking-[0.25em] text-slate-50">SD</span>
          </div>
          <span className="text-sm font-medium tracking-tight text-slate-50">Shihab</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact" isButton>Contact</NavLink>
        </nav>

        {/* Mobile menu icon */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 text-slate-300 shadow-[0_0_12px_rgba(124,58,237,0.35)] transition hover:border-[#7b5cff] hover:bg-[#12072a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7ce5] sm:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute inset-x-0 top-full bg-[#020015]/90 backdrop-blur-md pb-4 border-t border-white/10">
          <nav className="flex flex-col items-center gap-4 text-sm font-medium text-slate-300 py-4">
            <Link href="#about" className="block py-2 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="#projects" className="block py-2 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
            <Link href="#skills" className="block py-2 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link>
            <Link href="#experience" className="block py-2 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link>
            <Link href="#contact" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#7b5cff] via-[#22d3ee] to-[#ff7ce5] px-5 py-2 text-xs font-semibold tracking-tight text-white shadow-[0_0_30px_rgba(129,140,248,0.7)] transition hover:shadow-[0_0_40px_rgba(244,114,182,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7ce5]/80 mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;