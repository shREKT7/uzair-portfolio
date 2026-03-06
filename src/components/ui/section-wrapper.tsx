"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export function SectionWrapper({
    children,
    className = "",
    id,
    delay = 0,
}: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
        >
            {children}
        </motion.section>
    );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.08,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
            }}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeading({ label, title }: { label: string; title: string }) {
    return (
        <div className="text-center mb-16">
            <motion.span
                className="inline-block px-4 py-1.5 text-xs font-mono rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 uppercase tracking-widest mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {label}
            </motion.span>
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                {title}
            </motion.h2>
        </div>
    );
}
