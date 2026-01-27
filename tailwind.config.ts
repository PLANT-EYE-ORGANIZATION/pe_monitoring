/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ring: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-15deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(255,0,0,0.5)" },
          "50%": { boxShadow: "0 0 15px rgba(255,0,0,1)" },
        },
      },
      animation: {
        ring: "ring 0.5s ease-in-out infinite",
        pulseGlow: "pulseGlow 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
