import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import { Layers, Server, Database } from 'lucide-react';
import { skillsData } from '@/Data/skillsData';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="scroll-mt-24">
            <SectionHeader 
                title="Capabilities" 
                subtitle="Skills & Stack"
            />
             <p className="text-base text-neutral-400 -mt-8 mb-6">
                The tools I use to build robust, modern web applications.
            </p>

            <ul className="grid md:grid-cols-3 gap-6" role="list" aria-label="Skills list">
                {skillsData.map((skill) => (
                    <li key={skill.title}>
                      <article className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-5 sm:p-6 space-y-4 shadow-[0_18px_60px_rgba(0,0,0,0.9)]" aria-labelledby={`skill-${skill.title.replace(/\s+/g,'-').toLowerCase()}`}>
                        <header>
                          <h3 id={`skill-${skill.title.replace(/\s+/g,'-').toLowerCase()}`} className="text-base font-medium tracking-tight flex items-center gap-2">
                            {(() => {
                                const map: Record<string, any> = {
                                    'layers': Layers,
                                    'server': Server,
                                    'database': Database,
                                };
                                const Icon = map[skill.icon];
                                return Icon ? <Icon className={`h-4 w-4 text-${skill.color}-300`} /> : null;
                            })()}
                            <span>{skill.title}</span>
                          </h3>
                        </header>
                        <p className="text-base text-neutral-300">
                            {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skill.tags.map(tag => (
                                <span key={tag} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">{tag}</span>
                            ))}
                        </div>
                      </article>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
