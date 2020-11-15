<template>
  <div id="app">
    <div class="header-wrapper">
      <header>
        <img src="@/assets/images/top/eatop.png" alt="いーとっぷ" id="logo" @click="toTop">
        <nav>
          <router-link to="/about" class="link" id="cursor-about">EATOPとは</router-link>
          <router-link to="/event" class="link" id="cursor-event">イベント情報</router-link>
          <router-link to="/logs" class="link" id="cursor-logs">活動実績</router-link>
          <a href="https://lin.ee/1QVJQLx"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" id="line"></a>
        </nav>
      </header>
    </div>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view/>
    </transition>
    <footer>
      <div id="footer-wrapper">
        <div id="footer-left">
          <img id="footer-icon" src="@/assets/images/top/icon.png" alt="いーとっぷろご">
        </div>
        <div id="footer-right">
          <div id="footer-right-top">
            <div id="first" @click="toTop"><img src="@/assets/images/top/eatop.png" alt="いーとっぷ" id="footer-logo"></div>
            <div id="flexmenu">
              <a href="https://twitter.com/Eatop_musha"><font-awesome-icon :icon="['fab', 'twitter']" class="sns-icon" /></a>
              <a href="https://www.facebook.com/mushamusha.eatop"><font-awesome-icon :icon="['fab', 'facebook']" class="sns-icon" /></a>
              <a href="https://www.instagram.com/mushamushaeatop/"><font-awesome-icon :icon="['fab', 'instagram']" class="sns-icon" /></a>
            </div>
          </div>
          <div id="footer-right-bottom">
            <router-link to="" class="link2">コロナ対策について</router-link>
            <router-link to="" class="link2 footer-link">お問い合わせ</router-link>
            <router-link to="" class="link2">EN</router-link>
            <a class="link2">/</a>
            <router-link to="" class="link2">JP</router-link>
          </div>
        </div>
      </div>
      <div id="copyright">
        <a>Copyright © Eatop All rights reserved.</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter () {
      this.$root.$emit('triggerScroll')
    },
    toTop () {
      if (this.$route.path === '/') {
        this.$router.go({ name: 'top' })
      } else {
        this.$router.push({ name: 'top' })
      }
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
  z-index: 3;
  box-sizing: border-box;
  padding: 12px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(rgba(255,245,241,0.8) 0%, rgba(255,245,241,0.8) 95%, rgba(255,245,241,0) 100%)
}

#logo {
  margin: auto 0;
  cursor: pointer;
  padding: 10px;
}

.link {
  text-decoration: none;
  color: black;
  padding: 20px 15px;
  display: inline-block;
}

.link:hover {
  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 190, 190, 0.3) 0%, rgba(255, 190, 190, 0.2) 58%, rgba(255, 190, 190, 0) 100%);
}

nav {
  display: flex;
  justify-content: space-between;
}

#line {
  height: 30px;
  padding-top: 13px;
  cursor: url(./app/line_brown.png), auto;
}

#cursor-about {
  cursor: url(./app/about_meat.png), auto;
}

#cursor-event {
cursor: url(./app/event_vegit.png), auto;
}

#cursor-logs {
  cursor: url(./app/logs_fish.png), auto;
}

footer {
  width: 100%;
}

#footer-wrapper {
  margin: 100px 100px 0;
}

#footer-left {
  float: left;
  width: 30%;
}

#footer-icon {
  height: 200px;
}

#footer-right {
  float: right;
  width: 70%;
}

#footer-right-top {
  min-width: 450px;
  max-width: 90%;
  height: 100px;
  border-bottom: solid 1px #555;
  display: flex;
  align-items: flex-end;
  padding: 0 15px 15px;
}

#first {
  margin-left: 20px;
  margin-right: auto;
  cursor: pointer;
}

#flexmenu {
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
}

#footer-right-bottom {
  min-width: 450px;
  max-width: 90%;
  height: 100px;
  padding: 15px 15px 0px;
  display: flex;
  justify-content: center;
}

#copyright {
  width: 100%;
}

#copyright a {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.sns-icon {
  color: #333;
  font-size: 2em;
  margin-left: 15px;
}

.link2 {
  font-size: 15px;
  text-decoration: none;
  color: black;
  display: inline-block;
}

.footer-link {
  margin-right: 15px;
  margin-left: 15px;
}

.link2:hover {
  cursor: pointer;
  text-decoration: underline;
}

#id {
  height: 70%;
}

@media (max-width: 800px) {
  #footer-wrapper {
    margin: 50px 50px;
  }
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
  body {
    padding: 50px;
  }
  body::after {
    content: '申し訳ありませんが、現在モバイル表示には対応しておりません。2021年1月を目処に対応いたしますので、もうしばらくお待ち下さい。';
  }
}
</style>
