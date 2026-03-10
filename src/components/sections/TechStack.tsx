"use client";

import { SectionWrapper, SectionHeading, StaggerContainer, StaggerItem } from "@/components/ui/section-wrapper";
import { FaAws } from "react-icons/fa";
import { portfolioData } from "@/lib/portfolio";
import LogoLoop from "@/components/ui/logo-loop";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiCplusplus,
    SiTensorflow,
    SiPytorch,
    SiFlask,
    SiMongodb,
    SiMysql,
    SiGooglecloud,
    SiGit,
    SiGithub
} from "react-icons/si";

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiPython />, title: "Python" },
    { node: <SiCplusplus />, title: "C++" },
    { node: <SiTensorflow />, title: "TensorFlow" },
    { node: <SiPytorch />, title: "PyTorch" },
    { node: <SiFlask />, title: "Flask" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <FaAws />, title: "AWS" },
    { node: <SiGooglecloud />, title: "Google Cloud" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" }
];

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
        <SectionWrapper id="tech-stack" className="relative py-24 px-6 overflow-hidden">
            {/* Soft radial glow behind section */}
            <div
                className="pointer-events-none absolute inset-0 mix-blend-screen"
                style={{
                    background: "radial-gradient(circle at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                <SectionHeading label="Technical Skills" title="My Tech Stack" />

                <div className="relative w-full overflow-hidden py-16 text-white/80">
                    {/* First Loop: always visible, smaller height on mobile */}
                    <div className="md:hidden">
                        <LogoLoop
                            logos={techLogos}
                            speed={70}
                            direction="left"
                            logoHeight={32}
                            gap={40}
                            scaleOnHover
                            fadeOut
                            ariaLabel="Technology stack mobile"
                        />
                    </div>
                    <div className="hidden md:block">
                        <LogoLoop
                            logos={techLogos}
                            speed={90}
                            direction="left"
                            logoHeight={44}
                            gap={60}
                            scaleOnHover
                            fadeOut
                            ariaLabel="Technology stack"
                        />
                    </div>

                    {/* Second Loop: only visible on tablet/desktop */}
                    <div className="hidden md:block mt-8">
                        <LogoLoop
                            logos={[...techLogos].reverse()}
                            speed={70}
                            direction="right"
                            logoHeight={36}
                            gap={50}
                            scaleOnHover
                            fadeOut
                            ariaLabel="Technology stack second row"
                        />
                    </div>
                </div>

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
