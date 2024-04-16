/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: "Source Code Pro",
    extend: {},
    container:{
      center:true,
      screens: {
        sm:"640px",
        md:"768px",
        lg:"1024",
        "1xl":"1140px",
      },
    },
  },
  plugins: [],
}

