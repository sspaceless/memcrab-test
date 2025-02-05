export default {
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%":{ transform: "translate(0, 0)" },
          "25%": { transform: "translate(0, 5px)" },
          "50%": { transform: "translate(0, 0) " },
          "75%": { transform: "translate(0, -5px) " },
          "100%":{ transform: "translate(0, 0)" },
        },
      },
      animation: {
        shake: "shake 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
