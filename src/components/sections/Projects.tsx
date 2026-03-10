"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { AnimatedCardStack } from "@/components/ui/animate-card-animation";
import { portfolioData } from "@/lib/portfolio";

export function Projects() {
    return (
        <SectionWrapper id="projects" className="relative py-16 lg:py-24 px-6 overflow-hidden">
            {/* Desktop section spotlight — visible lg+ only */}
            <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                style={{
                    background:
                        "radial-gradient(circle at 50% 55%, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                <SectionHeading label="Featured Projects" title="Things I've Built" />

                {/* Responsive carousel container */}
                <div className="flex justify-center">
                    <div className="w-full sm:w-[640px] lg:w-[900px] xl:w-[1050px]">
                        <AnimatedCardStack projects={portfolioData.projects} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
