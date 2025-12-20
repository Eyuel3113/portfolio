import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    external?: boolean;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    className = '',
    ...props
}: ButtonProps) => {

    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25 hover:shadow-primary/40",
        secondary: "bg-secondary text-secondary-foreground hover:brightness-110 shadow-lg shadow-secondary/25",
        outline: "border border-primary/30 bg-transparent text-primary hover:bg-primary/10",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-white/5"
    };

    const sizes = {
        sm: "text-xs px-4 py-2",
        md: "text-sm px-6 py-3",
        lg: "text-base px-8 py-4"
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
