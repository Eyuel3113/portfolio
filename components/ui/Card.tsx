import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
    return (
        <div
            className={`
                glass-card rounded-2xl p-6 transition-all duration-300
                ${hover ? 'hover:translate-y-[-5px] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20' : ''}
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default Card;
