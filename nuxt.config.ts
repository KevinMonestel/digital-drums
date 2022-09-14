// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/global.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@formkit/nuxt', 'nuxt-icon', '@nuxtjs/color-mode'],
  formkit: {
    configFile: './formkit.config.ts'
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  }
})
