// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_main.scss";',
        },
      },
    },
  },
  modules: ['nuxt-icon'],
  plugins: ['~/plugins/Vue3Lottie.client.ts'],
})