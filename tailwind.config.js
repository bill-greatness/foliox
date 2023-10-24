/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "p1":"linear-gradient(70deg, rgba(40, 30, 40, 0.6), rgba(30, 40, 30, 0.6)), url(https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg)",
        "labs":"linear-gradient(70deg, rgba(40, 30, 40, 0.6), rgba(30, 40, 30, 0.7)), url(/projects/labs.png)",
        "admin":"linear-gradient(70deg, rgba(40, 30, 40, 0.6), rgba(30, 40, 30, 0.7)), url(/projects/x-admin.png)",
        "staff":"linear-gradient(70deg, rgba(40, 30, 40, 0.6), rgba(30, 40, 30, 0.7)), url(/projects/staff.png)",
        "portal":"linear-gradient(70deg, rgba(40, 30, 40, 0.6), rgba(30, 40, 30, 0.7)), url(/projects/portal.png)",
        "accounts":"linear-gradient(70deg, rgba(40, 30, 40, 0.6), rgba(30, 40, 30, 0.7)), url(/projects/accounts.png)",
        "wris":"linear-gradient(70deg, rgba(40, 30, 40, 0.6), rgba(30, 40, 30, 0.7)), url(/projects/wris.png)",
        "ghs":"linear-gradient(70deg, rgba(40, 30, 40, 0.6), rgba(30, 40, 30, 0.7)), url(/projects/ghs.png)",
      }
    },
  },
  plugins: [],
}

