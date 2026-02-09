/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        soft: "0 12px 30px -18px rgba(15, 23, 42, 0.45)",
        card: "0 18px 40px -28px rgba(15, 23, 42, 0.55)",
      },
    },
  },
  plugins: [],
}
