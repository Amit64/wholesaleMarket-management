module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6246ea",

          secondary: "#d1d1e9",

          accent: "#6246ea",

          neutral: "#1D283A",

          "base-100": "#f5f5f4",

          info: "#0CA6E9",

          success: "#86efac",

          warning: "#fde68a",

          error: "#ef4444",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
