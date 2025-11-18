import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <div
        className={
          "flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-fuchsia-300"
        }
      >
        <span className={"h-px w-6 bg-fuchsia-400/80"}></span>
        {title}
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl space-grotesk">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeader;
