'use client';

import React, { useEffect, useRef } from 'react';

const GridBackground = () => {
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mousePosition.current = { x: event.clientX, y: event.clientY };
            const spotlight = document.getElementById('grid-spotlight');
            if (spotlight) {
                spotlight.style.background = `radial-gradient(600px circle at ${event.clientX}px ${event.clientY}px, rgba(59, 130, 246, 0.15), transparent 40%)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Mouse Spotlight */}
            <div
                id="grid-spotlight"
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 40%)`
                }}
            />

            {/* Ambient Colors - Central Blob matching Contact Page */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        </div>
    );
};

export default GridBackground;
