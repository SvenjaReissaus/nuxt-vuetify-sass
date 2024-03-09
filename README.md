# Nuxt 3 with Vuetify and SASS variables

This project is to demonstrate the issues present when using Nuxt 3 and Vuetify with SASS.

## How to

This project was created following the installation instructions of [Vuetify 3](https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3), consisting of the following commands:

```
$ npx nuxi init nuxt-vuetify-sass
$ yarn add -D vuetify vite-plugin-vuetify sass
$ yarn
```

> Please note SASS was added as an extra dependency during project creation.

Next, [nuxt.config.ts](nuxt.config.ts) was modified to include Vuetify as a plugin:

```typescript
import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true,
          styles: {
            configFile: "assets/settings.scss" // This file was creating during the process
          }
        }))
      })
    }
  ]
})
```

Minimal SASS files to modify Vuetify 3's variables were added in the [assets](assets/) folder;

```sass
// settings.sass
@use "vuetify/settings" with (
    $color-pack: false // disables material colors generation
);
```

```sass
// main.sass
@use "vuetify"; // imports vuetify sass files
```

As well as instructing Nuxt to use the [main.sass](assets/main.sass) file in order to globally use the Vuetify styles.

Added Vuetify's minimal app to the [app.vue](app.vue) file:

```vue
<template>
  <v-app>
    <v-main>
      <nuxt-page />
    </v-main>
  </v-app>
</template>
```

And lastly, created an [index](pages/index.vue) under [pages](pages/) file that simply shows a card:

```vue
<template>
  <v-card title="Hello world" />
</template>
```

## Testing

Running the command `yarn dev` and navigating to [https://localhost:3000](https://localhost:3000) once Nuxt Nitro server has been built (which takes about a minute).

Shows the following warnings in console:

```
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VApp/VApp.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VApp/VApp.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VApp/VApp.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VApp/VApp.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VMain/VMain.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VMain/VMain.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VMain/VMain.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VMain/VMain.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VCard/VCard.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VCard/VCard.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VCard/VCard.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VCard/VCard.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VAvatar/VAvatar.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VAvatar/VAvatar.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VAvatar/VAvatar.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VAvatar/VAvatar.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VIcon/VIcon.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VIcon/VIcon.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VIcon/VIcon.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VIcon/VIcon.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VImg/VImg.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VImg/VImg.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VImg/VImg.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VImg/VImg.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VResponsive/VResponsive.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VResponsive/VResponsive.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VResponsive/VResponsive.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VResponsive/VResponsive.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VProgressLinear/VProgressLinear.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VProgressLinear/VProgressLinear.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VProgressLinear/VProgressLinear.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:components/VProgressLinear/VProgressLinear.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:directives/ripple/VRipple.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:directives/ripple/VRipple.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:directives/ripple/VRipple.sass"
[Vue Router warn]: No match found for location with path "/_nuxt/%EF%BF%BDplugin-vuetify:directives/ripple/VRipple.sass"
```

## Other

The key to the reproduction is to use Vuetify SASS files (by using @use "vuetify" in a sass file) rather than using their pre-built css files ("vuetify/styles") and configuring any SASS variables under "vuetify/settings" to setup Vuetify to use those. If the project is using pages, then the previous warnings will show up.