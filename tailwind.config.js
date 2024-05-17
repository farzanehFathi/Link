/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#CCC6C1",
      },
      spacing: {
        "70px": "70px",
        "100px": "100px",
        "1800px": "1800px",
        "27p": "27%",
        "50p": "50%",
        "80p": "80%",
        "90p": "90%",
      },
      zIndex: {
        3000: "3000",
      },
    },
  },
  plugins: [],
};
