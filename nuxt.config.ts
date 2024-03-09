import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  css: [
    "~/assets/main.scss"
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true,
          styles: {
            configFile: "assets/settings.scss"
          }
        }))
      })
    }
  ],
  devtools: { enabled: true },
  // TODO: Remove the comments to get rid of "missing source files"
  // sourcemap: false
})
