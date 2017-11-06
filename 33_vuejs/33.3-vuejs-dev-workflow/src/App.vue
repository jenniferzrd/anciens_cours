<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
        ETAPE 1 : (sudo) npm install -g vue-cli
    </p>
    <p>
        Créer un dossier pour le projet et naviguer dedans
    </p>
    <p>
        ETAPE 2: vue init webpack-simple
    </p>
    <p>
        ETAPE 3: (sudo) npm install
    </p>
    <p>
        ETAPE 4 : (sudo) npm run dev
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
