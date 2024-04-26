/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins",'sans-serif'],
      },
      transitionDuration: {
        '2000': '2000ms'
      }
    },
  },
  plugins: [],
}

