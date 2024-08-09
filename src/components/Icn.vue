<template>
  <div v-html="svg" class="flex items-center justify-center"  ></div>
</template>

<script>
import icons from '../assets/icon.js'
export default {
    props:['name'],
    computed: {
        svg(){
           let name = this.$_.kebabCase(this.name);
           if (icons[name]) return icons[name];
           return null;
        }
    },
}
</script>

<style>

</style>