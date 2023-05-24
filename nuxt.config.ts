// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt FE10",
      script: [{ src: "https://cdn.tailwindcss.com?plugins=aspect-ratio" }],
    },
  },
});
