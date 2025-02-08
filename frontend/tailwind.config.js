/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1A2F17',
        'secondary-color': '#2D5A27',
        'accent-color': '#FFB302',
        'text': {
          primary: '#2C3E50',
          secondary: '#34495E',
        }
      },
    },
  },
  plugins: [],
};
