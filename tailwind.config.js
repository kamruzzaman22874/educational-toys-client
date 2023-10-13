/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto" , "serif"],
        lora: ['lora', 'serif'],
        teko: ['Teko', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}


