'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
    message: string;
    type?: ToastType;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

const Toast = ({ message, type = 'info', isVisible, onClose, duration = 4000 }: ToastProps) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    const icons = {
        success: <CheckCircle className="text-green-400" size={20} />,
        error: <AlertTriangle className="text-red-400" size={20} />,
        warning: <Lock className="text-amber-400" size={20} />,
        info: <Info className="text-blue-400" size={20} />
    };

    const borders = {
        success: "border-green-500/20",
        error: "border-red-500/20",
        warning: "border-amber-500/20",
        info: "border-blue-500/20"
    };

    const backgrounds = {
        success: "bg-green-500/10",
        error: "bg-red-500/10",
        warning: "bg-amber-500/10",
        info: "bg-blue-500/10"
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-md shadow-2xl ${borders[type]} ${backgrounds[type]} bg-[#0f172a]/90 min-w-[320px] max-w-md`}
                >
                    <div className="flex-shrink-0">
                        {icons[type]}
                    </div>
                    <div className="flex-1 mr-4">
                        <p className="text-sm font-medium text-white">{message}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-muted-foreground hover:text-white transition-colors"
                    >
                        <X size={16} />
                    </button>

                    {/* Progress Bar */}
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: duration / 1000, ease: "linear" }}
                        className={`absolute bottom-0 left-0 h-0.5 ${type === 'warning' ? 'bg-amber-500/50' : 'bg-primary/50'}`}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
