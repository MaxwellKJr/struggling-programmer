module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-section": "url('/showcase.png')",
      }),
      colors: {
        "primary-dark": "#1c2224",
        light: "#c5d4d8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
