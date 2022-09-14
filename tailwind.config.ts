import { Config } from 'tailwindcss'
const formKitTailwind = require('@formkit/themes/tailwindcss');

export default <Config> {
  theme: {
    darkSelector: '.dark-mode'
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  content: ['./formkit.config.ts'],
  plugins: [
    formKitTailwind,
  ],
  darkMode: 'class'
}