/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        divShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
      },
    },
  },
  plugins: [],
}



