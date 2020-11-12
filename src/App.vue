<template>
  <div id="app">
    <div class="header-wrapper">
      <header>
        <router-link to="/" id="logo"><img src="@/assets/images/sample.png" alt="いーとっぷ"></router-link>
        <nav>
          <router-link to="/about" class="link">EATOPとは</router-link>
          <router-link to="/event" class="link">イベント情報</router-link>
          <router-link to="/logs" class="link">活動実績</router-link>
          <a href="https://lin.ee/1QVJQLx"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" id="line"></a>
        </nav>
      </header>
    </div>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view/>
    </transition>
    <footer>
      <div id="footer-wrapper"></div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter () {
      this.$root.$emit('triggerScroll')
    }
  }
}
</script>

<style>
body {
  font-family: 'Nasu';
  background-color: #fff5f1;
  margin: 0;
  width: 100%;
}

.header-wrapper {
  height: 70px;
}

header {
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
  padding: 12px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(rgba(255,245,241,1) 0%, rgba(255,245,241,1) 95%, rgba(255,245,241,0) 100%)
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}
</style>
