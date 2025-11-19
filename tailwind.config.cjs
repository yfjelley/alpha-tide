/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0F2B",
        accent: "#00C2A8",
        "text-main": "#FFFFFF",
        "text-muted": "#D0D3DA",
        "card-bg": "#111827"
      },
      boxShadow: {
        "accent-soft": "0 20px 40px rgba(0, 194, 168, 0.25)"
      }
    }
  },
  plugins: []
};

