module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        black: "4px 6px 0 0 rgba(0, 0, 0, 1)",
        "black-lg": "5px 7px 0 0 rgba(0, 0, 0, 1)",
        light: "0 4px 14px 0 rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
