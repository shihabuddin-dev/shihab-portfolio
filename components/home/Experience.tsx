import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import { experienceData } from '@/Data/experienceData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            title="Experience"
            subtitle="Background"
          />
        </div>
        <p className="text-base text-neutral-400 -mt-8 mb-6">
          Learning, building, and practicing by working on real‑world inspired projects and challenges.
        </p>

        {/* Timeline */}
        <div className="mt-8 space-y-6">
          {experienceData.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative">
                <div className={`mt-1 h-2 w-2 rounded-full bg-${item.color}-400 shadow-[0_0_12px_rgba(79,70,229,0.9)]`}></div>
                <div className={`mt-2 h-full w-px bg-gradient-to-b from-${item.color}-400/70 via-slate-700/70 to-transparent`}></div>
              </div>
              <div className="relative flex-1 rounded-2xl border border-white/10 bg-slate-950/85 p-4 shadow-[0_0_22px_rgba(15,23,42,0.95)]">
                <div className={`pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_60%)]`}></div>
                <div className="relative flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-slate-50">{item.role}</p>
                    <p className="text-xs text-slate-400">{item.company}</p>
                  </div>
                  <p className="text-xs text-slate-400">{item.period}</p>
                </div>
                <p className="relative mt-2 text-[13px] leading-relaxed text-slate-200">
                  {item.description}
                </p>
                <ul className="relative mt-2 space-y-1 text-[12px] text-slate-200">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
