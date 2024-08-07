/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        prod: "repeat(auto-fit, minmax(230px, 1fr))",
        plog: "repeat(auto-fit, minmax(220px, 1fr))",
      },
    },
  },
  plugins: [],
};
