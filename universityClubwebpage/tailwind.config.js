/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
 './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
],
  theme: {
    extend: {},
  },
  plugins: [
     require('flowbite/plugin')
  ],
}