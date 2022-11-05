/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./img/sanFrancisco.jpeg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpeg')",
			  'yosemite': "url('../img/yosemite.jpeg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpeg')",
			  'new_york': "url('../img/new_york.jpeg')",
			  'sydney': "url('../img/sydney.jpeg')",
			  'miami': "url('../img/miami.jpeg')",
			  'switzerland': "url('../img/switzerland.jpeg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpeg')", 
			  'chicago': "url('../img/chicago.jpeg')",
			  'europe': "url('../img/europe.jpeg')",
			  'iceland': "url('../img/iceland.jpeg')",
      },
      
      backgroundColor: theme => ({ 
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary':'#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary':'#61AEC9'
      }, 
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
}
