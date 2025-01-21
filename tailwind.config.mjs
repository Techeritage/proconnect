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
      },
    },
  },
  plugins: [],
};
