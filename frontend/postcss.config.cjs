// Se requiere explícitamente el plugin de PostCSS de Tailwind, no el paquete principal.
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
