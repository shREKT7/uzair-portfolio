"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/lib/portfolio";

export function Footer() {
    return (
        <footer
            className="px-6 pt-12 pb-8"
            style={{ background: "#09090f" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Main row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8">
                    {/* Identity */}
                    <div className="text-center sm:text-left">
                        <p className="font-semibold text-white/80 tracking-tight">{portfolioData.name}</p>
                        <p className="text-sm font-mono text-white/30 mt-0.5">AI / Systems Engineer</p>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-2.5">
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
                                className="p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04]
                                text-white/45 hover:text-white hover:border-white/20 hover:bg-white/[0.08]
                                transition-all duration-200"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Separator */}
                <div className="border-t border-white/[0.05]" />

                {/* Copyright */}
                <div className="pt-5 text-center">
                    <p className="text-[11px] font-mono text-white/20 tracking-wide">
                        © 2025 Uzair Teli
                    </p>
                </div>
            </div>
        </footer>
    );
}
