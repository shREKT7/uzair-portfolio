"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/portfolio";
import { ProjectModal } from "./project-modal";

interface AnimatedCardStackProps {
    projects: Project[];
}

function isPlaceholder(url: string | undefined) {
    return !url || url === "#" || url.startsWith("ADD_");
}

const CARD_OFFSET = 14;
const SCALE_FACTOR = 0.04;
const ROTATE_FACTOR = 2.5;

function TechBadge({ label }: { label: string }) {
    return (
        <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.07] border border-white/10 text-white/55 whitespace-nowrap">
            {label}
        </span>
    );
}

export function AnimatedCardStack({ projects }: AnimatedCardStackProps) {
    const [cards, setCards] = useState(projects);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [, setDirection] = useState<"next" | "prev">("next");

    const cycleNext = () => {
        setDirection("next");
        setCards((prev) => {
            const next = [...prev];
            next.push(next.shift()!);
            return next;
        });
    };

    const cyclePrev = () => {
        setDirection("prev");
        setCards((prev) => {
            const next = [...prev];
            next.unshift(next.pop()!);
            return next;
        });
    };

    const topCard = cards[0];

    return (
        <>
            <div className="flex flex-col items-center gap-10">
                {/* ─── Card Stack ─── */}
                <div className="relative w-full max-w-[360px] h-[480px]">
                    <AnimatePresence initial={false}>
                        {cards.map((project, index) => {
                            const isTop = index === 0;
                            const offset = index * CARD_OFFSET;
                            const scale = 1 - index * SCALE_FACTOR;
                            const rotate = index === 0 ? 0 : index % 2 === 0 ? index * ROTATE_FACTOR : -index * ROTATE_FACTOR;

                            if (index > 3) return null;

                            return (
                                <motion.div
                                    key={project.id}
                                    className={cn(
                                        "absolute w-full rounded-2xl border backdrop-blur-xl overflow-hidden shadow-xl",
                                        isTop
                                            ? "cursor-pointer bg-[#0f0f1a]/90 border-white/15 shadow-violet-500/10"
                                            : "bg-[#0d0d18]/70 border-white/8"
                                    )}
                                    style={{
                                        transformOrigin: "top center",
                                        zIndex: cards.length - index,
                                    }}
                                    animate={{
                                        top: offset,
                                        scale,
                                        rotate,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 24,
                                        mass: 0.8,
                                    }}
                                    whileHover={
                                        isTop
                                            ? {
                                                scale: scale * 1.018,
                                                boxShadow: "0 0 50px rgba(124,58,237,0.2), 0 0 20px rgba(124,58,237,0.1)",
                                            }
                                            : {}
                                    }
                                    onClick={isTop ? () => setSelectedProject(project) : undefined}
                                >
                                    {/* ── Card Image — 16:9 via aspect-video ── */}
                                    <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 360px"
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                            priority={isTop}
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#0f0f1a]" />
                                        {/* Subtle purple tint on hover */}
                                        {isTop && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}

                                        {/* Type tag */}
                                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/55 backdrop-blur-sm border border-white/10 text-violet-300">
                                            {project.type}
                                        </span>

                                        {/* Position indicator */}
                                        {isTop && (
                                            <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-mono bg-violet-600/20 border border-violet-500/30 text-violet-300">
                                                {cards.findIndex((c) => c.id === topCard.id) + 1} / {projects.length}
                                            </span>
                                        )}
                                    </div>

                                    {/* ── Card Body ── */}
                                    {isTop && (
                                        <div className="p-5 space-y-3">
                                            <h3 className="text-base font-bold text-white leading-snug">{project.name}</h3>
                                            {/* First sentence of description only for the card */}
                                            <p className="text-xs text-white/55 leading-relaxed line-clamp-2">
                                                {project.description.split(".")[0] + "."}
                                            </p>

                                            {/* Tech badges */}
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.techStack.slice(0, 4).map((t) => (
                                                    <TechBadge key={t} label={t} />
                                                ))}
                                            </div>

                                            {/* Bottom row */}
                                            <div className="flex items-center justify-between pt-1">
                                                <span className="text-[10px] text-white/25 font-mono">Click to explore →</span>
                                                <div className="flex items-center gap-2">
                                                    {!isPlaceholder(project.github) && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="GitHub"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 text-white/50 hover:text-white transition-all"
                                                        >
                                                            <Github size={13} />
                                                        </a>
                                                    )}
                                                    {project.demo && !isPlaceholder(project.demo) && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="Live demo"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="p-1.5 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 text-violet-400 hover:text-violet-300 transition-all"
                                                        >
                                                            <ArrowUpRight size={13} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* ─── Navigation ─── */}
                <div className="flex items-center gap-5 mt-4">
                    <motion.button
                        onClick={cyclePrev}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-violet-500/30 text-white/50 hover:text-white text-sm font-mono transition-all"
                    >
                        <ArrowLeft size={14} /> Prev
                    </motion.button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {projects.map((p) => (
                            <button
                                key={p.id}
                                aria-label={`Go to ${p.name}`}
                                onClick={() => {
                                    const currentIdx = cards.findIndex((c) => c.id === p.id);
                                    if (currentIdx === 0) return;
                                    setCards((prev) => {
                                        const idx = prev.findIndex((c) => c.id === p.id);
                                        return [...prev.slice(idx), ...prev.slice(0, idx)];
                                    });
                                }}
                                className={cn(
                                    "transition-all duration-300 rounded-full",
                                    cards[0].id === p.id
                                        ? "w-5 h-2 bg-violet-500"
                                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                                )}
                            />
                        ))}
                    </div>

                    <motion.button
                        onClick={cycleNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-violet-500/30 text-white/50 hover:text-white text-sm font-mono transition-all"
                    >
                        Next <ArrowRight size={14} />
                    </motion.button>
                </div>

                {/* ─── Hint text ─── */}
                <p className="text-xs text-white/20 font-mono mt-1">
                    Use arrows to browse · Click a card to view details
                </p>
            </div>

            {/* ─── Apple-style Modal ─── */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
