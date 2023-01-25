/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shadow-gradient":
          "radial-gradient(circle farthest-corner at center, rgba(0,0,0,0) 30%, rgba(0,0,0,1))",
      },
      gridTemplateColumns: {
        snake: "repeat(20, 3vw)",
      },
      gridTemplateRows: {
        snake: "repeat(10, 3vw)",
      },
    },
  },
  plugins: [],
};
