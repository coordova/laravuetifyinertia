<template>
    <Head title="Users" />
    <h1 class="font-bold text-3xl">Users</h1>

    <v-table>
        <thead>
        <tr>
            <th class="text-left">
                Nombre
            </th>
            <th class="text-left">
                Email
            </th>
            <th class="text-left">
                Action
            </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="user in users.data"
            :key="user.id"
        >
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
                <Link :href="`/users/${user.id}/edit`" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                </Link>
            </td>
        </tr>
        </tbody>
    </v-table>

    <Pagination :links="users.links" class="mt-6" />

    <!--<ul>
        <li v-for="user in users.data" :key="user.id" v-text="user.name"></li>
    </ul>-->

</template>

<script setup>
// import {Link} from "@inertiajs/vue3";
// import {Head} from "@inertiajs/vue3";

import Pagination from "@/Shared/Pagination.vue";

defineProps({
    'users': Object
})

</script>

<style scoped>

</style>
