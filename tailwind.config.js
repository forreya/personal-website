// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#0B373C",
        muddy: "#9DB6BE",
        muddier: "#536D76",
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 150px)',
        circularLight2xl: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 108px)',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 70px)',
        circularLightMd: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 60px)',
        circularLightSm: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 40px)',
      },
      screens: {
        "3xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "2xl": { max: "1441px"},
        // => @media (max-width: 1350px) { ... }

        "sxl": { max: "1350px"},
        // => @media (max-width: 1350px) { ... }
    
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
    
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mlg: { max: "850px" },
        // => @media (max-width: 850px) { ... }
    
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
    
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
    
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  }, 
  plugins: [],
}

