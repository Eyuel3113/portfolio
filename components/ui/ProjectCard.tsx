'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';

interface ProjectCardProps {
    project: any;
    onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-full rounded-2xl bg-card border border-white/5 cursor-pointer"
            onClick={onClick}
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
            />

            <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-[#0f172a] shadow-xl">
                {/* Image Section */}
                <div
                    className="relative w-full aspect-video overflow-hidden"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent z-10 opactiy-60" />

                    {/* Placeholder or Image */}
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                        {/* We can replace this with actual Next/Image if available */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.src = "https://placehold.co/600x400/1e293b/white?text=Project+Preview";
                            }}
                        />
                    </div>

                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
                            <ArrowUpRight size={18} />
                        </Button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3
                        className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        {project.title}
                    </h3>

                    <p
                        className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        {project.description}
                    </p>

                    <div
                        className="flex flex-wrap gap-2"
                        style={{ transform: "translateZ(25px)" }}
                    >
                        {project.tags.slice(0, 3).map((tag: string, i: number) => (
                            <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-white/5 border border-white/10 text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
