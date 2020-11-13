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
    <router-view/>
    <footer>
      <div id="footer-wrapper">
        <div id="footer-left">
          <img id="footer-icon" src="@/assets/images/icon.png" alt="いーとっぷろご">
        </div>
        <div id="footer-right">
          <div id="footer-right-top">
            <router-link to="/" id="first"><img src="@/assets/images/sample.png" alt="いーとっぷ" id="footer-logo"></router-link>
            <div id="flexmenu">
              <font-awesome-icon :icon="['fab', 'twitter']" class="sns-icon" />
              <font-awesome-icon :icon="['fab', 'facebook']" class="sns-icon" />
              <font-awesome-icon :icon="['fab', 'instagram']" class="sns-icon" />
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

.header-wrapper {
  height: 94px;
}

header {
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
  padding: 20px;
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

</style>
