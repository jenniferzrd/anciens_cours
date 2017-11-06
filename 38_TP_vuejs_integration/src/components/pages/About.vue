<template lang="html">
    <div class="page">
        <h1>{{ title }}</h1>
        <pipo></pipo>
        <router-view></router-view>
    </div>
</template>

<script>
import Pipo from "../shared/Pipo.vue";
import Beauty from "../beauty/Beauty.vue";

export default {
    data() {
        return {
            title: "About"
        }
    },
    components: {
        Beauty,
        Pipo
    }
}
</script>

<style lang="css" scoped>
</style>
