/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primaryred":{
          100:"	#ff7a85",
          200:"#ff525d"
        },
        "primaryblue":"	#1f3f5b",
        "gradiantheader":{
          100:"	#ff8f70",
          200:"#ff3d54"
        },
        "bodygradiant":{
          100:"#3f4164",
          200:"	#2c2d3f"
        },
        "headingblue":"	#1f3f5b",
        "bodyblue":"	#4b5862",
        "footerblue":"	#25252d",
        "footertext":"	#c8c8cb"

      }
    },
  },
  plugins: [],
}