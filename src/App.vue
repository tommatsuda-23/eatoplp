<template>
  <div id="app">
    <div class="header-wrapper">
      <header>
        <router-link to="/" id="logo"><img src="@/assets/images/top/eatop.png" alt="いーとっぷ"></router-link>
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
html {
  background-image: url(./assets/images/top/background.jpg);
  background-size: contain;
}

body {
  font-family: 'Nasu';
  margin: 0;
  width: 100%;
}

.header-wrapper {
  height: 78px;
}

header {
  position: fixed;
  z-index: 2;
  box-sizing: border-box;
  padding: 12px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(rgba(255,245,241,0.8) 0%, rgba(255,245,241,0.8) 95%, rgba(255,245,241,0) 100%)
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

@media (max-width: 650px) {
  #app {
    display: none;
  }
  body::after {
    content: '申し訳ありませんが、現在モバイル表示には対応しておりません。2021年1月を目処に対応いたしますので、もうしばらくお待ち下さい。';
    margin: 50px;
  }
}
</style>
