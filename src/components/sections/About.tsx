"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { portfolioData } from "@/lib/portfolio";
import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";

export function About() {
    return (
        <SectionWrapper id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading label="About Me" title="Who I Am" />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="space-y-6">
                        <p className="text-white/70 text-lg leading-relaxed">
                            I&apos;m a Computer Science student focused on AI, systems programming, and network security. I enjoy building scalable software systems that combine machine learning with real-world infrastructure and networking technologies.
                        </p>

                        {/* Info chips */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {[
                                { icon: MapPin, text: portfolioData.location },
                                { icon: Mail, text: portfolioData.email },
                                { icon: Phone, text: portfolioData.phone },
                            ].map(({ icon: Icon, text }) => (
                                <div
                                    key={text}
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/60"
                                >
                                    <Icon size={14} className="text-violet-400" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education card */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-6">
                            <GraduationCap size={20} className="text-violet-400" />
                            <h3 className="text-lg font-semibold text-white">Education</h3>
                        </div>

                        {[
                            {
                                school: "NMIMS Indore",
                                degree: "B.Tech Computer Science and Engineering",
                                period: "Aug 2023 – May 2027",
                                current: true,
                            },
                            {
                                school: "Progressive Education",
                                degree: "Higher Secondary",
                                period: "Feb 2021 – Mar 2022",
                                current: false,
                            },
                        ].map((edu, i) => (
                            <motion.div
                                key={i}
                                className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/20 hover:bg-white/[0.05] transition-all duration-300 group"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                {edu.current && (
                                    <span className="absolute top-4 right-4 px-2 py-0.5 text-xs rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-mono">
                                        Current
                                    </span>
                                )}
                                <h4 className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                                    {edu.school}
                                </h4>
                                <p className="text-sm text-white/60 mt-1">{edu.degree}</p>
                                <p className="text-xs text-white/30 font-mono mt-2">{edu.period}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
