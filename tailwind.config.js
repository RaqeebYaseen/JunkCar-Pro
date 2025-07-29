/** @type {import('tailwindcss').Config} */
// const themeColors = require('./src/lib/utils/theme_colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
//  theme: {
//     extend: {
//       colors: {
//         primary: themeColors.primary,
//         secondary: themeColors.secondary,
//         accent: themeColors.accent,
//         darkText: themeColors.textDark,
//         background: themeColors.background,
//       },
//     },
  // },
  plugins: [],
}
