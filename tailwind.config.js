/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xxxs: '100px',
      xxs: '320px', // Custom even smaller breakpoint
      xs: '360px', // Custom extra small breakpoint
      sm: '640px',
      md: '768px',
      lg: '976px',
      customlg: '1228px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'j-yellow': '#FFD700',
        'j-blue': '#340089',
        'j-dark': '#1A202C'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
