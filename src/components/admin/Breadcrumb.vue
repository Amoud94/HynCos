<template>
    <div class="flex flex-col">
        <div class="md:flex hidden text-lg font-bold text-[#03A9F4]">
            {{ crumbsFromStore[crumbsFromStore.length - 1] ? crumbsFromStore[crumbsFromStore.length - 1].text : '' }}
        </div>
        <nav class="flex" aria-label="Breadcrumb" v-if="crumbsFromStore.length > 1">
            <ol class="inline-flex items-center md:space-x-1">
                <RouterLink v-for="(itm, index) in crumbsFromStore" :key="index"
                    :to="itm.to != null ? itm.to : ''"
                    :is="(itm.to === null || crumbsFromStore.length < 2 || (itm.to === null || index === crumbsFromStore.length - 1)) ? 'span' : 'router-link'">
                    <div class="flex items-center " @click="setLoading(itm)">
                        <a class="text-xs md:text-lg font-medium md:text-gray-700 text-[#03A9F4]" :class="(itm.to === null || crumbsFromStore.length <= 2 || index === crumbsFromStore.length - 1) ? '' : 'hover:text-[#03A9F4]'">
                            {{ itm.text }} </a>
                        <svg v-if="index < crumbsFromStore.length - 1"
                            class="w-5 h-4 md:w-6 md:h-6 md:text-gray-400 text-[#03A9F4]" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </RouterLink>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'breadcrumb',
    computed: {
        crumbs: function () {
            return this.$route?.meta?.breadCrumb
        },
        route: function () {
            return this.$route
        },
        crumbsFromStore() {
            return this.$store.state.breadCrumbs
        }
    },
    methods:{
        setLoading(itm){
          if(itm.to != null) this.$store.dispatch('setLoadingValue', true)
        }
    }
}
</script>

<style></style>