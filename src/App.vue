<template>
  <div id="app">
    <header>
      <div id="header-left">
        <router-link to="/" class="link"><img src="@/assets/images/EATOP.png" alt="いーとっぷ"></router-link>
      </div>
      <nav>
        <router-link to="/about" class="link">Eatopとは</router-link>
        <router-link to="/event" class="link">イベント情報</router-link>
        <router-link to="/logs" class="link">活動実績</router-link>
      </nav>
    </header>
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
  background-color: #fff5f1;
  padding: 0;
  margin: 0;
  width: 1440px;
  height: 5000px;
}

header {
  position: fixed;
  z-index: 1;
  height: 100px;
  width: 1440px;
  background-color: #fff5f1;
}

#header-left {
  float: left;
  padding-top: 15px;
}

nav {
  display: flex;
  justify-content:  flex-end;
  align-items: center;
  padding-top: 1rem;
}

.link {
  text-decoration: none;
  font-family: 'Nasu';
  display: inline-block;
  margin: 0 15px;
  padding: 15px 40px;
  color: black;
  font-size: 20px;
}

</style>
