<template>
<div id="app">
    <nav-main></nav-main>
    <img src="./assets/logo.png">
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

    },
    components: {
        NavMain
    }
}
</script>
<style lang="scss">

@import "assets/styles/global.scss";

body {
    background: $blue;
    color: $text;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
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

a {
    color: #42b983;
}
</style>
