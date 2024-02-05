/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/**/*.{html,js}'],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   },
    // },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
      spacing: {
        container: `max(1rem, calc((100vw - calc(1480px - 1rem * 2)) / 2))`,
        'sm-container': `max(1rem, calc((100vw - calc(1024px - 1rem * 2)) / 2))`,
      },
    },
  },
  plugins: [],
};
