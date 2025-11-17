"use client"
import React, { useEffect, useRef } from 'react';
import SectionHeader from '../shared/SectionHeader';

const testimonialsCol1 = [
    {
        quote: "Shihab’s setup let our team see progress in minutes, not days. It changed how we plan every sprint.",
        name: "Aisha Green",
        role: "Head of Product",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop"
    },
    {
        quote: "Reporting is finally effortless. The UI is clean, clear, and our team actually enjoys using it.",
        name: "Priya Patel",
        role: "Marketing Lead",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop"
    },
    {
        quote: "From trial to rollout took under a week. The full stack implementation felt seamless.",
        name: "Jonas Weber",
        role: "Operations Lead",
        img: "https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=256&auto=format&fit=crop"
    }
];
const testimonialsCol2 = [
    {
        quote: "Integrations were painless. No extra IT tickets, and we saved hours every week.",
        name: "Michael Chen",
        role: "IT Security Lead",
        img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop"
    },
    {
        quote: "Support was thoughtful and fast. Every technical question had a clear answer.",
        name: "Rachel Adams",
        role: "Product Manager",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
    },
    {
        quote: "Shihab made complex requirements feel simple and shipped features ahead of schedule.",
        name: "Lena Ortiz",
        role: "Engineering Manager",
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop"
    }
];
const testimonialsCol3 = [
    {
        quote: "The codebase was easy to extend. Clear structure, sensible naming, and great documentation.",
        name: "Noah Fischer",
        role: "Senior Developer",
        img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=256&auto=format&fit=crop"
    },
    {
        quote: "We handed over rough requirements. Shihab returned a polished experience that felt on-brand from day one.",
        name: "Emma Rossi",
        role: "Founder, SaaS Startup",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop"
    },
    {
        quote: "The performance and UX improvements had an immediate impact on our activation metrics.",
        name: "Carlos Mendes",
        role: "Growth Lead",
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop"
    }
];

const TestimonialCard: React.FC<typeof testimonialsCol1[0]> = ({ quote, name, role, img }) => (
    <article data-card="testimonial" className="rounded-2xl border p-5 border-white/10 bg-neutral-900/80">
        <blockquote className="text-sm sm:text-base text-neutral-100">
            <span className="inline-flex items-center gap-2 mb-1">
                <i data-lucide="quote" className="w-4 h-4 text-neutral-400"></i>
                <span>"{quote}"</span>
            </span>
        </blockquote>
        <div className="mt-4 flex items-center gap-3">
            <img className="h-9 w-9 rounded-full object-cover ring-2 ring-white/10" src={img} alt={name} />
            <div>
                <div className="text-xs font-medium">{name}</div>
                <div className="text-[0.7rem] text-neutral-400">{role}</div>
            </div>
        </div>
    </article>
);

const Testimonials: React.FC = () => {
    const scrollColumn1Ref = useRef<HTMLDivElement>(null);
    const scrollColumn2Ref = useRef<HTMLDivElement>(null);
    const scrollColumn3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const startScrollAnimation = () => {
            const columns = [
                { ref: scrollColumn1Ref, direction: 'up' },
                { ref: scrollColumn2Ref, direction: 'down' },
                { ref: scrollColumn3Ref, direction: 'up' }
            ];

            columns.forEach(({ ref, direction }) => {
                if (!ref.current) return;

                const column = ref.current;
                const content = column.children[0] as HTMLElement;
                const contentHeight = content.scrollHeight / 2; // Since we duplicated the content
                
                // Reset animation
                content.style.animation = 'none';
                content.offsetHeight; // Trigger reflow
                
                if (direction === 'up') {
                    content.style.animation = `scrollUp ${contentHeight / 20}s linear infinite`;
                } else {
                    content.style.animation = `scrollDown ${contentHeight / 20}s linear infinite`;
                }
            });
        };

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes scrollUp {
                0% {
                    transform: translateY(0);
                }
                100% {
                    transform: translateY(-50%);
                }
            }
            @keyframes scrollDown {
                0% {
                    transform: translateY(-50%);
                }
                100% {
                    transform: translateY(0);
                }
            }
            [data-scroll-column] {
                will-change: transform;
            }
            .scroll-column:hover [data-scroll-column] {
                animation-play-state: paused !important;
            }
        `;
        document.head.appendChild(style);

        startScrollAnimation();

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <section id="testimonials" className="scroll-mt-24">
            <SectionHeader 
                title="Feedback"
                subtitle="Testimonials"
                color="rose"
            />
            <p className="text-base text-neutral-400 mt-[-2rem] mb-6">Imagine what your clients or teammates would say after working with you.</p>

            <div className="sm:px-0 lg:px-0 max-w-7xl mr-auto ml-auto">
              
                <div className="grid grid-cols-1 overflow-hidden md:grid-cols-3 py-10 gap-x-6 gap-y-6" style={{ maskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)' }}>
                    {/* Column 1 - Scroll Up */}
                    <div ref={scrollColumn1Ref} className="overflow-hidden scroll-column">
                        <div data-scroll-column="1" className="space-y-6">
                            {[...testimonialsCol1, ...testimonialsCol1].map((t, i) => <TestimonialCard key={i} {...t} />)}
                        </div>
                    </div>
                    {/* Column 2 - Scroll Down */}
                    <div ref={scrollColumn2Ref} className="overflow-hidden scroll-column">
                        <div data-scroll-column="2" className="space-y-6">
                            {[...testimonialsCol2, ...testimonialsCol2].map((t, i) => <TestimonialCard key={i} {...t} />)}
                        </div>
                    </div>
                    {/* Column 3 - Scroll Up */}
                    <div ref={scrollColumn3Ref} className="overflow-hidden scroll-column">
                        <div data-scroll-column="3" className="space-y-6">
                            {[...testimonialsCol3, ...testimonialsCol3].map((t, i) => <TestimonialCard key={i} {...t} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;