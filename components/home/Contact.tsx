'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Slack } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const Contact: React.FC = () => {
    const [state, handleSubmit] = useForm("myznpjwa");

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            value: "shihabuddin.dev@gmail.com",
            link: "mailto:shihabuddin.dev@gmail.com"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone / WhatsApp",
            value: "+880 1740 520249",
            link: "https://wa.me/8801740520249"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Location",
            value: "Bogura, Bangladesh",
        }
    ];

    const socialLinks = [
        { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/shihab-dev" },
        { icon: <Github className="h-5 w-5" />, url: "https://github.com/shihab-dev" },
        { icon: <Twitter className="h-5 w-5" />, url: "https://x.com/shihab_dev" },
        { icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/shihab.dev" },
        { icon: <Slack className="h-5 w-5" />, url: "https://stackoverflow.com/users/29589367/shihab-dev" },
    ];

    return (
        <section id="contact" className="scroll-mt-24">
            <SectionHeader
                title="Contact Me"
                subtitle="Let's work together"
            />
            <p className="text-base text-neutral-400 -mt-8 mb-8 max-w-2xl">
                Share a bit about your project, and I’ll get back to you with ideas and next steps.
            </p>

            <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-8 items-start">
                {/* Contact Form - Left */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md p-5 sm:p-6 space-y-5 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
                >
                    {/* Success / Error Messages */}
                    {state.succeeded && (
                        <div className="p-4 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/40 text-fuchsia-300 text-sm">
                            Message sent successfully! I’ll get back to you soon.
                        </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-neutral-300 mb-1.5">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                disabled={state.submitting}
                                className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent transition"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1.5">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                disabled={state.submitting}
                                className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent transition"
                                placeholder="you@example.com"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-xs font-medium text-neutral-300 mb-1.5">Project type</label>
                        <select
                            id="type"
                            name="type"
                            disabled={state.submitting}
                            className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3.5 py-2.5 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent transition cursor-pointer"
                        >
                            <option>MERN web app</option>
                            <option>Landing page / Portfolio</option>
                            <option>Dashboard / Internal tool</option>
                            <option>E-commerce</option>
                            <option>Bug fixing / Improvements</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1.5">Budget (optional)</label>
                        <input
                            type="number"
                            name="budget"
                            disabled={state.submitting}
                            placeholder="e.g. $500 – $3000"
                            className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-1.5">Project details</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            disabled={state.submitting}
                            className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 focus:border-transparent transition resize-none"
                            placeholder="Tell me about your project, timeline, tech preferences, and goals."
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="shiny-cta inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span>{state.submitting ? 'Sending...' : 'Send message'}</span>
                            <Send className="h-4 w-4" />
                        </button>
                        <p className="text-xs text-neutral-500">
                            I typically reply within 24–48 hours.
                        </p>
                    </div>
                </form>

                {/* Contact Info & Social - Right */}
                <aside className="rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-md p-5 sm:p-6 space-y-7">
                    {/* What you can expect */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-tight text-neutral-100 mb-2">What you can expect</h3>
                        <ul className="text-xs text-neutral-400 space-y-1.5">
                            <li>• Fast response and clear communication</li>
                            <li>• Honest feedback on project fit and timeline</li>
                            <li>• Clean, modern, performant code with best practices</li>
                            <li>• Post-launch support and iterations</li>
                        </ul>
                    </div>

                    {/* Contact Cards */}
                    <div className="space-y-2">
                        {contactInfo.map((info, i) => (
                            info.link ? (
                                <a key={i} href={info.link} className="group flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:border-fuchsia-500/60 hover:bg-fuchsia-500/10 transition-all">
                                    <div className="p-2 rounded-md bg-fuchsia-500/10 text-fuchsia-400 group-hover:bg-fuchsia-500/20 transition">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-neutral-400">{info.title}</p>
                                        <p className="text-sm text-neutral-100 group-hover:text-fuchsia-300 transition">{info.value}</p>
                                    </div>
                                </a>
                            ) : (
                                <div key={i} className="group flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5">
                                    <div className="p-2 rounded-md bg-fuchsia-500/10 text-fuchsia-400">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-neutral-400">{info.title}</p>
                                        <p className="text-sm text-neutral-100">{info.value}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                    {/* Social Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-tight text-neutral-100 mb-3">Find me online</h3>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-fuchsia-400 hover:border-fuchsia-500/70 hover:bg-fuchsia-500/10 transition-all group"
                                >
                                    <div className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Contact;