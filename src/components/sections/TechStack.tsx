"use client";

import { SectionWrapper, SectionHeading, StaggerContainer, StaggerItem } from "@/components/ui/section-wrapper";
import { portfolioData } from "@/lib/portfolio";

// Map of tech names to emoji/symbol icons (no external icon-pack needed beyond lucide)
const techIcons: Record<string, string> = {
    "C++": "⚡",
    Python: "🐍",
    Java: "☕",
    JavaScript: "𝙅𝙎",
    SQL: "🗄",
    PyTorch: "🔥",
    TensorFlow: "🧠",
    Flask: "🌶",
    "MERN Stack": "🌐",
    MongoDB: "🍃",
    MySQL: "🐬",
    "TCP/IP": "🔗",
    "Packet Analysis": "📡",
    PCAP: "📦",
    TLS: "🔒",
    Multithreading: "⚙",
    "Flow Tracking": "📊",
    Git: "📝",
    GitHub: "🐙",
    CMake: "🔨",
    AWS: "☁",
    "Google Cloud": "🌩",
};

const categoryColors: Record<string, string> = {
    Languages: "from-violet-600/20 to-violet-600/5 border-violet-500/20",
    "Frameworks & Libraries": "from-blue-600/20 to-blue-600/5 border-blue-500/20",
    Databases: "from-green-600/20 to-green-600/5 border-green-500/20",
    "Systems & Networking": "from-orange-600/20 to-orange-600/5 border-orange-500/20",
    "Tools & Platforms": "from-cyan-600/20 to-cyan-600/5 border-cyan-500/20",
};

const categoryTextColors: Record<string, string> = {
    Languages: "text-violet-400",
    "Frameworks & Libraries": "text-blue-400",
    Databases: "text-green-400",
    "Systems & Networking": "text-orange-400",
    "Tools & Platforms": "text-cyan-400",
};

export function TechStack() {
    return (
        <SectionWrapper id="tech-stack" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading label="Technical Skills" title="My Tech Stack" />

                <div className="space-y-10">
                    {Object.entries(portfolioData.skills).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 ${categoryTextColors[category] ?? "text-white/40"}`}>
                                {category}
                            </h3>
                            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {skills.map((skill) => (
                                    <StaggerItem key={skill}>
                                        <div
                                            className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br ${categoryColors[category] ?? "from-white/5 to-white/0 border-white/10"} border backdrop-blur-sm hover:scale-105 transition-transform duration-200 cursor-default group`}
                                        >
                                            <span className="text-xl leading-none" aria-hidden>
                                                {techIcons[skill] ?? "◆"}
                                            </span>
                                            <span className="text-sm text-white/70 group-hover:text-white transition-colors font-mono truncate">
                                                {skill}
                                            </span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
