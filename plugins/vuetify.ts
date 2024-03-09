import { createVuetify } from 'vuetify';
import { md3 } from "vuetify/blueprints";

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        blueprint: md3,
        ssr: true
    });

    app.vueApp.use(vuetify);
});
