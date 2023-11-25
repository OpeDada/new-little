/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "330px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      green: "#495E57",
      yellow: "#F4CE14",
      orange: "#EE9972",
      white: "#FFFFFF",
      "orange-light": "#FBDABB",
      "gray-light": "#EDEFEE",
      "gray-dark": "#333333",
      blue: "#1fb6ff",
      pink: "#ff49db",
      gray: "#8492a6",
      red: "#b30000",
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
      serif: ["Markazi Text", "Karla", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        hero: 'url("../src/assets/banner.jpg")',
      },
    },
  },
  plugins: [],
};
