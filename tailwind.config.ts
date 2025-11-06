import type { Config } from "tailwindcss"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#2E3DA3",
          200: "#5165E1",
          300: "#8996EB",
        },
        gray: {
          100: "#151619",
          200: "#1E2024",
          300: "#535964",
          400: "#858B99",
          500: "#E3E5E8",
          600: "#F9FAFA",
        },
        red: {
          100: "#D03E3E",
        },
        pink: {
          100: "#CC3D6A",
        },
        green: {
          100: "#508B26",
        },
      },
      fontFamily: {
        sans: ['"Lato"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
