const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './*.html'
  ],

  theme: {

    container: {
      center  : true,
      padding : '1rem'
    },

    screens: {
      sm  : '576px',
      md  : '768px',
      lg  : '1024px',
      xl  : '1200px',
      xxl : '1400px',
    },

    colors: {
      transparent : colors.transparent,
      black       : colors.black,
      white       : colors.white,
      gray        : colors.zinc,
      success     : colors.green,
      danger      : colors.red,
      primary     : {
        DEFAULT: '#76A713'
      },
    },


    extend: {
      fontFamily  : {
        heading : ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        body : ['Lato', ...defaultTheme.fontFamily.sans]
      }
    },
  },

  plugins: [],
}