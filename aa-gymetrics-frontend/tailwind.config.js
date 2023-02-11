/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*/js",
  ],
  theme: {
    extend: {
      //Text font
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        //Navbar colors
        "nav-back": "#fae0a2",
        "nav-back-alt": "#d1ba84",
        //Primary button colors (default and hover)
        "btn-primary-blue": "#1e78f7",
        "btn-primary-alt": "#044cd0",
        //Secondary button colors (default and hover)
        "btn-secondary-grey": "#7a8793",
        "btn-secondary-alt": "#5a636b",
        //Danger button colors (default and hover)
        "btn-danger-red": "#d72503",
        "btn-danger-alt": "#ab1e03",
        //Success button colors (default and hover)
        "btn-success-grn": "#1fae51",
        "btn-success-alt": "#0b7a32",
        //Warn button colors (default and hover)
        "btn-warn-ylw": "#e6bc15",
        "btn-warn-alt": "#c29d0a",
      },
      //Shadow for boxes
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        black: "0 1px 3px 0 #000000",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
