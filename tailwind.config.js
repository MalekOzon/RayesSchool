/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },boxShadow: {
        '3xl': '12px 12px 5px 0px rgba(20,39,56,0.75);',
      },dropShadow: {
        '3xl': '1px 2px 2px rgba(20,39,56,0.75)',
      }
    },
  },
  plugins: [],
}