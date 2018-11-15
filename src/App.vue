<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        <router-link to="/HelloWorld">GO to HelloWorld</router-link>
        <router-link to="/HelloPaul">GO to Calculate</router-link>
        <router-link to="/HelloVue">GO to Vue</router-link>
      </p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

</style>
