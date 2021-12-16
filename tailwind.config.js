module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '5px': '5px',
      },
      colors: {
        blue: {
          magnet: '#2179b6'
        },
        theme: {
          primary: '#0d0208',
          secondary: '#008f11',
          tertiary: '#0d0208'
        }
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['monospace', 'mono']
    },
  },
  plugins: [],
}
