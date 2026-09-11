import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-editorial uppercase ${
        isDark ? "text-accent-gold" : "text-brand-blue"
      } ${className}`}
    >
      <span
        className={`h-px w-5 ${isDark ? "bg-accent-gold" : "bg-brand-blue"}`}
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  );
};

export default SectionLabel;
