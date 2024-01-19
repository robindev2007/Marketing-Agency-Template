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
        primary: "#FF76B4",
        black: "#212121",
        black_active: "#1e1e1e",
        white: "#FCF9F6",
        white_lite: "#cac7c5",
      },
      screens: {
        sx: "508px",
      },
      transitionProperty: {
        grid: " grid-template-rows",
      },
    },
  },
  plugins: [],
};
export default config;
