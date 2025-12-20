'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Download, Server, Database } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl opacity-30 animate-pulse delay-700" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              OPEN TO WORK
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scalable</span> <br />
              Backend Solutions.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I am a Senior Backend Engineer & UI/UX Designer specializing in building high-performance systems with <span className="text-foreground font-semibold">Laravel</span>, <span className="text-foreground font-semibold">Sequelize</span>, and advanced database architectures. I turn complex logic into elegant code.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="#projects" className="gap-2">
                View Projects <ArrowRight size={18} />
              </Button>
              <Button variant="outline" href="/resume.pdf" external className="gap-2">
                Download Resume <Download size={18} />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-muted-foreground/50">
              <Terminal size={32} />
              <Server size={32} />
              <Database size={32} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 glass-card p-6 rounded-xl border-t border-l border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 text-xs text-muted-foreground font-mono">server.js</div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-blue-400">class <span className="text-yellow-300">BackendArchitecture</span> <span className="text-white">{`{`}</span></div>
                <div className="pl-4 text-purple-400">constructor<span className="text-white">() {`{`}</span></div>
                <div className="pl-8 text-white"><span className="text-blue-400">this</span>.skills = [<span className="text-green-300">'Laravel'</span>, <span className="text-green-300">'NodeJS'</span>, <span className="text-green-300">'Sequelize'</span>];</div>
                <div className="pl-8 text-white"><span className="text-blue-400">this</span>.performance = <span className="text-orange-400">'High'</span>;</div>
                <div className="pl-8 text-white"><span className="text-blue-400">this</span>.scalable = <span className="text-orange-400">true</span>;</div>
                <div className="pl-4 text-white">{`}`}</div>
                <div className="pl-4 text-purple-400">deploy<span className="text-white">() {`{`}</span></div>
                <div className="pl-8 text-muted-foreground">// Deploying to production...</div>
                <div className="pl-8 text-blue-400">return <span className="text-green-300">"System Online 🚀"</span>;</div>
                <div className="pl-4 text-white">{`}`}</div>
                <div className="text-white">{`}`}</div>
              </div>
            </div>

            {/* Decorative background elements behind code block */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
