/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          mobile: '390px', 
        },
      },
    },
    plugins: [],
  };