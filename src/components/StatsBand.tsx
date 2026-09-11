import React from "react";
import { corporateStats, StatItem } from "@/data/stats";

interface StatsBandProps {
  stats?: StatItem[];
  theme?: "dark" | "light";
  className?: string;
}

export const StatsBand: React.FC<StatsBandProps> = ({
  stats = corporateStats,
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`border-y ${
        isDark
          ? "bg-navy-950 border-navy-800 text-white"
          : "bg-white border-line-light text-ink-primary"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`space-y-2 border-l-2 pl-4 sm:pl-6 ${
                isDark ? "border-brand-blue" : "border-navy-700"
              }`}
            >
              <div
                className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight tabular-nums ${
                  isDark ? "text-white" : "text-navy-900"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-xs sm:text-sm font-bold tracking-wider uppercase ${
                  isDark ? "text-accent-gold" : "text-brand-blue"
                }`}
              >
                {stat.label}
              </div>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? "text-slate-400" : "text-ink-muted"
                }`}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBand;
