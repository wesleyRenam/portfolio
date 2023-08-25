/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto Slab', ...defaultTheme.fontFamily.sans],
        'roboto': ['Josefin'],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "90%": {
            width: "47%"
          },
          "100%": {
            width: "47%"
          }
        },
        typingMobile: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "90%": {
            width: "100%"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        text: { 
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
      },
      animation: {
        typing: "typing 5s steps(50) infinite alternate, blink .7s infinite",
        typingMobile: "typingMobile 5s steps(50) infinite alternate, blink .7s infinite",
        text: 'text 6s ease infinite', 
      },
    },
  },
  plugins: [],
}
