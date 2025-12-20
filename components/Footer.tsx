import React from 'react';
import Container from './ui/Container';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Eyuel<span className="text-primary">.dev</span></h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building scalable backends and reliable systems for the modern web.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@eyuel.dev" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Eyuel Endale. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
