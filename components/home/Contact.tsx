'use client';

import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="scroll-mt-24">
            <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight space-grotesk">
                        Lets work together
                    </h2>
                    <p className="text-base text-neutral-400 mt-1">
                        Share a bit about your project, and I ll get back to you with ideas and next steps.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-8 items-start">
                {/* Contact Form */}
                <form className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md p-5 sm:p-6 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]" action="https://formspree.io/f/your-form-id" method="POST">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-neutral-300 mb-1">Name</label>
                            <input id="name" name="name" type="text" required className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent" placeholder="Your name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1">Email</label>
                            <input id="email" name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent" placeholder="you@example.com" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-xs font-medium text-neutral-300 mb-1">Project type</label>
                        <select id="type" name="type" className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent">
                            <option className="bg-neutral-900">MERN web app</option>
                            <option className="bg-neutral-900">Landing page / Portfolio</option>
                            <option className="bg-neutral-900">Dashboard / Internal tool</option>
                            <option className="bg-neutral-900">E‑commerce</option>
                            <option className="bg-neutral-900">Bug fixing / Improvements</option>
                            <option className="bg-neutral-900">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-slate-200">Budget (optional)</label>
                        <input type="text" placeholder="e.g. $200 – $1000" className="mt-1 w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 shadow-[0_0_12px_rgba(15,23,42,0.9)] focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300/70" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-1">Project details</label>
                        <textarea id="message" name="message" rows={4} required className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent" placeholder="Share a bit about your project, timeline, and goals."></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full border border-fuchsia-500/70 bg-fuchsia-500/90 hover:bg-fuchsia-400 hover:border-fuchsia-300 transition-all text-sm px-5 py-2.5 shadow-lg shadow-fuchsia-500/40">
                            <span>Send message</span>
                            <Send className="h-4 w-4 text-fuchsia-50" />
                        </button>
                        <p className="text-xs text-neutral-500 max-w-xs">
                            I typically reply within 24–48 hours. For quicker contact, you can also reach me on LinkedIn or email.
                        </p>
                    </div>
                </form>

                {/* Contact Aside */}
                <aside className="rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-md p-5 sm:p-6 space-y-5">
                    <div>
                        <h3 className="text-sm font-semibold tracking-tight mb-1">What you can expect</h3>
                        <ul className="text-xs text-neutral-300 space-y-1.5">
                            <li>• A quick follow-up to clarify your goals and timelines.</li>
                            <li>• Honest feedback on whether I m the right fit.</li>
                            <li>• Clear next steps with an approximate scope and phases.</li>
                        </ul>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <h3 className="text-sm font-semibold tracking-tight mb-1">Direct links</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <a href="mailto:shihabdev75@gmail.com" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 hover:border-fuchsia-400/70 hover:bg-fuchsia-500/10 transition-colors">
                                <span>Email</span>
                            </a>
                            <a href="https://github.com/shihab-dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 hover:border-sky-400/70 hover:bg-sky-500/10 transition-colors">
                                <span>GitHub</span>
                            </a>
                            <a href="#" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 hover:border-emerald-400/70 hover:bg-emerald-500/10 transition-colors">
                                <span>LinkedIn (coming soon)</span>
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <h3 className="text-sm font-semibold tracking-tight mb-1">Tech I love using</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="rounded-full border border-white/10 bg-white/5 text-[0.7rem] px-2.5 py-1 text-neutral-200">TypeScript</span>
                            <span className="rounded-full border border-white/10 bg-white/5 text-[0.7rem] px-2.5 py-1 text-neutral-200">Next.js</span>
                            <span className="rounded-full border border-white/10 bg-white/5 text-[0.7rem] px-2.5 py-1 text-neutral-200">Tailwind CSS</span>
                            <span className="rounded-full border border-white/10 bg-white/5 text-[0.7rem] px-2.5 py-1 text-neutral-200">Prisma</span>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Contact;
