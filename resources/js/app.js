import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

/*-------------------------------------------------*/

// import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'  //

const vuetify = createVuetify({
    components,
    directives,

    /*theme: {
        defaultTheme: 'dark'
    },*/

    /*icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },*/
})

/*-------------------------------------------------*/

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            /*-------------------------*/
            .use(vuetify)
            /*-------------------------*/
            .mount(el)
    },
    progress: {
        // The delay after which the progress bar will appear
        // during navigation, in milliseconds.
        delay: 250,

        // The color of the progress bar.
        color: '#29d',

        // Whether to include the default NProgress styles.
        includeCSS: true,

        // Whether the NProgress spinner will be shown.
        showSpinner: true,
    },
})

