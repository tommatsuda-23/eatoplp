<template>
  <div id="app">
    <header>
      <router-link to="/" id="logo"><img src="@/assets/images/EATOP.png" alt="いーとっぷ"></router-link>
      <nav>
        <router-link to="/about" class="link">EATOPとは</router-link>
        <router-link to="/event" class="link">イベント情報</router-link>
        <router-link to="/logs" class="link">活動実績</router-link>
        <a href="https://lin.ee/1QVJQLx"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" id="line"></a>
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

<style>
body {
  font-family: 'Nasu';
  background-color: #fff5f1;
  margin: 0;
  width: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
  margin-top: 13px;
}

</style>
