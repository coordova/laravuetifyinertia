<template>
    <nav class="mx-2">
        <ul class="flex space-x-6">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component === 'Users'">Users</NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.component === 'Settings'">Settings</NavLink>
            </li>
            <li>
                <NavLink href="/logout" method="post">Log Out</NavLink>
            </li>
        </ul>
    </nav>

</template>

<script>
import NavLink from "./NavLink.vue";

export default {
    name: "Nav",
    components: { NavLink },

    data: () => ({
        links: [
            'Home',
            'Users',
            'Settings',
            'Logout',
        ],
    }),
}
</script>

<style scoped>

</style>
