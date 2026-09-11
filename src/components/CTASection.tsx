import React from "react";
import Button from "./Button";
import SectionLabel from "./SectionLabel";
import { ArrowRight, Shield } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  theme?: "dark" | "light";
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  sectionTag?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Initiate Cargo Offtake or Submit Commercial RFQ",
  subtitle = "Engage directly with our commodity trading desks to evaluate spot parcels, long-term offtake agreements, or vessel laycan availability.",
  theme = "dark",
  primaryBtnText = "Submit Commercial RFQ",
  primaryBtnHref = "/rfq",
  secondaryBtnText = "Explore Trading Desks",
  secondaryBtnHref = "/services",
  sectionTag = "COMMERCIAL ENGAGEMENT",
}) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative py-16 md:py-24 border-y ${
        isDark
          ? "bg-navy-900 border-navy-800 text-white"
          : "bg-canvas-light border-line-light text-ink-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <SectionLabel theme={theme} className="justify-center">
            {sectionTag}
          </SectionLabel>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-ink-primary"
            }`}
          >
            {title}
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-slate-300" : "text-ink-muted"
            }`}
          >
            {subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={primaryBtnHref}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>{primaryBtnText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {secondaryBtnText && (
              <Button
                href={secondaryBtnHref}
                variant={isDark ? "outline-light" : "secondary"}
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryBtnText}
              </Button>
            )}
          </div>

          <div
            className={`pt-6 flex items-center justify-center gap-2 text-xs ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-accent-gold" />
            <span>Direct partner confidentiality &amp; non-disclosure covenants apply to all initial evaluations.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
