<template lang="html">
    <div class="">
        <h1>{{ title }}</h1>
        <pipo></pipo>
        <router-view></router-view>
    </div>
</template>

<script>
import Pipo from "../shared/Pipo.vue";

export default {
    data() {
        return {
            title: "About"
        }
    },
    components: {
        Pipo
    }
}
</script>

<style lang="css">
</style>
