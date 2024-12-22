/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match your project structure
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        }
      },
      colors: {
        primary: "#186CA8", // Dark Blue
        secondary: "#1AA7B7", // Cyan
        background1: "#EDEAE2", 
        background2: "#FCFFFF", 
        fontColor1: "#424242", 
        fontColor2: "#535353"
      },
      fontFamily: {
        heading: ["Roboto", "sans-serif"], 
        body: ['Open Sans', 'sans-serif']
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      boxShadow: {
        card: "0 2px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
      },
      screens: {
        sm: "640px", 
        md: "768px", 
        lg: "960px", 
        xl: "1280px", 
      },
    },
  },

};
