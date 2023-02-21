/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'space': ['Space Grotesk']
    },
    extend: {
      colors: {
        dark: "#0d1117",
        light: "#F1F5F9",
        lblue: "#27a5de",
        dblue: "#2e3997",
        secondary: "#5c636e",
      }
    },
  },
  plugins: [],
}