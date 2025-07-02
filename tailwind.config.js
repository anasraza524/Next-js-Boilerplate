/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001C34',
        secondary: '#004B6D',
        textPrimary: '#004B6D',
        textAccent: '#02AAB4',
        textDark: '#000000',
        textLight: '#ffffff',
      },
    },
  },
  plugins: [],
};
