/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "*.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        LightRed: "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        OffWhite: "hsl(0, 0%, 94%)",
        LightGrey: "hsl(0, 0%, 86%)",
        SmokeyGrey: "hsl(0, 1%, 44%)",
        OffBlack: "hsl(0, 0%, 8%)",
      },
      screens: {
        sm: "375px",
        desktop: "1440px",
      },
      letterSpacing: {
        wide: ".1rem",
      },
    },
  },
  plugins: [],
};
