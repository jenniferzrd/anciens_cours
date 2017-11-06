<template lang="html">
  <nav>
      <ul>
          <router-link tag="li"
          :to="{ name: 'home', params: {} }">
              home
          </router-link>
          <router-link tag="li"
          :to="{ name: 'about', params: {} }">
              about
          </router-link>
          <router-link tag="li"
          :to="{ name: 'company', params: {} }">
              about ma company
          </router-link>
      </ul>
  </nav>
</template>

<script>

// @import "styles/global.scss"

export default {
}
</script>

<style lang="scss">

@import "../../assets/styles/global.scss";

nav a {
    color: $text !important;
}
</style>
