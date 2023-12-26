/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      songti: ['custom']
    },
    extend: {
      colors: {
        yellow: 'rgb(254 249 195)',
        textColor: '#3D3D3D',
        textNavTitleColor: '#A03726',
        mapHoverColor: '#AA3432',
        mapSelectedColor: '#AA3432',
        gradientNavFrom: '#d9b08f',
        gradientNavTo: '#F9E29B',
        gradientFrom: '#F9E29B',
        gradientTo: 'white'
      }
    },
    plugins: []
  }
}
