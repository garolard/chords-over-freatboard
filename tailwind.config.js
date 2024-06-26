/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'gray-dark': '#121717',
        'gray-medium': '#DBE3E5',
        'gray-light': '#F0F2F5',
        'surface': '#fefcfa', 
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'xs': '.75rem',
      }
    },
  },
  plugins: [require('daisyui')],
}

