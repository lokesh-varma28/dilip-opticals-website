/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2545',
          50: '#f0f4f9',
          100: '#dce5f1',
          200: '#b8cde2',
          300: '#8baecd',
          400: '#5989b4',
          500: '#386b9b',
          600: '#29537e',
          700: '#204164',
          800: '#17324d',
          900: '#0B2545',
          950: '#07172c',
        },
        accent: {
          DEFAULT: '#D4A017',
          50: '#fdfaf0',
          100: '#f9f2db',
          200: '#f3e3b3',
          300: '#ebd084',
          400: '#dfb84b',
          500: '#D4A017',
          600: '#b8830f',
          700: '#93620e',
          800: '#784e12',
          900: '#654114',
          950: '#3b2207',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 37, 69, 0.08), 0 2px 6px -1px rgba(11, 37, 69, 0.04)',
        'card': '0 10px 25px -3px rgba(11, 37, 69, 0.08), 0 4px 10px -2px rgba(11, 37, 69, 0.04)',
        'hover': '0 20px 35px -5px rgba(11, 37, 69, 0.12), 0 10px 15px -3px rgba(11, 37, 69, 0.06)',
      },
    },
  },
  plugins: [],
}
