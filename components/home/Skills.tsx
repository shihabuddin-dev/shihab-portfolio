import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import { Layers, Server, Database } from 'lucide-react';

const skillsData = [
    {
        title: 'Frontend',
        icon: 'layers',
        color: 'fuchsia',
        description: 'Building smooth, interactive interfaces that feel modern and responsive.',
        tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'HTML / CSS']
    },
    {
        title: 'Backend & API',
        icon: 'server',
        color: 'sky',
        description: 'Structuring secure, maintainable APIs and server logic.',
        tags: ['Node.js', 'Express.js', 'REST API', 'Auth (JWT)', 'JavaScript / TypeScript']
    },
    {
        title: 'Database & Tools',
        icon: 'database',
        color: 'emerald',
        description: 'Managing data and developer tooling for efficient development.',
        tags: ['MongoDB', 'Firebase', 'Git & GitHub', 'Postman', 'Problem Solving']
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="scroll-mt-24">
            <SectionHeader 
                title="Capabilities" 
                subtitle="Skills & Stack"
                color="emerald"
            />
             <p className="text-base text-neutral-400 -mt-8 mb-6">
                The tools I use to build robust, modern web applications.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {skillsData.map((skill) => (
                    <div key={skill.title} className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-5 sm:p-6 space-y-4 shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
                        <h3 className="text-base font-medium tracking-tight flex items-center gap-2">
                            {(() => {
                                const map: Record<string, any> = {
                                    'layers': Layers,
                                    'server': Server,
                                    'database': Database,
                                };
                                const Icon = map[skill.icon];
                                return Icon ? <Icon className={`h-4 w-4 text-${skill.color}-300`} /> : null;
                            })()}
                            {skill.title}
                        </h3>
                        <p className="text-base text-neutral-300">
                            {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skill.tags.map(tag => (
                                <span key={tag} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
