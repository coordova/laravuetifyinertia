<template>
    <!--<Layout>-->
    <Head title="Users" />
    <h1>Users</h1>

    <div class="mt-96">
        <p>The current time is {{ time }}</p>

        <Link
            href="/users"
            class="text-blue-500"
            preserve-scroll
        >
            Refresh
        </Link>
    </div>
    <!--</Layout>-->
</template>

<script setup>
// import {Link} from "@inertiajs/vue3";
// import {Head} from "@inertiajs/vue3";

defineProps({
    'time': String
})

</script>

<style scoped>

</style>
