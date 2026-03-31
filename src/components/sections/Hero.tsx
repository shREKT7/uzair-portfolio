"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { portfolioData } from "@/lib/portfolio";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
            style={{ background: "#09090f" }}
        >
            {/* ── Ambient atmosphere ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Purple blob — top-left */}
                <motion.div
                    className="absolute -top-48 -left-48 w-[680px] h-[680px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Blue glow — bottom-right */}
                <motion.div
                    className="absolute -bottom-48 -right-48 w-[560px] h-[560px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
                    animate={{ scale: [1.08, 1, 1.08], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Faint grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "44px 44px",
                    }}
                />
            </div>

            {/* ── Content ── */}
            <div className="relative max-w-4xl mx-auto text-center w-full py-20 lg:py-28 flex flex-col items-center gap-8">

                {/* Status badge */}
                <motion.div {...fadeUp(0)}>
                    <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono tracking-wide text-white/50 border border-white/[0.08] bg-white/[0.03]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for internships & collaborations
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none"
                    {...fadeUp(0.08)}
                >
                    <span className="text-white">{portfolioData.name.split(" ")[0]} </span>
                    <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                        {portfolioData.name.split(" ").slice(1).join(" ")}
                    </span>
                </motion.h1>

                {/* Role */}
                <motion.p
                    className="font-mono text-xl md:text-2xl text-white/40 tracking-wider"
                    {...fadeUp(0.16)}
                >
                    AI / Systems Engineer
                </motion.p>

                {/* Tagline */}
                <motion.p
                    className="text-base md:text-lg leading-relaxed text-white/35 max-w-2xl"
                    style={{ fontFeatureSettings: "'kern' 1" }}
                    {...fadeUp(0.24)}
                >
                    {portfolioData.tagline}
                </motion.p>

                {/* CTA row */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-3 mt-2"
                    {...fadeUp(0.32)}
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white
                        bg-gradient-to-r from-violet-600 to-indigo-600
                        shadow-[0_0_30px_rgba(124,58,237,0.3)]
                        hover:shadow-[0_0_40px_rgba(124,58,237,0.55)]
                        hover:from-violet-500 hover:to-indigo-500
                        transition-all duration-300 hover:scale-[1.04]"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white/75
                        border border-white/[0.1] bg-white/[0.03]
                        hover:bg-white/[0.07] hover:border-white/[0.18] hover:text-white
                        transition-all duration-300 hover:scale-[1.04]"
                    >
                        Contact Me
                    </a>
                    <a
                        href="/resume/uzair-teli-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white/60
                        border border-white/[0.08] bg-white/[0.02]
                        hover:bg-white/[0.06] hover:border-violet-500/30 hover:text-white/90
                        transition-all duration-300 hover:scale-[1.03]"
                    >
                        <Download size={14} />
                        Resume
                    </a>
                </motion.div>

                {/* Social icons */}
                <motion.div
                    className="flex items-center gap-3"
                    {...fadeUp(0.40)}
                >
                    {[
                        { icon: Github, href: portfolioData.github, label: "GitHub" },
                        { icon: Linkedin, href: portfolioData.linkedin, label: "LinkedIn" },
                        { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="p-3 rounded-xl border border-white/[0.09] bg-white/[0.04]
                            text-white/45 hover:text-white hover:border-white/20 hover:bg-white/[0.08]
                            transition-all duration-200 hover:scale-110"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 flex flex-col items-center gap-2 text-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={14} />
                </motion.div>
            </motion.div>
        </section>
    );
}
