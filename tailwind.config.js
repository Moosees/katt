/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
      katt: 'rgb(var(--color-katt) / <alpha-value>)'
    },
    extend: {
      boxShadow: {
        DEFAULT: '0 4px 4px rgb(var(--color-katt) / 0.5)'
      }
    },
  },
  plugins: [],
}
