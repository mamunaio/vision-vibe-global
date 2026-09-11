import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070E16",
          900: "#0B1622", // Primary dark background
          850: "#0E1C2B",
          800: "#132235",
          700: "#1E334D",
          600: "#2B4769",
        },
        brand: {
          blue: "#1D4ED8", // Confident blue accent
          "blue-hover": "#1E40AF",
          "blue-light": "#2563EB",
          "blue-subtle": "#EFF6FF",
        },
        canvas: {
          light: "#F7F8FA", // Off-white section background
          white: "#FFFFFF",
          dark: "#0B1622",
        },
        ink: {
          primary: "#111827", // Text on light sections
          muted: "#4B5563",
          light: "#FFFFFF", // Text on dark sections
          "light-muted": "#94A3B8",
          subtle: "#6B7280",
        },
        accent: {
          gold: "#C5A880", // Warm muted gold neutral accent
          "gold-light": "#DFD0B8",
          "gold-dark": "#A6865B",
        },
        line: {
          light: "#E5E7EB",
          dark: "#1F3147",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-display)", "Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        sans: ["var(--font-sans)", "Manrope", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ["var(--font-display)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "88rem",
      },
      letterSpacing: {
        editorial: "0.15em",
        widest: "0.2em",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
