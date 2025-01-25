/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        maiandraGd:["var(--font-maiandra-gd)"],
        mauline:["var(--font-mauline)"],
        pacifico:["Pacifico"],
      },
      
      colors: {
        "pinkBg": "#FFD6E4",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "captureCardimg": "url('./public/images/captureCard.jpg')"
        
      },
    },
  },
  plugins: [daisyui],
};
