"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";


interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

function isPlaceholder(url: string | undefined): boolean {
    return !url || url === "#" || url.startsWith("ADD_");
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Close on Escape key
    const handleKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (project) {
            document.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [project, handleKey]);

    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* Blurred backdrop */}
                    <motion.div
                        key="backdrop"
                        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Modal container — scrollable */}
                    <motion.div
                        key="modal"
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <motion.div
                            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto pointer-events-auto rounded-2xl md:rounded-3xl bg-[#0d0d1a] border border-white/10 shadow-2xl shadow-black/60"
                            initial={{ opacity: 0, scale: 0.88, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            transition={{ type: "spring", damping: 22, stiffness: 280, mass: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* ─── Hero image ─── */}
                            <div className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl md:rounded-t-3xl flex-shrink-0">
                                {/* Gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0d0d1a] z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-cyan-900/20 z-10" />

                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 768px"
                                    className="object-cover"
                                    priority
                                />

                                {/* Type badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 backdrop-blur-sm border border-white/10 text-violet-300">
                                        {project.type}
                                    </span>
                                </div>

                                {/* Close button */}
                                <button
                                    onClick={onClose}
                                    aria-label="Close modal"
                                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white/70 hover:text-white hover:bg-black/80 transition-all"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            {/* ─── Body ─── */}
                            <div className="px-6 md:px-8 py-6 md:py-8 space-y-7">
                                {/* Title */}
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {project.name}
                                    </h2>
                                    <p className="mt-3 text-white/60 leading-relaxed text-sm md:text-base">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/5" />

                                {/* Key Features */}
                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-3">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.features.map((f, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-3 text-sm text-white/65"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.05 * i + 0.15 }}
                                            >
                                                <span className="mt-1 text-violet-400 flex-shrink-0">▸</span>
                                                {f}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/5" />

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-3">
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.06] border border-white/10 text-white/60 hover:text-white hover:border-violet-500/30 transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/5" />

                                {/* Action buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pb-1">
                                    {/* GitHub */}
                                    <motion.a
                                        href={isPlaceholder(project.github) ? undefined : project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-disabled={isPlaceholder(project.github)}
                                        className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex-1
                      ${isPlaceholder(project.github)
                                                ? "bg-white/[0.04] border border-white/8 text-white/30 cursor-not-allowed"
                                                : "bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-violet-500/40 text-white/70 hover:text-white"
                                            }`}
                                        whileHover={isPlaceholder(project.github) ? {} : { scale: 1.02 }}
                                        whileTap={isPlaceholder(project.github) ? {} : { scale: 0.98 }}
                                    >
                                        <Github size={15} />
                                        {isPlaceholder(project.github) ? "Repo Coming Soon" : "View on GitHub"}
                                        {!isPlaceholder(project.github) && <ArrowUpRight size={13} className="opacity-60" />}
                                    </motion.a>

                                    {/* Live Demo */}
                                    {project.demo && !isPlaceholder(project.demo) && (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 transition-all duration-200 flex-1"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ExternalLink size={15} />
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
