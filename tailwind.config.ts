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
        // Black and Gray colors
        black: "#1B1B1B",
        "nomad-black": "#112211",
        gray: {
          50: "#FAFAFA",
          100: "#EEEEEE",
          200: "#DDDDDD",
          300: "#C8C9CF",
          400: "#ADAEB8",
          500: "#A4A4AA",
          600: "#A1A1A1",
          700: "#797A7E",
          800: "#4B4B4B",
        },

        // Green colors
        green: {
          100: "#CED8D5",
          200: "#0B382D",
        },

        // Red colors
        red: {
          100: "#FFE4E0",
          200: "#FFC2BA",
          300: "#FF472E",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
