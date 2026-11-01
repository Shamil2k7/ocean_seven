/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#101F46",
          dark: "#0B1531",
          light: "#1A2E63",
        },
        ocean: {
          DEFAULT: "#1684C6",
          hover: "#116FA9",
          light: "#EAF4FA",
        },
        pearl: "#FFFFFF",
        surface: "#F6F8FA",
        charcoal: "#182638",
        muted: "#687786",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
      },
    },
  },
  plugins: [],
};
