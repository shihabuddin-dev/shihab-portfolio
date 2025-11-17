import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  color?: 'indigo' | 'sky' | 'emerald' | 'pink' | 'violet' | 'fuchsia' | 'rose';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, color = 'indigo' }) => {
    const textColorClasses = {
        indigo: 'text-indigo-300',
        sky: 'text-sky-300',
        emerald: 'text-emerald-300',
        pink: 'text-pink-300',
        violet: 'text-violet-300',
        fuchsia: 'text-fuchsia-300',
        rose: 'text-rose-300',
    };

    const bgColorClasses = {
        indigo: 'bg-indigo-400/80',
        sky: 'bg-sky-400/80',
        emerald: 'bg-emerald-400/80',
        pink: 'bg-pink-400/80',
        violet: 'bg-violet-400/80',
        fuchsia: 'bg-fuchsia-400/80',
        rose: 'bg-rose-400/80',
    }

    return (
        <div className="mb-8">
             <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] ${textColorClasses[color]}`}>
                <span className={`h-px w-6 ${bgColorClasses[color]}`}></span>
                {title}
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl space-grotesk">
                {subtitle}
            </h2>
        </div>
    );
};

export default SectionHeader;
