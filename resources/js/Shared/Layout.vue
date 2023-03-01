<template>
    <v-app>
        <v-app-bar color="grey-lighten-4" density="comfortable" :elevation="2">
            <v-app-bar-title>My App</v-app-bar-title>
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
    components: { Nav }
}
</script>

<style scoped>

</style>
