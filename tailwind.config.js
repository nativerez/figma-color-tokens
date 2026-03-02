const tokens = require('jamie-tokens/tokens.json');

// Helper function to extract $value from tokens
function extractTokenValues(tokenObj) {
  if (!tokenObj) return {};
  
  const result = {};
  for (const [key, value] of Object.entries(tokenObj)) {
    if (typeof value === 'object') {
      if (value.$value) {
        result[key] = value.$value;
      } else {
        result[key] = extractTokenValues(value);
      }
    }
  }
  return result;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // All colors from jamie-tokens
        ...extractTokenValues(tokens.core.colors),
        // Shadcn semantic tokens map to jamie-tokens primary ramp (slightly darker shades)
        border: extractTokenValues(tokens.core.colors.primary)[300],
        input: extractTokenValues(tokens.core.colors.primary)[300],
        ring: extractTokenValues(tokens.core.colors.primary)[500],
        background: extractTokenValues(tokens.core.colors.primary)[50],
        foreground: extractTokenValues(tokens.core.colors.primary)[900],
        primary: {
          ...extractTokenValues(tokens.core.colors.primary),  // Includes 50, 100, 200, etc.
          DEFAULT: extractTokenValues(tokens.core.colors.primary)[600],  // Slightly darker default
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: extractTokenValues(tokens.core.colors.primary)[300],
          foreground: extractTokenValues(tokens.core.colors.primary)[900],
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#fef2f2",
        },
        muted: {
          DEFAULT: extractTokenValues(tokens.core.colors.primary)[200],
          foreground: extractTokenValues(tokens.core.colors.primary)[800],
        },
        accent: {
          DEFAULT: extractTokenValues(tokens.core.colors.primary)[500],
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: extractTokenValues(tokens.core.colors.primary)[900],
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: extractTokenValues(tokens.core.colors.primary)[900],
        },
        sidebar: {
          DEFAULT: extractTokenValues(tokens.core.colors.primary)[800],
          foreground: extractTokenValues(tokens.core.colors.primary)[100],
          primary: extractTokenValues(tokens.core.colors.primary)[300],
          "primary-foreground": "#ffffff",
          accent: extractTokenValues(tokens.core.colors.primary)[700],
          "accent-foreground": extractTokenValues(tokens.core.colors.primary)[100],
          border: extractTokenValues(tokens.core.colors.primary)[700],
          ring: extractTokenValues(tokens.core.colors.primary)[300],
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
