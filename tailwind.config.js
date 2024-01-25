/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          100: "#47515c",
          200: "#333",
          300: "#033860",
        },
        white: "#fff",
        steelblue: {
          100: "#087ba7",
          200: "#006389",
        },
        sandybrown: "#ffa74e",
        red: "#f60000",
        aliceblue: {
          100: "#f3f9ff",
          200: "#f3f8ff",
        },
        darkgray: "#939ba4",
        gray: "#272727",
        deepskyblue: "#05b2dc",
      },
      spacing: {},
      fontFamily: {
        "red-hat-mono": "'Red Hat Mono'",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        lg: "18px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "2xl-6": "21.6px",
      "mid-7": "17.7px",
      "42xl-7": "61.7px",
      "31xl": "50px",
      "9xl": "28px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwind-scrollbar")],
};
