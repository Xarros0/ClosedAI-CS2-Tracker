export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx,cjs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A2AEBB',
        secondary: '#3F88C5',
        tertiary: '#D00000',
        background: '#1C3144',
        text: '#ffffff',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}