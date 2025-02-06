/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/global.css",
  // # Extra HTML attributes which are considered by prettier-plugin-tailwindcss to sort tailwind classes
  // tailwindAttributes: ["myClassList"]
  // # Extra Function names or Template literals where tailwind classes should also be sorted
  // tailwindFunctions: ["clsx"]
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
