/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255,255,255,0.7)',
        dimBlue: 'rgba(9,151, 124, 0.1)',
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1020px',
    xl: '1440px',
  },
  plugins: [],
}
