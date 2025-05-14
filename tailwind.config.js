/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Adjust if you use a different folder like src/
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['"Roboto Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
