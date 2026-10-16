'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

interface ThemeToggleProps {
    className?: string;
    showLabel?: boolean;
}

const ThemeToggle = ({ className = '', showLabel = false }: ThemeToggleProps) => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className={`w-9 h-9 rounded-full border border-white/10 bg-white/5 opacity-0 ${className}`} />
        );
    }

    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            type="button"
            className={`
                group relative flex items-center justify-center gap-2 p-2 rounded-full
                border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20
                bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10
                text-foreground active:scale-95
                transition-all duration-200 cursor-pointer
                ${className}
            `}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                        <motion.div
                            key="moon"
                            initial={{ y: -16, opacity: 0, rotate: -60, scale: 0.6 }}
                            animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ y: 16, opacity: 0, rotate: 60, scale: 0.6 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-amber-300"
                        >
                            <Moon size={18} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ y: -16, opacity: 0, rotate: -60, scale: 0.6 }}
                            animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ y: 16, opacity: 0, rotate: 60, scale: 0.6 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-amber-500"
                        >
                            <Sun size={18} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {showLabel && (
                <span className="text-xs font-semibold tracking-wide uppercase text-foreground">
                    {isDark ? "Light" : "Dark"}
                </span>
            )}
        </button>
    );
};

export default ThemeToggle;
