<template>

    <div>
        <Component
            v-for="link in links"
            :is="link.url ? 'Link' : 'span'"
            :href="link.url"
            class="px-1"
            v-html="link.label"
            :class="{'text-gray-500': ! link.url, 'font-bold': link.active}"
        />
    </div>

    <!--<v-pagination
        v-model="links"
        class="mt-4"
        :length="lastPage"
    ></v-pagination>-->
</template>

<script>
export default {
    name: "Pagionation",
    props: {
        links: Array
    }
}
</script>

<style scoped>

</style>
