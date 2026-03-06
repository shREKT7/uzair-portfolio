"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { portfolioData } from "@/lib/portfolio";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[#0a0a0f]" />
                {/* Purple glow top-left */}
                <motion.div
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Cyan glow bottom-right */}
                <motion.div
                    className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[120px]"
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto text-center">
                {/* Status badge */}
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 font-mono mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for internships & collaborations
                </motion.div>

                {/* Name */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <span className="text-white">{portfolioData.name.split(" ")[0]} </span>
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {portfolioData.name.split(" ").slice(1).join(" ")}
                    </span>
                </motion.h1>

                {/* Title */}
                <motion.div
                    className="text-xl md:text-2xl text-white/50 font-mono mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    AI / Systems Engineer
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {portfolioData.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">View Projects</span>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
                    >
                        Contact Me
                    </a>
                    <a
                        href="/resume/uzair-teli-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 text-white/80 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
                    >
                        <Download size={15} />
                        Resume
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
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
                            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
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
                transition={{ delay: 1.2 }}
            >
                <span className="text-xs font-mono">scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
}
