/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#112B3C",
        secondary: "#F66B0E",
        hcolor: "#134c34",
        pagescolor: "#FFFFFF",
        bannerdivcol: "#24b4ab",
        btcol: "#2f8747",
        framcol: "#2f8747", // Frame Color
        shopbtncol: "#1EFF00",
        cardbg: "#f5f5f5",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".placeholder-p-4::placeholder": {
          "padding-left": "1rem",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
