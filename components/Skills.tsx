'use client';

import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';
import Card from './ui/Card';
import { Database, Code, Server, Layout, GitBranch, Cpu } from 'lucide-react';

const skills = [
    {
        category: "Backend Development",
        icon: <Server className="text-primary" size={24} />,
        items: ["Laravel", "Node.js", "Express", "Python / Django", "PHP", "Go"]
    },
    {
        category: "Databases & ORM",
        icon: <Database className="text-secondary" size={24} />,
        items: ["PostgreSQL", "MySQL", "MongoDB", "Sequelize", "Prisma", "Redis"]
    },
    {
        category: "Frontend & UI/UX",
        icon: <Layout className="text-accent" size={24} />,
        items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Adobe XD"]
    },
    {
        category: "DevOps & Cloud",
        icon: <Cpu className="text-indigo-400" size={24} />,
        items: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Nginx", "Linux"]
    },
    {
        category: "Architecture",
        icon: <GitBranch className="text-pink-400" size={24} />,
        items: ["Microservices", "REST API Design", "GraphQL", "System Design", "Event-Driven", "WebSockets"]
    },
    {
        category: "Tools & Methodologies",
        icon: <Code className="text-teal-400" size={24} />,
        items: ["Git / GitHub", "Jira", "Agile / Scrum", "TDD", "Postman", "Swagger"]
    }
];

const Skills = () => {
    return (
        <Section id="skills" className="bg-background/50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive suite of tools and technologies I use to architect robust, scalable, and high-performance applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <Card key={index} className="h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    {skill.icon}
                                </div>
                                <h3 className="font-bold text-lg">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary-foreground border border-primary/20"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Skills;
