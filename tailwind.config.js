/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {},
    fontWeight: {
      bold: 900,
      semibold: 600,
    },
    colors: {
      main: "#0078C5",
      gray: "#e9ecef",
      gray2: "#D1C5C0",
      darkgray: "#6A6A77",
    },
  },
  plugins: [],
};
