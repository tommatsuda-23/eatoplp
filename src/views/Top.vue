<template>
  <div>
    <transition name="fade" appear>
      <div id="mv">
        <div id="mv-content">
          <div id="icon">
            <img src="../assets/images/icon.png" alt="アイコン">
          </div>
          <img src="../assets/images/copy.png" alt="食べるという、コミュニケーション" id="copy">
          <h2 id="desc">「まち」の食育プロジェクト<br>EATOP</h2>
        </div>
      </div>
    </transition>
    <div id="contents-container">
      <section id="about">
        <div class="container">
          <h2>共に作り、共に食べる</h2>
          <div id="description">
            <p>EATOP（いーとっぷ）は、大学生、留学生、地域の方々を対象として、<br>「社会性」「芸術性」「国際性」を重視した食育活動を行っています。
            <br>ここでいう食育は、単なる食事ではありません。
            <br><span>「共に作り、共に食べる」</span>という形こそ、<br>本来の食育の形です。</p>
          </div>
          <button @click="toAbout" class="btn">もっと詳しく</button>
        </div>
      </section>
      <section id="event">
        <div class="container">
          <button @click="toEvent" class="btn">もっと詳しく</button>
        </div>
      </section>
      <section id="logs">
        <div class="container">
          <button @click="toLogs" class="btn">もっと詳しく</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  methods: {
    toAbout () {
      this.$router.push('about')
    },
    toEvent () {
      this.$router.push('event')
    },
    toLogs () {
      this.$router.push('logs')
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

* {
  font-family: 'Nasu';
  font-weight: normal;
  text-align: center;
  margin: 0;
}

#mv {
  margin-top: 83px;
  height: 500px;
  text-align: center;
  background-image: url(../assets/images/mv.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 5px 5px #fff5f1;
}

#mv-content {
  background: linear-gradient(90deg, rgba(255, 245, 242, 0) 0%, rgba(255, 245, 242, 0.5) 15%, rgba(255, 245, 242, 0.8) 30%, rgba(255, 245, 242, 0.8) 70%, rgba(255, 245, 242, 0.5) 75%, rgba(255, 245, 242, 0) 100%);
  height: 100%;
  width: 85%;
  min-width: 300px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#icon img {
  height: 130px;
}

#copy {
    object-fit: contain;
    height: 120px;
}

#desc {
    font-weight: normal;
    margin: 20px 0;
    color:  rgba(0, 0, 0, 0.692);
}

.container {
  margin: 50px 30px;
}

#about h2 {
  font-size: 30px;
  margin-bottom: 30px;
}

#about #description {
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  line-height: 40px;
}

.btn {
  background-color: #ffc165;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 0;
  width: 251px;
  height: 50px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}

#event {
  display: none;
}

@media (min-width: 1400px) {
    #mv {
        height: 700px;
    }
    #icon img {
        height: 180px;
    }
    #copy {
        height: 180px;
    }
}

</style>
