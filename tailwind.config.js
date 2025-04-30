/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      'playWriteCuba':  '"Playwrite CU", "cursive";',
      'raleWay': '"Raleway", "sans-serif";'
    },
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite;",
        glow: "box-shadow: 0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(0, 0, 255, 0.3)",
        "pulse-slow": "pulse 5s ease-in-out infinite reverse",
        ripple: "ripple 6s linear infinite alternate",
      },
      keyframes: {
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
