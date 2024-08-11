/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          500: "rgb(208, 0, 111)", // Custom value for bg-pink-500
        },
        blue: {
          700: "rgb(38, 71, 94)", // Custom color value
        },
      },
    },
  },
  plugins: [],
};
