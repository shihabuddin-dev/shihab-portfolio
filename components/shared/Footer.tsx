
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/80 backdrop-blur mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-neutral-500">
          © {currentYear} Shihab Uddin. All rights reserved.
        </p>
        <div className="flex items-center gap-3 text-xs text-neutral-400">
            <a href="#top" className="inline-flex items-center gap-1 hover:text-neutral-100 transition-colors">
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
