/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#aa182c",
        black: "#1E1D1C",
        green: "#25A45A",
        "gray-custom": "#f8f8f8",
        "light-green": "#E5F1E7",
        "light-gray": "#787878",
        "light-gray2": "#C4C4C4"
      },
      fontSize: {
        "xs": ["11px", { lineHeight: "normal" }],
        "sm": ["14px", { lineHeight: "normal" }],
        "sm2": ["15px", { lineHeight: "normal" }],
        "base": ["16px", { lineHeight: "normal" }],
      },
      // screens: {
      //   'tablet': '640px',
      //   // => @media (min-width: 640px) { ... }
      //
      //   'laptop': '1024px',
      //   // => @media (min-width: 1024px) { ... }
      //
      //   'desktop': '1280px',
      //   // => @media (min-width: 1280px) { ... }
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  important: true,
}

