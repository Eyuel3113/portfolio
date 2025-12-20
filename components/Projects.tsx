'use client';

import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';
import Card from './ui/Card';
import Button from './ui/Button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "Enterprise ERP System",
        role: "Lead Backend Engineer",
        description: "A comprehensive localized Enterprise Resource Planning system designed for large-scale manufacturing firms. This system handles complex inventory logic, payroll with localized tax laws, and real-time production tracking.",
        tech: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker"],
        metrics: [
            "Reduced payroll processing time by 75%",
            "Handles 50k+ daily transactions",
            "Implemented localized tax engine"
        ],
        github: "#",
        live: "#",
        image: "/project-erp.jpg" // Placeholder
    },
    {
        title: "Real-time Logistics Tracker",
        role: "Full Stack Architect",
        description: "Architected a real-time logistics tracking platform allowing simplified monitoring of fleet assets. Utilized WebSockets for sub-second updates and optimized Sequelize queries to handle geospatial data efficiently.",
        tech: ["Node.js", "Sequelize", "PostgreSQL", "Socket.io", "React"],
        metrics: [
            "Sub-second latency for 1000+ simultaneous connections",
            "Optimized geospatial queries by 40%",
            "Microservices architecture for scalability"
        ],
        github: "#",
        live: "#",
        image: "/project-logistics.jpg" // Placeholder
    },
    {
        title: "FinTech Payment Gateway Integration",
        role: "Backend Developer",
        description: "Developed a secure and robust middleware to integrate multiple international payment gateways into a unified API. Focused heavily on security, idempotency, and handling concurrent transactions without race conditions.",
        tech: ["Go", "gRPC", "PostgreSQL", "Redis", "Kubernetes"],
        metrics: [
            "99.99% uptime during peak sales",
            "Zero transaction discrepancies",
            "PCI-DSS compliant architecture"
        ],
        github: "#",
        live: "#",
        image: "/project-fintech.jpg" // Placeholder
    }
];

const Projects = () => {
    return (
        <Section id="projects" className="relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 z-0" />

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-secondary">Case Studies</span></h2>
                        <p className="text-muted-foreground max-w-xl">
                            A deep dive into some of the complex systems I've architected and built.
                            I focus on performance, scalability, and maintainability.
                        </p>
                    </div>
                    <Button variant="outline" href="https://github.com/Eyuel3113" external className="gap-2">
                        View GitHub <Github size={18} />
                    </Button>
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                            {/* Project Visual / Code Snippet Placeholder */}
                            <div className="w-full lg:w-1/2 aspect-video relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-70" />
                                <div className="relative h-full w-full glass-card rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center bg-black/50">
                                    {/* Placeholder for actual image or code snippet */}
                                    <div className="text-center p-8">
                                        <div className="text-6xl font-black text-white/5 mb-4">{index + 1}</div>
                                        <p className="text-muted-foreground text-sm font-mono">Project Visualization / Code Snippet</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-primary text-sm font-bold tracking-wider uppercase">{project.role}</span>
                                    <div className="h-px w-12 bg-primary/30" />
                                </div>

                                <h3 className="text-3xl font-bold">{project.title}</h3>

                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.description}
                                </p>

                                <div className="space-y-3">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                            <span className="text-sm text-foreground/80">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-muted-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <Button variant="ghost" className="gap-2 pl-0 hover:pl-4 transition-all" href={project.live}>
                                        Live Demo <ArrowUpRight size={18} />
                                    </Button>
                                    <Button variant="ghost" className="gap-2 pl-0 hover:pl-4 transition-all" href={project.github}>
                                        Source Code <Github size={18} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Projects;
