/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

