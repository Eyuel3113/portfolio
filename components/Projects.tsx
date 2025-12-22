'use client';

import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';
import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Modal from './ui/Modal';
import ProjectCard from './ui/ProjectCard';
import Toast from './ui/Toast';

const projects = [
    {
        title: "Human Resource Management System",
        description: "A comprehensive digital solution for modern Human Resource Management System, featuring automated Attendance processing, Leave Management, Payroll Processing, and Staff Performance Analytics.",
        tags: ["Laravel", "React", "MySQL", "Real-time", "Non SAAS", "Document API"],
        image: "/hrm-landing.png",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        details: {
            challenge: "Managing Attendance Management with fingerprint authentication Ethiopian calendar",
            solution: " Implemented WebSocket connections for real-time order updates and atomic database transactions . Designed a fail-safe offline mode for reliability.",
            features: [
                "Real-time Attendance Management with fingerprint authentication",
                "Leave Management",
                "Payroll Processing",
                "Staff Performance Analytics",
                "Performance Analytics",
                "Training Management",
                "Integrated with ZKteco Attendance System"
            ]
        }
    },
    {
        title: "Restaurant Management System",
        description: "A comprehensive digital solution for modern restaurants, featuring automated order processing, inventory tracking, and real-time analytics. The system bridges the gap between kitchen staff, waitstaff, and management.",
        tags: ["Node.js", "Next.js", "postgres", "Real-time", "Flutter", "SAAS", "ArifPay"],
        image: "/prooject1.png",
        demoUrl: "https://restaurant-zeta-wheat.vercel.app",
        repoUrl: "https://github.com",
        details: {
            challenge: "Managing peak-hour order concurrency and inventory synchronization across multiple terminals.",
            solution: "Implemented WebSocket connections for real-time order updates and atomic database transactions to ensure inventory consistency. Designed a fail-safe offline mode for reliability.",
            features: [
                "Real-time Kitchen Display System (KDS)",
                "QR Code Table Ordering",
                "Ingredient-level Inventory Tracking",
                "Integrated With Local Payment Gatways",
                "Staff Performance Analytics",
                "Google Map Integrated"
            ]
        }
    },
    {
        title: "Vehicle Parking Management",
        description: "A smart city solution aimed at optimizing parking space utilization. Features license plate recognition integration, automated billing, and a mobile app for drivers to find spots.",
        tags: ["Django", "Next.js", "Flutter", "SAAS", "ArifPay"],
        image: "/project2.png",
        demoUrl: "https://vpms.astedader.com",
        repoUrl: "https://github.com",
        details: {
            challenge: "Accurately tracking vehicle entry/exit in high-traffic conditions and minimizing latency for barrier control.",
            solution: "utilized edge computing for initial image processing and optimized API endpoints for sub-200ms response times.",
            features: [
                "Real-time Vehicle Tracking System",
                "Dynamic Pricing Engine",
                "Mobile Payment Integration",
                "Occupancy Heatmaps",
                "Google Map Integrated"
            ]
        }
    },
    {
        title: "Property Management System",
        description: "An enterprise-grade platform for real estate agencies to manage portfolios, tenants, and maintenance requests. Focuses on document automation and financial reporting.",
        tags: ["SaaS", "Multi-tenant", "Document API"],
        image: "/pms.PNG",
        demoUrl: "https://astedaderpms.com/en",
        repoUrl: "https://github.com",
        details: {
            challenge: "Handling complex lease structures and generating compliant legal documents dynamically.",
            solution: "Built a templating engine for legal docs and a double-entry ledger system for accurate financial tracking.",
            features: [
                "Automated Rent Collection",
                "Maintenance Ticket Workflow",
                "Legal Document Generation",
                "Owner & Tenant Portals"
            ]
        }
    },
    {
        title: "Diverse Websites Portfolio",
        description: "A collection of high-impact websites designed for various industries including sport, fashion, Beauty and corporate sectors. Each site focuses on conversion optimization and brand storytelling.",
        tags: ["Web Design", "SEO", "Performance", "Animation"],
        image: "/spa.png",
        repoUrl: "https://github.com",
        demoLinks: [
            { label: "Sport", url: "https://skate-addis.vercel.app" },
            { label: "Beuty", url: "https://www.fanaweyba.com" },
            { label: "Fashion", url: "https://zolamodeling.com" }

        ],
        details: {
            challenge: "Balancing high-quality visuals with page load performance and SEO requirements.",
            solution: "Employed next-gen image formats, lazy loading, and critical CSS extraction. content via headless CMS.",
            features: [
                "Custom Scroll Animations",
                "Headless CMS Integration",
                "95+ Lighthouse Scores",
                "Interactive 3D Elements"
            ]
        }
    },
    {
        title: "Admin Dashboards Suite",
        description: "A series of specialized administrative interfaces for HRM, Laboratory Information Systems (LIS), and Logistics. Prioritizes data visualization and workflow efficiency.",
        tags: ["UX Research", "Dashboard", "Complex Forms"],
        image: "/dashboards.png",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        details: {
            challenge: "Presenting massive datasets in an actionable, digestible format for non-technical users.",
            solution: "Designed modular dashboard widgets and implemented virtualization for large data tables.",
            features: [
                "Custom Charting Libraries",
                "Role-based Access Control (RBAC)",
                "Exportable Reports (PDF/Excel)",
                "Dark/Light Mode Support"
            ]
        }
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = React.useState<any>(null);
    const [toast, setToast] = React.useState<{ visible: boolean; message: string; type: 'warning' | 'info' | 'success' | 'error' }>({
        visible: false,
        message: "",
        type: 'info'
    });

    const handleSourceCodeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setToast({
            visible: true,
            message: "This repository is private due to company Non-Disclosure Agreements (NDA).",
            type: 'warning'
        });
    };

    return (
        <Section id="projects" className="relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 z-0" />

            <Container className="relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected <span className="text-secondary">Works</span></h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A collection of systems, dashboards, and interfaces I have designed and developed.
                        <br />Click on a card to explore technical details.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </Container>

            {/* Toast Notification */}
            <Toast
                isVisible={toast.visible}
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(prev => ({ ...prev, visible: false }))}
            />

            {/* Project Details Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="space-y-8">
                        {/* Hero Image in Modal */}
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/800x600/1e293b/white?text=Project+Detail";
                                }}
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedProject.details.challenge}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">The Solution</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedProject.details.solution}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Key Features</h4>
                                    <ul className="space-y-2">
                                        {selectedProject.details.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 pt-4">
                                    {selectedProject.demoLinks ? (
                                        selectedProject.demoLinks.map((link: any, i: number) => (
                                            <Button key={i} href={link.url} external className="w-full justify-center gap-2">
                                                Visit {link.label} <ArrowUpRight size={18} />
                                            </Button>
                                        ))
                                    ) : (
                                        selectedProject.demoUrl && (
                                            <Button href={selectedProject.demoUrl} external className="w-full justify-center gap-2">
                                                View Live Demo <ArrowUpRight size={18} />
                                            </Button>
                                        )
                                    )}

                                    <Button
                                        onClick={handleSourceCodeClick}
                                        variant="outline"
                                        className="w-full justify-center gap-2"
                                    >
                                        View Source Code <Github size={18} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </Section>
    );
};

export default Projects;
