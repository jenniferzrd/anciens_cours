<template lang="html">
  <nav class="nav">
      <ul>
          <router-link tag="li"
          exact active-class="is-active"
          :to="{ name: 'home', params: {} }">
              <span>home</span>
          </router-link>


          <router-link tag="li"
          exact active-class="is-active"
          :to="{ name: 'about', params: {} }">
              <span>about</span>
              <ul>
                  <router-link tag="li"
                  exact active-class="is-active"
                  :to="{ name: 'company', params: {} }">
                      <span>company</span>
                  </router-link>
              </ul>
          </router-link>


          <router-link tag="li"
          exact active-class="is-active"
          :to="{ name: 'shop', params: {} }">
              <span>shop</span>
          </router-link>


          <router-link tag="li"
          exact active-class="is-active"
          :to="{ name: 'admin', params: {} }">
              <span>admin</span>
          </router-link>
      </ul>
  </nav>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>

@import "../../assets/styles/global.scss";
nav {
    margin-bottom: 40px;
    background: #9ed3bc;
}
nav ul {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
}

nav li {
    cursor: pointer !important;
}

nav li:hover,
nav li.is-active {
    color: purple;
}


nav li.is-active li:not(.is-active) {
    color: white;
}
</style>
