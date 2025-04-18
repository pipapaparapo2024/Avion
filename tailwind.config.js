/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/assets/fonts .{js,jsx,ts,tsx}' 
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshiI: ['SatoshiItalic', 'serif'], // Первый пользовательский шрифт
        clash: ['ClashDisplayLight', 'serif'], // Второй пользовательский шрифт
        mono: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};