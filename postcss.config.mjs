import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import customProperties from "postcss-custom-properties";

const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: [
    autoprefixer(),
    // In production, compile out CSS variables, and minify.
    isProduction ? customProperties({ preserve: false }) : false,
    isProduction ? cssnano({ preset: "default" }) : false,
  ].filter(Boolean),
};
