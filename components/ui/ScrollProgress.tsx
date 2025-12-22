'use client';

import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setProgress(Number(scroll));
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-100 ease-out origin-left"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
};

export default ScrollProgress;
