/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5cf9c5",

          "secondary": "#acd85b",

          "accent": "#7ad85d",

          "neutral": "#1A1D29",

          "base-100": "#FFFFFF",

          "info": "#70B8D7",

          "success": "#1BDEA7",

          "warning": "#F0C375",

          "error": "#F31655",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
