<template>
    <v-app>
        <v-container>
            <h1>Hola, {{ name }}</h1>

        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "Welcome",
    props: {
        name: String,
    }
}
</script>

<style scoped>

</style>
