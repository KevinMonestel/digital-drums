import { Config } from 'tailwindcss'
const formKitTailwind = require('@formkit/themes/tailwindcss');

export default <Config> {
  content: ['./formkit.config.ts'],
  plugins: [
    formKitTailwind
  ]
}