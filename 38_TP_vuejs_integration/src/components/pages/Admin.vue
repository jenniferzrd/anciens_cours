<template>
    <section class="page">
        <h1>my @dmin</h1>
        <testimony-tabler></testimony-tabler>
        <testimony-form></testimony-form>
    </section>
</template>
<script>
import TestimonyForm from "../testimony/Form.vue";
import TestimonyTabler from "../testimony/Tabler.vue";

export default {
    components: {
        TestimonyForm,
        TestimonyTabler
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style scoped>

</style>
