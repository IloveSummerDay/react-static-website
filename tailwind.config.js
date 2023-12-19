/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      custom: ['SourceHanSerifCN-Regular']
    },
    extend: {
      colors: {
        yellow: 'rgb(254 249 195)',
        textColor: '#3D3D3D'
      }
    }
  },
  plugins: []
}
