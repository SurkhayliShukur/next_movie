module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gemunu: ["Gemunu Libre", "sans-serif"],
      },

      colors: {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-grey": "#DDDDDD",
        "gega-white": "#F7F7F7",
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
  },
  plugins: [],
}
