/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      green: "#495E57",
      yellow: "#F4CE14",
      orange: "#EE9972",
      "orange-light": "#FBDABB",
      "gray-light": "#EDEFEE",
      "gray-dark": "#333333",
      blue: "#1fb6ff",
      pink: "#ff49db",
      gray: "#8492a6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
