<template>
  <div id="app">
    <div class="back"/>
    <header>
      <router-link to="/" id="logo"><img src="@/assets/images/sample.png" alt="いーとっぷ"></router-link>
      <nav>
        <router-link to="/about" class="link">EATOPとは</router-link>
        <router-link to="/event" class="link">イベント情報</router-link>
        <router-link to="/logs" class="link">活動実績</router-link>
        <a href="https://lin.ee/1QVJQLx"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" id="line"></a>
      </nav>
    </header>
    <router-view/>
    <footer>
      <div id="footer-wrapper"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: 'Nasu';
  background-color: #fff5f1;
  margin: 0;
  width: 100%;
}

.back {
  height: 80px;
}

header {
  position: fixed;
  top: 0;
  width: 96%;
  height: 45px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff5f1;
}

#logo {
  margin: auto 0;
}

.link {
  text-decoration: none;
  color: black;
  padding: 15px;
  display: inline-block;
}

nav {
  display: flex;
  justify-content: space-between;
}

#line {
  height: 30px;
  padding-top: 13px;
}

footer {
  width: 100%;
  height: 350px;
}

</style>
