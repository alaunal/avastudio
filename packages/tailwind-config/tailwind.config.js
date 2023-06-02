/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ['"Montserrat", sans-serif'],
      body: ['"Hind", sans-serif'],
    },
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
        "3/5": "3 / 5",
        "5/3": "5 / 3",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
};
