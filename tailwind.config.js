
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

        xs:"320px",
        sm:"375px",
        sml:"500px",
        mdl:"667px",
        lg:"768px",
        lgl:"1024px",
        xl:"1280px",
    },

    extend: {},
  },
  plugins: [],
}
