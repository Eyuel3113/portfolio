'use client';

import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';
import Card from './ui/Card';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="about" className="bg-background">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Engineering with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Purpose & Precision.</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                My journey in software engineering has never been just about writing code; it's about solving real-world capital problems efficiently. I started as a curious developer tinkering with frontend interfaces but quickly realized that the true power of an application lies in its backbone—the backend.
                            </p>
                            <p>
                                Over the years, I've transitioned into a Full Stack role with a heavy bias towards backend architecture. Whether it's optimizing complex SQL queries in <span className="text-foreground font-medium">Sequelize</span> to reduce load times by milliseconds, or structuring a modular <span className="text-foreground font-medium">Laravel</span> API that can scale with a growing user base, I thrive on the challenges of performance and reliability.
                            </p>
                            <p>
                                I don't just "build websites." I architect digital ecosystems. From database schema design to containerized deployments, I ensure that every layer of the application is robust, secure, and ready for production.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-1 border-l border-white/5 hidden lg:block" />

                    <div className="lg:col-span-6 space-y-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Briefcase className="text-primary" /> Experience
                        </h3>

                        <div className="space-y-8">
                            <Card className="relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold">Senior Backend Developer</h4>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">
                                        <Calendar size={12} /> 2023 - Present
                                    </div>
                                </div>
                                <p className="text-secondary font-medium text-sm mb-4">Tech Solutions Ltd.</p>
                                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                    <li>Architected a microservices-based backend using Node.js and gRPC, improving system modularity.</li>
                                    <li>Optimized database performance for high-traffic endpoints, reducing latency by 40%.</li>
                                    <li>Mentored junior developers on best practices in API design and database normalization.</li>
                                </ul>
                            </Card>

                            <Card className="relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold">Full Stack Developer</h4>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">
                                        <Calendar size={12} /> 2021 - 2023
                                    </div>
                                </div>
                                <p className="text-secondary font-medium text-sm mb-4">Creative Agency</p>
                                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                    <li>Developed custom ERP solutions for manufacturing clients using Laravel and Vue.js.</li>
                                    <li>Implemented complex payroll and inventory management logic complying with local regulations.</li>
                                    <li>Led the migration of legacy codebases to modern frameworks, ensuring zero downtime.</li>
                                </ul>
                            </Card>

                            <Card className="relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-muted-foreground" />
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold">Freelance Developer</h4>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">
                                        <Calendar size={12} /> 2019 - 2021
                                    </div>
                                </div>
                                <p className="text-secondary font-medium text-sm mb-4">Self-Employed</p>
                                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                    <li>Delivered 15+ custom web applications for international clients.</li>
                                    <li>Specialized in building high-conversion landing pages and custom e-commerce plugins.</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Experience;
