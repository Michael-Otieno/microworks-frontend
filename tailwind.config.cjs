/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        '128': '28rem',
      }
    },
    colors: {
      'green': '#29CD9C',
      'inputs': '#F3F4F6',
      'thead':'#E5E5E5',
      'tableBorderColor':'#CCCCCC',
      'white':'#FFFFFF',
      'black':'#000000',
      'red':'#FE0C0C',
      'blue':' #327EFF',
      'linksBg':"#D9D9D9",
      
    },
  },
  plugins: [],
}
