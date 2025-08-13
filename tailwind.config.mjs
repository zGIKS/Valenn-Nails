/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fde8d7',
          200: '#fbceb0',
          300: '#f8ab7d',
          400: '#f4845f',
          500: '#ef6f47',
          600: '#d85a3c',
          700: '#b64a34',
          800: '#94412f',
          900: '#7a3829',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        pastel: {
          peach: '#ffd6cc',
          lavender: '#e6e6fa',
          mint: '#c3f0ca',
          blush: '#ffc0cb',
          cream: '#fff8dc',
          sage: '#c9dabf',
          powder: '#b0e0e6',
          rose: '#ffd1dc',
          honey: '#fff2cc',
          lilac: '#dda0dd',
        },
        contrast: {
          'dark-peach': '#cc7a66',
          'dark-lavender': '#8a7ca8',
          'dark-mint': '#6b9872',
          'dark-rose': '#d4879c',
          'dark-lilac': '#b577b5',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};