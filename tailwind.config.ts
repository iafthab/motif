import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue1: "#0779d9",
        blue2: "#0664b3",
        blue3: "#054f8d",
        blue4: "#043a67",
        blue5: "#032541",
        green1: "#bcfdce",
        green2: "#9af4c6",
        green3: "#74ebbd",
        green4: "#1aa381",
        green5: "#1aa381",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
