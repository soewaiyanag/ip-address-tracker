module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
        "header-pattern": "url('/src/images/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};
