<template lang="html">
<div id="app" :class="{shop: isShopTheme()}">

    <nav-main></nav-main>

    <router-view></router-view>

</div>
</template>

<script>

import NavMain from "./components/shared/MainNav.vue";

export default {
    name: 'app',
    data() {
        return {
            todos: [],
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        isShopTheme() {
            // console.log(this.$route);
            return this.$route.name === "shop";
        }
    },
    components: {
        NavMain
    },
    created() {
        // utilisation de jQuery
        console.log($("body"));
    }
}

</script>

<style lang="scss">

@import "assets/styles/global.scss";

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: Avenir;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
    text-align: center;
    min-height: 100vh;
    background: $blue;
    color: $text;
}

#app.shop {
    color: #c6c3c3;
    background: #f7f9fe;
}

.page {
    height: 150vh;
}

#macible {
    background: blueviolet;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}


</style>
