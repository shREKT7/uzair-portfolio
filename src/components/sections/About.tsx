"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Terminal, Database, Shield, ChevronRight } from "lucide-react";

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const hoverScaleVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
};

export function About() {
    return (
        <SectionWrapper id="about" className="relative py-16 lg:py-24 px-6 overflow-hidden">
            {/* Subtle radial glow behind the section */}
            <div
                className="pointer-events-none absolute inset-0 mix-blend-screen"
                style={{
                    background: "radial-gradient(circle at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
                }}
            />

            <div className="relative max-w-5xl mx-auto space-y-20">

                {/* 1. WHO I AM */}
                <motion.div
                    className="text-center space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-4xl mx-auto">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            AI / Systems Engineer
                        </span>{" "}
                        focused on building scalable machine learning systems and high-performance networking infrastructure.
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        I enjoy working at the intersection of machine learning, systems programming, and network security, building tools that combine intelligent models with real-world infrastructure and scalable backend systems.
                    </p>
                </motion.div>

                {/* 2. PROJECT IMPACT METRICS STRIP */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {[
                        { label: "Projects Built", value: "4+" },
                        { label: "Technologies Used", value: "15+" },
                        { label: "Systems Programming", value: "C++ / Python" },
                        { label: "Focus Domain", value: "AI + Networking" },
                    ].map((metric, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            <motion.div
                                variants={hoverScaleVariants}
                                className="h-full flex flex-col items-center justify-center p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-colors duration-300 text-center"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{metric.value}</div>
                                <div className="text-xs md:text-sm text-white/50 font-mono">{metric.label}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 3. FOCUS AREAS */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants} className="text-center">
                        <h3 className="text-xs font-mono tracking-widest uppercase text-white/40">Engineering Domains</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {[
                            {
                                icon: Database,
                                title: "AI Systems",
                                desc: "Machine learning pipelines, model deployment, and real-world AI applications.",
                            },
                            {
                                icon: Terminal,
                                title: "High-Performance Software",
                                desc: "C++ systems programming, multi-threading, and performance optimization.",
                            },
                            {
                                icon: Shield,
                                title: "Network Security",
                                desc: "Deep packet inspection, traffic analysis, and secure networking tools.",
                            },
                        ].map((area, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                <motion.div
                                    variants={hoverScaleVariants}
                                    className="h-full group p-6 md:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-colors duration-300"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <area.icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">{area.title}</h4>
                                    <p className="text-sm text-white/60 leading-relaxed">{area.desc}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 4. CURRENTLY EXPLORING */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 w-full max-w-2xl text-center">
                        <h3 className="text-lg font-bold text-white mb-6">Currently Exploring</h3>
                        <ul className="space-y-4 text-left inline-block">
                            {[
                                "Deep Packet Inspection optimization",
                                "Machine learning system deployment pipelines",
                                "High-performance networking infrastructure",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/70 text-sm md:text-base">
                                    <ChevronRight size={16} className="text-violet-400 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* 5. EDUCATION (minimal) */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="px-6 py-4 rounded-xl bg-white/[0.02] border border-white/5 inline-flex flex-col items-center text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">Education</h4>
                        <p className="text-sm font-semibold text-white/90">NMIMS Indore — B.Tech Computer Science</p>
                        <p className="text-xs text-white/50 font-mono mt-1">Aug 2023 – May 2027</p>
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
}
