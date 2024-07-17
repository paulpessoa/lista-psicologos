import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#E9656B",
          600: "#FF6D73",
          700: "#FA9DA3",
          800: "#FCD4DA",
          900: "#FFE6EB",
        },
        secondary: {
          500: "#002A47",
          600: "#18527A",
          700: "#87BBE0",
          800: "#BCE3FF",
          900: "#D1ECFF",
        },
        gray: "#64696D",
      },
      fontSize: {
        xs: ["10px", { lineHeight: "1.2" }],
        sm: ["12px", { lineHeight: "1.4" }],
        base: ["14px", { lineHeight: "1.6" }],
        lg: ["16px", { lineHeight: "1.8" }],
        xl: ["18px", { lineHeight: "2" }],
        "2xl": ["24px", { lineHeight: "1.2" }], // Heading 4
        "3xl": ["32px", { lineHeight: "1.2" }], // Heading 3
        "4xl": ["40px", { lineHeight: "1.2" }], // Heading 2
        "5xl": ["48px", { lineHeight: "1.2" }], // Heading 1
      },
    },
  },
  plugins: [],
};
export default config;
