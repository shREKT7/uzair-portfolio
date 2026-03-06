"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { portfolioData } from "@/lib/portfolio";
import { Github } from "lucide-react";

// Using the widely-used github-readme-stats service (no API key needed)
const GITHUB_USERNAME = portfolioData.github.split("github.com/")[1] ?? "YOUR_USERNAME";

export function GitHubActivity() {
    return (
        <SectionWrapper id="github" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading label="Open Source" title="GitHub Activity" />

                <div className="flex flex-col items-center gap-6">
                    {/* Stats cards in a responsive grid */}
                    <div className="grid sm:grid-cols-2 gap-5 w-full max-w-3xl">
                        {/* GitHub Stats */}
                        <div className="p-1 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/20 transition-all overflow-hidden group">
                            <img
                                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&bg_color=0d0d18&border_color=ffffff10&title_color=a78bfa&text_color=ffffff80&icon_color=a78bfa&hide_border=true&count_private=true`}
                                alt="GitHub Stats"
                                className="w-full rounded-xl"
                                loading="lazy"
                            />
                        </div>

                        {/* Top Languages */}
                        <div className="p-1 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/20 transition-all overflow-hidden group">
                            <img
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&bg_color=0d0d18&border_color=ffffff10&title_color=a78bfa&text_color=ffffff80&hide_border=true&langs_count=8`}
                                alt="Top Languages"
                                className="w-full rounded-xl"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Streak stats */}
                    <div className="w-full max-w-3xl p-1 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/20 transition-all overflow-hidden">
                        <img
                            src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=transparent&background=0d0d18&border=ffffff10&ring=a78bfa&fire=a78bfa&currStreakLabel=a78bfa&hide_border=true&stroke=0000`}
                            alt="GitHub Streak"
                            className="w-full rounded-xl"
                            loading="lazy"
                        />
                    </div>

                    {/* CTA to GitHub profile */}
                    <a
                        href={portfolioData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 mt-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 text-white/70 hover:text-white text-sm font-mono transition-all duration-300 hover:scale-105"
                    >
                        <Github size={16} />
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}
