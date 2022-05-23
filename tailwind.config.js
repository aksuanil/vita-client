module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        'themeGreen': '#02a310',
        'themeGreenLight': '#57B759',
        'themeGreenDark': '#1e6e1f',
        'themeGold': '#FFBA26',
        'themeGoldLight': '#f5b01dbe',
      }
    },
    fontFamily: {
      'Domine': ['Domine', 'sans-serif'],
      'Federo': ['Federo', 'sans-serif'],
      'Signika': ['Signika', 'sans-serif'],
      'Iceberg': ['Iceberg', 'serif'],
      'Eczar': ['Eczar', 'serif'],
      'Karla': ['Karla', 'sans-serif'],
      'Nova-Square': ['"Nova Square"', 'serif'],
      'Spectral': ['Spectral', 'sans-serif'],
    },
  },
  plugins: [],
}
