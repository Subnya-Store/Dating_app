/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/SectionOne/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/SectionTwo/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/SectionThree/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/SectionFour/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/SectionFive/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/SectionSix/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors:{
        primary: 'rgb(var(--color-primary)',
        pinkColor: "var(--pink-color)",
        blueColor:"var(--blue-color)",
        lightGray:"var(--light-gray)"
      },
      backgroundImage: {
        'hero-pattern': "url('/ImagesEllipse.png')",
        'bg-shape': "url('/Imagesshape-bg.(.jpeg')",
      }

    },
  },
  plugins: [],
})

