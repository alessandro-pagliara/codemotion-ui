// Import styles from JSON
const style = require("./style.json");
const { colors, borderRadius } = style;

// Generate colors shades
const shadeColors = require("color-shader").default;

const shadedColors = {
  ...{
    ...{ primary: colors.primary },
    ...shadeColors({ primary: colors.primary }),
  },

  ...{
    ...{ secondary: colors.secondary },
    ...shadeColors({ secondary: colors.secondary }),
  },

  ...{
    ...{ danger: colors.danger },
    ...shadeColors({ danger: colors.danger }),
  },
};

// Export TailwindCSS configuratiom
/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ["./projects/**/*.{html,ts}"],

  prefix: "code-",

  theme: {
    extend: {
      borderColor: shadedColors,

      borderRadius: {
        DEFAULT: borderRadius,
      },

      colors: shadedColors,

      fill: {
        primary: colors.primary,
        secondary: colors.secondary,
        danger: colors.danger,
      },

      fontFamily: {
        sans: ["Proxima Nova"],
      },

      ringColor: shadedColors,

      stroke: {
        primary: colors.primary,
        secondary: colors.secondary,
        danger: colors.danger,
      },

      transitionProperty: {
        collapse: "max-height, opacity",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],

  corePlugins: {
    preflight: false,
  },
};
