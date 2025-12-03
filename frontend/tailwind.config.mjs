/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {         
          inter: ["var(--font-inter)"],
          poppins: ["var(--font-poppins)"],
          montserrat: ["var(--font-montserrat)"],
          manrope: ["var(--font-manrope)"],
        },
         screens: {
        '3xl': '1600px', // for large desktops
        '4xl': '1920px', // for very large monitors
      },
      },
    },
    plugins: [],
  };
  