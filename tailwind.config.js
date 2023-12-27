/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {},
    colors: {
      main: "#0078C5",
      gray: "#e9ecef",
      gray2: "#D1C5C0",
      darkGray: "#6A6A77",
      lightGray: "#F3F3F3",

      red: "#ff0000",
      orange: "#ff8c00",
      yellow: "#ffff00",
      green: "#008000",
      blue: "#0000ff",
      indigo: "#4b0082",
      purple: "#800080",
      pink: "#FFC0CB",

      opacityBlack: "rgba(0, 0, 0, 0.4)",
    },
  },
  plugins: [],
};
