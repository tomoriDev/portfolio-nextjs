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
      colors: {
        primary: {
          light: "#7c8a63", // Puedes personalizar este color
          DEFAULT: "#7c8a63", // Este será el color principal por defecto
          dark: "#3182ce", // También puedes tener una variante oscura
        },
        secondary: {
          light: "#fbd38d", // Puedes personalizar este color
          DEFAULT: "#f6ad55", // Este será el color secundario por defecto
          dark: "#dd6b20", // También puedes tener una variante oscura
        },
      },
    },
  },
  plugins: [],
};
export default config;
