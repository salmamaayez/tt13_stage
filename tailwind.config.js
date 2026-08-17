/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A1424", panel: "#111E33", panel2: "#16263F", line: "#22344F",
        mute: "#8CA0BD", ttext: "#E6EDF7", ttgreen: "#8DC63F", teal: "#2DD4BF",
        bluey: "#5B9DF9", violet: "#8B7BF0", amber: "#F5A524", coral: "#F04E5E",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
