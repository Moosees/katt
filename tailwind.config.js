/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'rgb(var(--color-secondary) / 56)',
      tertiary: 'rgb(var(--color-tertiary) / 85)'
    },
    extend: {},
  },
  plugins: [],
}
