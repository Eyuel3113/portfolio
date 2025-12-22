'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, ArrowRight, Download, Server, Database, Layers, PenTool, Cpu } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import MagneticButton from './ui/MagneticButton';
import Typewriter from './ui/Typewriter';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects Removed for Global Consistency */}


      <Container className="relative z-10">
        <motion.div
          style={{ opacity, scale, y }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-6 overflow-hidden whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              OPEN TO WORK
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Developer</span> <br />
              & UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Designer</span>.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I build scalable, high-performance applications with a focus on <span className="text-white font-semibold">backend architecture</span> and <span className="text-white font-semibold">premium user experiences</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <MagneticButton strength={0.2}>
                <Button href="#projects" className="gap-2">
                  View Projects <ArrowRight size={18} />
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Button variant="outline" href="/Full Stack Developer & UIUX Designer resume.pdf" external className="gap-2">
                  Download Resume <Download size={18} />
                </Button>
              </MagneticButton>
            </div>

            <div className="mt-12 flex items-center gap-8 text-muted-foreground/50">
              <motion.div whileHover={{ scale: 1.2, color: "#3b82f6" }} className="transition-colors"><Terminal size={32} /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#a855f7" }} className="transition-colors"><Database size={32} /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#ec4899" }} className="transition-colors"><Cpu size={32} /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#0ea5e9" }} className="transition-colors"><Layers size={32} /></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative z-10 glass-card p-6 rounded-xl border-t border-l border-white/10 shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 text-xs text-muted-foreground font-mono">portfolio.config.ts</div>
              </div>
              <div className="font-mono text-sm space-y-2 leading-relaxed">
                <div className="text-blue-400">const <span className="text-yellow-300">SeniorDeveloper</span> = <span className="text-white">{`{`}</span></div>
                <div className="pl-4 text-white">name: <span className="text-green-300">'Eyuel Endale'</span>,</div>
                <div className="pl-4 text-white">architecture: <span className="text-white">{`{`}</span></div>
                <div className="pl-8 text-white">pattern: <span className="text-green-300">'Microservices'</span>,</div>
                <div className="pl-8 text-white">cloud: [<span className="text-green-300">'AWS'</span>, <span className="text-green-300">'Docker'</span>]</div>
                <div className="pl-4 text-white">{`},`}</div>
                <div className="pl-4 text-white">skills: <span className="text-white">{`{`}</span></div>
                <div className="pl-8 text-white">backend: [<span className="text-green-300">'Laravel'</span>, <span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'PostgreSQL'</span>],</div>
                <div className="pl-8 text-white">frontend: [<span className="text-green-300">'Next.js 15'</span>, <span className="text-green-300">'React'</span>]</div>
                <div className="pl-4 text-white">{`},`}</div>
                <div className="pl-4 text-purple-400">async deploy<span className="text-white">() {`{`}</span></div>
                <div className="pl-8 text-muted-foreground">// <Typewriter text="Optimizing scale and performance..." delay={1000} speed={50} /></div>
                <div className="pl-8 text-blue-400">await <span className="text-yellow-300">success</span>();</div>
                <div className="pl-4 text-white">{`}`}</div>
                <div className="text-white">{`}`}</div>
              </div>
            </motion.div>

            {/* Decorative background elements behind code block */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-700" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
