/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      current: "currentColor",
      transparent: "transparent",

      black: "#000",
      white: "#fff",

      //green
      primary: {
        200: "#367053",
        300: "#27523C",
        400: "#1E4532",
        500: "#163425",
        600: "#24360b",
        900: "#122E20",
      },

      orange: {
        500: "#BE542A",
      },
      secondary: {
        400: "#EA8C33",
        500: "#D37D2C",
        600: "#C56E1D",
        700: "#914C0C",
      },

      success: {
        50: "#E4FCE4",
        100: "#BDF6BD",
        200: "#94F094",
        300: "#69E769",
        400: "#3CDE3C",
        500: "#0FD60F",
        600: "#0DC60D",
        700: "#0BA40B",
        800: "#088308",
        900: "#066006",
      },

      error: {
        50: "#FEE2E2",
        100: "#FCA9A9",
        200: "#F97575",
        300: "#F64141",
        400: "#F31F1F",
        500: "#F00000",
        600: "#D80000",
        700: "#B80000",
        800: "#930000",
        900: "#700000",
      },

      warning: {
        50: "#FFF9E5",
        100: "#FFF0B2",
        200: "#FFE580",
        300: "#FFD84D",
        400: "#FFCD1A",
        500: "#FFC000",
        600: "#DBA600",
        700: "#B78300",
        800: "#936000",
        900: "#704D00",
      },

      default: {
        50: "#F4F5F7",
        100: "#E0E2E7",
        200: "#C5C8D2",
        300: "#ABB0BD",
        400: "#8E949E",
        500: "#707A80",
        600: "#616C73",
        700: "#505961",
        800: "#3E474E",
        900: "#2F353A",
      },

      disabled: {
        50: "#F3F4F6",
        100: "#E0E1E6",
        200: "#C4C6D0",
        300: "#A8ABB9",
        400: "#888C9A",
        500: "#666C78",
        600: "#595F6A",
        700: "#494E59",
        800: "#393E48",
        900: "#2C3039",
      },

      darkCoolGray: {
        50: "#F5F6F7",
        100: "#E8E8E8", //disable
        200: "#C4C4C4",
        300: "#B0B5BD",
        400: "#757E8C",
        500: "#1E1E1E",
        600: "#344052",
        700: "#2C3544",
        800: "#232B37",
        900: "#1C232D",
      },
      coolGray: {
        50: "#F7F8F9",
        100: "#EEF0F3",
        200: "#D5DAE1",
        300: "#BBC3CF",
        400: "#8896AB",
        500: "#556987",
        600: "#4D5F7A",
        700: "#404F65",
        800: "#333F51",
        900: "#2A3342",
      },
      indigo: {
        50: "#F8F6FF",
        100: "#F0EEFF",
        200: "#DAD4FF",
        300: "#C3B9FF",
        400: "#9685FF",
        500: "#6951FF",
        600: "#5F49E6",
        700: "#4F3DBF",
        800: "#3F3199",
        900: "#33287D",
      },
      violet: {
        50: "#FBF7FF",
        100: "#F6EEFE",
        200: "#E9D5FD",
        300: "#DCBBFC",
        400: "#C288F9",
        500: "#A855F7",
        600: "#974DDE",
        700: "#7E40B9",
        800: "#653394",
        900: "#522A79",
      },
      yellow: {
        50: "#FFFAF3",
        100: "#FEF5E7",
        200: "#FDE7C2",
        300: "#FBD89D",
        400: "#F8BB54",
        500: "#F59E0B",
        600: "#DD8E0A",
        700: "#B87708",
        800: "#935F07",
        900: "#784D05",
      },
      red: {
        50: "#FEF7F6",
        100: "#FDEEEC",
        200: "#FBD6D0",
        300: "#F9BDB4",
        400: "#F48B7C",
        500: "#EF5844",
        600: "#D7503D",
        700: "#B34333",
        800: "#8F3529",
        900: "#752C21",
      },
      green: {
        50: "#F9FAF5",
        100: "#EAFAF0",
        200: "#CAF4D9",
        300: "#AAEDC3",
        400: "#6ADF95",
        500: "#2AD167",
        600: "#26BC5E",
        700: "#209D4E",
        800: "#197D3E",
        900: "#156633",
      },
      blue: {
        50: "#F5F9FF",
        100: "#EBF3FE",
        200: "#CEE0FD",
        300: "#B1CDFB",
        400: "#76A8F9",
        500: "#3B82F6",
        600: "#3575DD",
        700: "#2C62B9",
        800: "#234E94",
        900: "#1D4079",
      },
      gray: {
        50: "#FAFAFA",
        100: "#f4f4f4",
        200: "#e4e4e7",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
  },
  plugins: [],
};
