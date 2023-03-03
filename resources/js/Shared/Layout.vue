<template>
    <Head>
        <title>My App</title>
        <meta type="description" content="This the description of my app" head-key="description" />
    </Head>
    <v-app>
        <v-app-bar color="grey-lighten-4" density="comfortable" :elevation="2">
            <!--<header class="flex jsutify-between">
                <div class="flex items-center">-->
                    <v-app-bar-title>
                        My App
                    </v-app-bar-title>
                    <p class="text-xs">
                        Welcome Back, {{ username }}
                    </p>
                <!--</div>
            </header>-->


            <template v-slot:append>
                <Nav />
                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
        </v-app-bar>

        <v-main>
            <v-container class="mt-4">
                <slot />
            </v-container>
        </v-main>

        <v-footer>
            <section class="p-6">
                <span>Footer</span>
                <div class="max-w-3xl mx-auto">
                    <iframe height="200px" width="100%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/fd0bd2ba-c553-466c-a060-b144797ce369?dark=false"></iframe>
                </div>
            </section>
        </v-footer>
    </v-app>
</template>

<script>
import Nav from "@/Shared/Nav.vue";
import {Head} from "@inertiajs/vue3";

export default {
    name: "Layout",
    components: { Nav, Head },

    computed: {
        username() {
            return this.$page.props.auth.user.username;
        }
    }
}
</script>

<style scoped>

</style>
