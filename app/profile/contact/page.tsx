'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MagneticButton from '@/components/ui/MagneticButton';
import Image from 'next/image';

const ContactPage = () => {
    const contactInfo = [
        {
            icon: <Phone size={20} />,
            label: "Phone",
            value: "+251 936 634 537",
            href: "tel:+251936634537",
            action: "Call Now"
        },
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "eyuelendale7@gmail.com",
            href: "mailto:eyuelendale7@gmail.com",
            action: "Send Email"
        },
        {
            icon: <MapPin size={20} />,
            label: "Location",
            value: "Addis Ababa, Ethiopia",
            href: "https://maps.google.com/?q=Addis+Ababa,+Ethiopia",
            action: "View Map"
        }
    ];

    const socialLinks = [

        { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/eyuel-endale-a85073227", color: "hover:text-blue-400" },
        { icon: <FaTelegram size={24} />, href: "https://t.me/Eyuel_Endale", color: "hover:text-sky-400" }
    ];

    return (
        <section className="min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden relative">
            {/* Ambient Background - Handled Globally by GridBackground */}

            <Container className="relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-3xl overflow-hidden p-0 border border-white/10 shadow-2xl backdrop-blur-xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Profile Section (Left) */}
                        <div className="relative p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-white/5 to-transparent border-b md:border-b-0 md:border-r border-white/5">

                            {/* Profile Image Wrapper with Glow */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="relative mb-6 group"
                            >
                                <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-inner bg-slate-800">
                                    <img
                                        src="/photo.jpg"
                                        alt="Eyuel Endale"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-[#0f172a] rounded-full animate-pulse" />
                            </motion.div>

                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-2">Eyuel Endale</h1>
                            <p className="text-primary font-medium tracking-wide text-sm uppercase mb-6">Senior Full Stack Developer</p>

                            <div className="flex gap-4 mb-4">
                                {socialLinks.map((social, index) => (
                                    <MagneticButton key={index}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                                        >
                                            {social.icon}
                                        </a>
                                    </MagneticButton>
                                ))}
                            </div>
                        </div>

                        {/* Contact Details (Right) */}
                        <div className="p-10 flex flex-col justify-center space-y-8 bg-[#0f172a]/40">
                            <div>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    Contact Details
                                    <span className="h-px flex-1 bg-white/10" />
                                </h2>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            target={item.label === "Location" ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 + (index * 0.1) }}
                                            className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                                                <p className="text-white font-medium break-all">{item.value}</p>
                                            </div>
                                            <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <Button className="w-full justify-center" href="/Full Stack Developer & UIUX Designer resume.pdf" external>
                                    Download Resume
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default ContactPage;
