"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { portfolioData } from "@/lib/portfolio";
import { Award } from "lucide-react";

export function Certifications() {
    return (
        <SectionWrapper id="certifications" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading label="Certifications" title="Credentials & Learning" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {portfolioData.certifications.map((cert, i) => (
                        <motion.div
                            key={cert.name}
                            className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.06] transition-all duration-300 group overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Subtle glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Icon */}
                            <div className="mb-4 inline-flex p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                                <Award size={18} className="text-violet-400" />
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-white text-sm leading-snug mb-4 group-hover:text-violet-300 transition-colors">
                                {cert.name}
                            </h3>

                            {/* Topics */}
                            <div className="flex flex-wrap gap-1.5">
                                {cert.topics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-white/50 font-mono"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
