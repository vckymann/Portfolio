/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins",'sans-serif'],
        italian: ["Italianno"]
      },
      transitionDuration: {
        '2000': '2000ms'
      },
      colors: {
        dark_navy: '#020c1b',
        navy: '#0a192f',        
        light_navy:'#112240',
        lightest_navy:'#233554',
        dark_slate: '#495670',
        slate: '#8892b0',
        light_slate: '#a8b2d1',
        lightest_slate: '#ccd6f6',
        green: '#64ffda',        
      }
    },
  },
  plugins: [],
}

