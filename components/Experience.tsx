'use client';

import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: "Senior Backend Developer & UI/UX Designer",
        company: "Phoenixopia Solution.",
        period: "APR 2025 - Present",
        location: "Addis Ababa, Ethiopia",
        description: "Leading the development of scalable applications. Architecting microservices and mentoring junior developers.",
        achievements: [
            "Reduced API latency by 40% through redis caching strategies.",
            "Led the migration of legacy monolith to microservices architecture.",
            "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%."
        ]
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Cabby Technology",
        period: "JUL 2024 - FEB 2025",
        location: "Addis Ababa, Ethiopia",
        description: "Developed and maintained multiple client websites and web applications using Laravel and React.",
        achievements: [
            "Delivered  projects for high-profile clients within strict deadlines.",
            "Optimized database queries, resulting in a 25% performance improvement.",
            "Integrated third-party payment gateways (Stripe, Telebirr)."
        ]
    },
    {
        id: 3,
        role: "Backend Developer",
        company: "Power Sports p.l.c",
        period: "APR 2024 - JUL 2024",
        location: "Addis Ababa, Ethiopia",
        description: "Collaborated with the design team to implement responsive UI/UX designs. Assisted in backend API development.",
        achievements: [
            "Developed and maintained robust backend systems",
            "Ensuring efficient data management and scalable architecture",
            "Designed and optimized APIs and database structures for high-performance applications"

        ]
    },
    {
        id: 4,
        role: "UI/UX Designer & Junior Web Developer",
        company: "Super Double T General Trading",
        period: "FEB 2023 - APR 2024",
        location: "Addis Ababa, Ethiopia",
        description: "Collaborated with the design team to implement responsive UI/UX designs. Assisted in backend API development.",
        achievements: [
            "Developed UI components using React and Tailwind CSS.",
            "Assisted in fixing critical production bugs during launch weeks.",
            "Participated in daily stand-ups and sprint planning sessions."
        ]
    }
];

const Experience = () => {
    return (
        <Section id="about" className="relative">
            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-secondary">Experience</span></h2>
                    <p className="text-muted-foreground max-w-xl">
                        A timeline of my professional journey and key achievements in the tech industry.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 top-0 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/50 z-10" />

                                {/* Date/Period (Desktop) */}
                                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'}`}>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm md:mt-0">
                                        <Calendar size={14} className="text-primary" />
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                                    <div className={`
                                        glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300
                                        ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                                    `}>
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                                <div className="flex items-center gap-2 text-primary mt-1">
                                                    <Briefcase size={16} />
                                                    <span className="font-medium">{exp.company}</span>
                                                </div>
                                            </div>
                                            <div className="md:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                                                <Calendar size={12} className="text-primary" />
                                                {exp.period}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="space-y-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                                    <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                                                    <span>{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Experience;
