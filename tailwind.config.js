/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        source: ['Source Sans 3'],
      },
      backgroundImage: {
        'hero-one': "url('src/assets/Images/jasmine.jpg')",
        'hero-two': "url('src/assets/Images/lightyear.jpg')",
        'hero-three': "url('src/assets/Images/superman.jpg')",
        'banner-one': "url('src/assets/Images/avatar.jpg')",
        'banner-two': "url('src/assets/Images/batman.jpg')",
        'banner-three': "url('src/assets/Images/jasmine.jpg')",

      }
    },
  },
  plugins: [],
}