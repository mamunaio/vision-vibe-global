import React from "react";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
  hoverEffect?: boolean;
  className?: string;
  href?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  theme = "light",
  hoverEffect = true,
  className = "",
  href,
}) => {
  const isDark = theme === "dark";

  const baseStyles =
    "relative rounded-lg p-6 md:p-8 transition-all duration-200";

  const themeStyles = isDark
    ? "bg-navy-850 text-white border border-navy-700 shadow-sm"
    : "bg-white text-ink-primary border border-line-light shadow-sm";

  const hoverStyles = hoverEffect
    ? isDark
      ? "hover:border-navy-600 hover:-translate-y-0.5 hover:shadow-md"
      : "hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-md"
    : "";

  const combinedClass = `${baseStyles} ${themeStyles} ${hoverStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${combinedClass}`}>
        {children}
      </Link>
    );
  }

  return <div className={combinedClass}>{children}</div>;
};

export default Card;
