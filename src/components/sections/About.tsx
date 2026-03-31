"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Shield, ChevronRight, Cpu, Network } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const metrics = [
    { label: "Latency Reduced", value: "~40%" },
    { label: "CNN Accuracy", value: "98%+" },
    { label: "Systems Built", value: "5+" },
    { label: "Focus Domain", value: "AI + Systems" },
];

const domains = [
    {
        icon: Database,
        title: "AI Systems",
        desc: "Machine learning pipelines, agentic RAG architectures, model deployment, and real-world AI applications.",
    },
    {
        icon: Terminal,
        title: "High-Performance Software",
        desc: "C++ systems programming, multi-threading, performance profiling, and low-latency computation.",
    },
    {
        icon: Shield,
        title: "Network Security",
        desc: "Deep packet inspection, TLS traffic analysis, encrypted flow classification, and secure networking tools.",
    },
];

const exploring = [
    "Agentic RAG systems with multi-modal retrieval",
    "BiLSTM + gradient boosting hybrid architectures",
    "High-throughput packet processing at line rate",
];

export function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden"
            style={{ background: "#09090f" }}
        >
            {/* Subtle ambient glow */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.10) 0%, transparent 65%)" }}
            />

            <div className="relative max-w-5xl mx-auto px-6 py-20 lg:py-28 space-y-24">

                {/* ── 1. WHO I AM ── */}
                <motion.div
                    className="text-center space-y-6 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                >
                    <p className="text-xs font-mono tracking-[0.2em] uppercase text-violet-400/70">About Me</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-white">
                        <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                            AI / Systems Engineer
                        </span>{" "}
                        building things that actually work.
                    </h2>
                    <p className="text-lg text-white/45 leading-relaxed">
                        I work at the intersection of machine learning and systems engineering — building tools
                        that combine intelligent models with real-world infrastructure, networking, and backend systems.
                    </p>
                </motion.div>

                {/* ── 2. METRICS STRIP ── */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={m.label}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.025]
                            hover:border-violet-500/25 hover:bg-white/[0.045]
                            hover:shadow-[0_0_40px_rgba(124,58,237,0.10)]
                            transition-all duration-300 text-center"
                        >
                            <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1.5 whitespace-nowrap">{m.value}</div>
                            <div className="text-[11px] font-mono uppercase tracking-widest text-white/35">{m.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* ── 3. ENGINEERING DOMAINS ── */}
                <div className="space-y-8">
                    <motion.p
                        className="text-xs font-mono tracking-[0.2em] uppercase text-white/30 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Engineering Domains
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-5">
                        {domains.map((d, i) => (
                            <motion.div
                                key={d.title}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="group p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02]
                                hover:border-violet-500/30 hover:bg-[#181924]
                                hover:shadow-[0_0_50px_rgba(124,58,237,0.12)]
                                transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-violet-500/[0.12] flex items-center justify-center mb-5
                                group-hover:bg-violet-500/20 transition-colors duration-300">
                                    <d.icon size={20} className="text-violet-400" />
                                </div>
                                <h4 className="font-bold text-white mb-2.5 tracking-tight">{d.title}</h4>
                                <p className="text-sm text-white/50 leading-relaxed">{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── 4. CURRENTLY EXPLORING ── */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-full max-w-xl rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 md:p-10 text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Network size={16} className="text-violet-400" />
                            <h3 className="font-semibold text-white tracking-tight">Currently Exploring</h3>
                        </div>
                        <ul className="space-y-4 text-left inline-block">
                            {exploring.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                                    <ChevronRight size={15} className="text-violet-400 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* ── 5. EDUCATION (minimal) ── */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex flex-col items-center text-center gap-1 opacity-60 hover:opacity-90 transition-opacity duration-300">
                        <Cpu size={14} className="text-white/25 mb-1" />
                        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/30">Education</p>
                        <p className="text-sm font-semibold text-white/75">NMIMS Indore — B.Tech Computer Science</p>
                        <p className="text-[11px] font-mono text-white/35 mt-0.5">Aug 2023 – May 2027</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
