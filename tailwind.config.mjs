/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        bgGray: "#F7F7F8",
        primary: "#023BC6",
        secondary: {
          DEFAULT: "#0797B9",
          1: "#059AC4",
        },
      },
      fontFamily: {
        aeoBold: ["Aeonik-Bold", "sans-serif"],
        aeoReg: ["Aeonik-Regular", "sans-serif"],
        aeoLight: ["Aeonik-Light", "sans-serif"],
      },
      backgroundImage: {
        service: "linear-gradient(180deg, #e6ebf9 0%, #FFFFFF 100%);",
        wavy: "url('/wavy.svg')",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "slide-in": "slideIn 0.2s ease-out forwards",
        "slide-out": "slideOut 0.2s ease-in forwards",
      },
    },
  },
  plugins: [],
};
