/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transformOrigin: {
        '0': '0%',
      },
      rotate: {
        '360': '360deg',
      },
      transitionProperty: {
        'height': 'height',
      },
      scale: {
        '200': '2',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.my-rotate-y-180': {
          '--tw-rotate': '180deg',
          'transform': 'rotateY(var(--tw-rotate))',
        },
      })
    }
  ],
};
