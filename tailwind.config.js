/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '8px',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '4px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
        '.custom-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      });
    },
  ],
}

