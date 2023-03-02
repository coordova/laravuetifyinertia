<template>
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
            <span>Footer</span>
        </v-footer>
    </v-app>
</template>

<script>
import Nav from "@/Shared/Nav.vue";
export default {
    name: "Layout",
    components: { Nav },

    computed: {
        username() {
            return this.$page.props.auth.user.username;
        }
    }
}
</script>

<style scoped>

</style>
