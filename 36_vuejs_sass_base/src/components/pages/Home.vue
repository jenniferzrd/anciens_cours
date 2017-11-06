<template lang="html">
    <div class="">
        <h1>{{ title }}</h1>
        <pipo :content="contentPipo"></pipo>
        <pipo :content="warning"></pipo>
        <pipo :content="success"></pipo>
    </div>
</template>

<script>
import { eventBus } from "../../main";
import Pipo from "../shared/Pipo.vue";

export default {
    data() {
        return {
            contentPipo: "yo je suis le contenu de pipo et j'arrive du component Home",
            warning: "attention !!!",
            success: "great, u got it !!!",
            title: "Home"
        }
    },
    components: {
        Pipo
    },
    created() {
        eventBus.$on("dataDispatched", (message) => {
            console.log(message);
        });
    }
}
</script>

<style lang="scss">
$colorText: silver;

h1 {
    color: $colorText;
}
</style>
