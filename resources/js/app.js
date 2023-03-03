import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import Layout from "@/Shared/Layout.vue";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
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
    /*
    // Default inertia code
    resolve: name => {
        const pages = import.meta.glob('./Pages/!**!/!*.vue', {eager: true})

        return pages[`./Pages/${name}.vue`]
    },
    */

    /*
    // Option 1 for Composition API using Vite (ver comentarios) src: https://laracasts.com/series/build-modern-laravel-apps-using-inertia-js/episodes/13
    resolve: name => {
        let page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/!**!/!*.vue', { eager: true })
        );
        page.then((module) => {
            module.default.layout ??= Layout;
        });
        return page;

    },*/

    // Option 2 for Composition API using Vite (ver comentarios) src: https://laracasts.com/series/build-modern-laravel-apps-using-inertia-js/episodes/13
    resolve: async (name) => {
        // const { default: component } = await import(`./Pages/${name}.vue`);
        const component = (await import(`./Pages/${name}.vue`)).default;
        component.layout ??= Layout;
        return component;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
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

    // titulo del header de la app dinamicamente
    title: (title) => `Inertia App - ${title}`,
})

