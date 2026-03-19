"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { FaAws } from "react-icons/fa";
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
    SiGithub,
    SiLangchain,
    SiFastapi,
    SiStreamlit
} from "react-icons/si";
import { Network, Activity, FileArchive, Brain, Database } from "lucide-react";

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
    { node: <SiGithub />, title: "GitHub" },
    { node: <SiLangchain />, title: "LangChain" },
    { node: <Network size="1em" />, title: "LangGraph" },
    { node: <Brain size="1em" />, title: "Ollama" },
    { node: <Database size="1em" />, title: "FAISS" },
    { node: <SiFastapi />, title: "FastAPI" },
    { node: <SiStreamlit />, title: "Streamlit" }
];

const skillCategories = [
    {
        title: "Core Languages",
        skills: [
            { name: "C++", icon: SiCplusplus },
            { name: "Python", icon: SiPython },
            { name: "JavaScript", icon: SiJavascript }
        ]
    },
    {
        title: "AI & Machine Learning",
        skills: [
            { name: "PyTorch", icon: SiPytorch },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Flask", icon: SiFlask }
        ]
    },
    {
        title: "Systems & Networking",
        skills: [
            { name: "TCP/IP", icon: Network },
            { name: "Packet Analysis", icon: Activity },
            { name: "PCAP", icon: FileArchive }
        ]
    },
    {
        title: "Cloud & Infrastructure",
        skills: [
            { name: "AWS", icon: FaAws },
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "Git", icon: SiGit }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export function TechStack() {
    return (
        <SectionWrapper id="tech-stack" className="relative py-24 px-6 overflow-hidden">
            <div className="relative max-w-6xl mx-auto">
                <SectionHeading label="Technical Skills" title="My Tech Stack" />

                <div className="relative flex justify-center mb-16">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18)_0%,transparent_70%)] blur-3xl"></div>

                    <div className="relative w-full overflow-hidden text-white/80">
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
                                speed={100}
                                direction="left"
                                logoHeight={50}
                                gap={60}
                                scaleOnHover
                                fadeOut
                                ariaLabel="Technologies I use"
                            />
                        </div>
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
                </div>

                <div>
                    {skillCategories.map((category) => (
                        <div key={category.title} className="mb-12">
                            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4 text-center sm:text-left">
                                {category.title}
                            </h3>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemVariants}
                                            className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-white/5 border border-white/10 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-purple-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] group"
                                        >
                                            <Icon className="text-2xl text-white/70 group-hover:text-purple-400 transition-colors duration-300" />
                                            <span className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
