'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import Container from './ui/Container';
import Button from './ui/Button';

const navLinks = [
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#about' },
  { name: 'Contact', href: '/profile/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b border-white/5' : 'py-6 bg-transparent'}`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
            Eyuel<span className="text-primary">.dev</span>
          </Link>

          {/* Desktop Interface */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:glow"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-4 border-r border-white/10 pr-4">
              <Link href="https://github.com/Eyuel3113" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com/in/eyuel-endale-a85073227" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://t.me/Eyuel_Endale" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaTelegram size={20} />
              </Link>
            </div>
            <Button variant="primary" size="sm" href="mailto:eyuelendale7@gmail.com">
              Hire Me
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-b border-white/10 md:hidden p-6 animate-fade-in">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <Link href="https://github.com/Eyuel3113" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="https://t.me/Eyuel_Endale" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaTelegram size={24} />
              </Link>
            </div>
            <Button className="w-full" href="mailto:eyuelendale7@gmail.com">
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;