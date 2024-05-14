/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "480px",
        sm: "547px",
        md: "640px",
        lg: "768px",
        mlg: "896px",
        xl: "1024px",
        mmxl: "1196px",
        mxl: "1352px",
        xxl: "1680px",
      }
    },
  },
  plugins: [],
}