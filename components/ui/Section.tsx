import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const Section = ({ children, id, className = '' }: SectionProps) => {
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`}>
            {children}
        </section>
    );
};

export default Section;
