/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        // that is animation class
        animation: {
          fadeout: 'fadeOut .5s ease-in-out',
          fadein:'faseIn .5s ease-in-out transition-all'
        },
  
        // that is actual animation
        keyframes: {
          fadeOut: {

            '0%': { opacity: 0,transition:'translateY(0)', height: 0 },
            '20%':{height: 200 },
            '100%': { opacity: 1},
          },
        },
        
    },
  },
  plugins: [],
}