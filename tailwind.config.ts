import { Config } from 'tailwindcss'
const formKitTailwind = require('@formkit/themes/tailwindcss');

export default <Config> {
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        md:'3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
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