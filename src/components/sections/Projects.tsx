"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { AnimatedCardStack } from "@/components/ui/animate-card-animation";
import { portfolioData } from "@/lib/portfolio";

export function Projects() {
    return (
        <SectionWrapper id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading label="Featured Projects" title="Things I've Built" />
                <div className="flex justify-center">
                    <div className="w-full max-w-sm">
                        <AnimatedCardStack projects={portfolioData.projects} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
