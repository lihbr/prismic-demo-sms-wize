/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  target: "ie11",
  prefix: "",
  important: false,
  separator: ":",
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    fontFamily: {
      main: ["Gotham Rounded", "Rubik", "sans-serif"]
    },
    lineHeight: {
      snug: 1.3
    },
    colors: {
      black: {
        default: "#111111"
      },
      white: {
        default: "#fefefe"
      },
      cream: {
        default: "#fff8f3"
      },
      navy: {
        default: "#333665"
      },
      cyan: {
        default: "#09bdeb"
      }
    }
  },
  variants: {},
  plugins: [
    ({ addBase, addUtilities, theme }) => {
      addBase({
        strong: { fontWeight: theme("fontWeight.bold") }
      });

      const objectFitUtilities = {
        ".object-cover": {
          objectFit: "cover",
          fontFamily: '"object-fit: cover"' // eslint-disable-line
        },
        ".object-contain": {
          objectFit: "contain",
          fontFamily: '"object-fit: contain"' // eslint-disable-line
        }
      };
      addUtilities(objectFitUtilities, {
        variants: ["responsive"]
      });
    }
  ]
};
