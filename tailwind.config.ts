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
        dark: "#1B1D1F",
        dark2: "#282B30",
        blueWorld: "#4E80EE",
        gray: "#6C727F",
        lightGray: "#D2D5DA",
      },
      backgroundColor: {
        dark: "#1B1D1F",
        dark2: "#282B30",
        blueWorld: "#4E80EE",
        gray: "#6C727F",
        lightGray: "#D2D5DA",
      }
    },
  },
  plugins: [],
} satisfies Config;
