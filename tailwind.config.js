/** @type {import('tailwindcss').Config} */
export default {
  content: ["./www/*.html", './www/src/**/*.js', './www/src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        bones: {
          900: '#eafd4b'
        }
      },
    },

  },
  plugins: [],
}

