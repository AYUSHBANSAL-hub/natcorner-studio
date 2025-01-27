import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttongradientred: "#DC143C",
        buttongradientblue: "#1E90FF",
        buttongradientpurple: "#8A2BE2",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"], // Add Orbitron font
      },
      boxShadow: {
        'custom-text': '0px 8px 16px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
