<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <router-link to="/" class="link">TOP PAGE</router-link>
      <router-link to="/about" class="link">Eatopとは</router-link>
      <router-link to="/event" class="link">イベント</router-link>
      <router-link to="/trace" class="link">活動実績</router-link>
    </nav>
    <hr>
    <h2>This page is...</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content:  center;
  align-items: center;
  margin: 40px 0;
}

.link {
  text-decoration: none;
  display: block;
  float: left;
  margin: 0 15px;
  padding: 15px 40px;
  color: #2c3e50;
  font-size: 20px;
  background-color: #41B883;
  border-radius: 4px;
}
</style>
