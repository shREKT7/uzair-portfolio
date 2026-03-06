"use client";

import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";
import { portfolioData } from "@/lib/portfolio";

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 py-12 px-6 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/10 blur-[80px] pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand */}
                <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-violet-600/20 border border-violet-500/30">
                        <Code2 size={14} className="text-violet-400" />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-white font-mono">uzair.dev</p>
                        <p className="text-xs text-white/30 font-mono">{portfolioData.location}</p>
                    </div>
                </div>

                {/* Nav links */}
                <div className="flex items-center gap-4 text-xs font-mono text-white/40">
                    {["#about", "#tech-stack", "#projects", "#certifications", "#contact"].map((href) => (
                        <a
                            key={href}
                            href={href}
                            className="hover:text-white transition-colors"
                        >
                            {href.replace("#", "")}
                        </a>
                    ))}
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3">
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
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/20 text-white/40 hover:text-white transition-all"
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-xs text-white/20 font-mono flex items-center justify-center gap-1.5">
                    Built with <Heart size={10} className="text-violet-500" fill="currentColor" /> by{" "}
                    <span className="text-white/40">Uzair Teli</span> · 2026
                </p>
            </div>
        </footer>
    );
}
