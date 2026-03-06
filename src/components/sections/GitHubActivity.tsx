"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, ExternalLink, GitCommit, Flame, Trophy } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { portfolioData } from "@/lib/portfolio";
import type { Activity } from "react-github-calendar";

// ─── Disable SSR for GitHubCalendar ──────────────────────────────────────────
const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
    { ssr: false }
);

const USERNAME = "shREKT7";

const calendarTheme = {
    dark: ["#0d1117", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

// ─── Stat computation ─────────────────────────────────────────────────────────
function computeStats(data: Activity[]) {
    const total = data.reduce((sum, d) => sum + d.count, 0);

    const sorted = [...data].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    let current = 0;
    for (const d of sorted) {
        if (d.count > 0) current++;
        else break;
    }

    let longest = 0;
    let run = 0;
    for (const d of data) {
        if (d.count > 0) {
            run++;
            if (run > longest) longest = run;
        } else {
            run = 0;
        }
    }

    return { total, current, longest };
}

// ─── Card hover variants ──────────────────────────────────────────────────────
const cardVariants = {
    rest: { scale: 1, boxShadow: "0 0 0px rgba(124,58,237,0)" },
    hover: {
        scale: 1.03,
        boxShadow: "0 0 30px rgba(124,58,237,0.18)",
        transition: { type: "spring" as const, stiffness: 300, damping: 22 },
    },
};

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// ─── Stat card ────────────────────────────────────────────────────────────────
interface StatCardProps {
    icon: React.ElementType;
    label: string;
    value: number | string;
    color: string;
}

function StatCard({ icon: Icon, label, value, color }: StatCardProps) {
    return (
        <motion.div
            variants={{ ...cardVariants, ...itemVariants }}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex-1 min-w-[140px] p-5 rounded-xl bg-white/[0.04] border border-white/8 backdrop-blur-md hover:border-violet-500/25 transition-colors duration-300"
        >
            <div className={`inline-flex p-2 rounded-lg mb-3 ${color}`}>
                <Icon size={16} />
            </div>
            <p className="text-2xl font-bold text-white tabular-nums">{value}</p>
            <p className="text-xs text-white/40 font-mono mt-1">{label}</p>
        </motion.div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function GitHubActivity() {
    // Mount guard — prevents hydration mismatch
    const [mounted, setMounted] = useState(false);
    const [stats, setStats] = useState({ total: 0, current: 0, longest: 0 });

    useEffect(() => {
        setMounted(true);
    }, []);

    // transformData is called during calendar render — defer setState via
    // setTimeout(0) to push it outside the current render cycle
    const handleTransform = useCallback((data: Activity[]) => {
        setTimeout(() => {
            setStats(computeStats(data));
        }, 0);
        return data; // passthrough — required by transformData
    }, []);

    return (
        <SectionWrapper id="github" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* ─── Section Header ─── */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-4">
                        Open Source
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        GitHub Activity
                    </h2>
                    <p className="text-white/45 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                        A snapshot of my open-source contributions and development activity.
                    </p>
                </motion.div>

                {/* ─── Heatmap Card ─── */}
                <motion.div
                    className="relative rounded-2xl border border-white/8 bg-[#0d0d18]/80 backdrop-blur-xl shadow-xl overflow-hidden p-5 md:p-7 mb-5"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-violet-600/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2.5">
                            <Github size={18} className="text-violet-400" />
                            <span className="text-sm font-mono text-white/60">{USERNAME}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-green-500/10 border border-green-500/20 text-green-400">
                            ● Active
                        </span>
                    </div>

                    {/* Only render the calendar after mount to prevent hydration mismatch */}
                    <div className="w-full overflow-x-auto min-h-[160px] flex items-center justify-center">
                        {mounted ? (
                            <GitHubCalendar
                                username={USERNAME}
                                theme={calendarTheme}
                                colorScheme="dark"
                                fontSize={12}
                                blockSize={13}
                                blockMargin={4}
                                showTotalCount
                                transformData={handleTransform}
                                style={{ width: "100%" }}
                                labels={{
                                    totalCount: "{{count}} contributions in the last year",
                                }}
                            />
                        ) : (
                            /* Skeleton placeholder while not yet mounted */
                            <div className="w-full h-32 rounded-xl bg-white/[0.03] animate-pulse" />
                        )}
                    </div>
                </motion.div>

                {/* ─── Stat cards ─── */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <StatCard
                        icon={GitCommit}
                        label="Total Contributions"
                        value={stats.total > 0 ? stats.total.toLocaleString() : "—"}
                        color="bg-violet-500/10 text-violet-400"
                    />
                    <StatCard
                        icon={Flame}
                        label="Current Streak"
                        value={stats.current > 0 ? `${stats.current}d` : "—"}
                        color="bg-orange-500/10 text-orange-400"
                    />
                    <StatCard
                        icon={Trophy}
                        label="Longest Streak"
                        value={stats.longest > 0 ? `${stats.longest}d` : "—"}
                        color="bg-amber-500/10 text-amber-400"
                    />
                </motion.div>

                {/* ─── Profile CTA ─── */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    <a
                        href={portfolioData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-violet-500/30 text-white/60 hover:text-white text-sm font-mono transition-all duration-300 hover:scale-105"
                    >
                        <Github size={16} />
                        View GitHub Profile
                        <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    </a>
                </motion.div>

            </div>
        </SectionWrapper>
    );
}
