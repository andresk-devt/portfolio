// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    script: [
      {
        src: '/path/to/flowbite/dist/flowbite.min.js',
        async: true,
        defer: true
      }
    ]
  },
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
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/Vue3Lottie.client.ts'],
})