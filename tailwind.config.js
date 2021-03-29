module.exports = {
  purge: ["./src/popup/**/*.{svelte,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      strokeWidth: {
        '3': '3',
        '4': '4',
        '5': '5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
