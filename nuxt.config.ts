// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@formkit/nuxt', 'nuxt-icon'],
  formkit: {
    configFile: './formkit.config.ts'
  }
})
