import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-light" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  target,
  rel,
  ariaLabel,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-blue-hover active:bg-blue-900 border border-transparent shadow-sm",
    secondary:
      "bg-transparent text-ink-primary hover:bg-slate-100 border border-slate-300 active:bg-slate-200",
    "outline-light":
      "bg-transparent text-white hover:bg-white/10 border border-white/30 active:bg-white/20",
    dark: "bg-navy-900 text-white hover:bg-navy-800 border border-navy-700 active:bg-navy-950",
    ghost:
      "bg-transparent text-ink-primary hover:bg-slate-100/70 border border-transparent",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClass}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
