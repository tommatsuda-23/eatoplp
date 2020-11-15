<template>
  <div>
    <transition name="fade" appear>
      <div id="mv">
        <div id="mv-content">
          <div id="icon">
            <img src="../assets/images/top/icon.png" alt="アイコン">
          </div>
          <img src="../assets/images/top/copy.png" alt="食べるという、コミュニケーション" id="copy">
          <h2 id="desc">「まち」の食育プロジェクト<br>EATOP</h2>
        </div>
      </div>
    </transition>
    <div id="contents-container">
      <section id="about">
        <div class="container">
          <h2 id="about-title">共に作り、共に食べる</h2>
          <div id="description">
            <p>EATOP（いーとっぷ）は、大学生、留学生、地域の方々を対象として、<br>「社会性」「芸術性」「国際性」を重視した食育活動を行っています。
            <br>ここでいう食育は、単なる食事ではありません。
            <br><span>「共に作り、共に食べる」</span>という形こそ、本来の食育の形です。</p>
          </div>
          <div id="voices">
            <h3>参加者の声</h3>
            <div class="voice">
              <img src="../assets/images/top/participants/farmer.png" alt="参加者">
              <balloon info="農家 60代" bgColor="#c1e396" title="若者との大事なつながり">
                <p class="comment">日本の学生や海外からの留学生に農作業体験をしてもらい、お礼に料理を振る舞っています。作業も楽になるし、<span>若者との接点もできて</span>、いいことばかりです。</p>
              </balloon>
            </div>
            <div class="voice" id="voiceSecond">
              <img src="../assets/images/top/participants/student.png" alt="参加者">
              <balloon info="大学生 20代" bgColor="#ffc1ae" direction="true" title="色んな料理が食べられる！">
                <p class="comment">大人数でご飯を囲むので、餃子や鍋など、一人暮らしだとなかなか食べることがない料理を食べる機会ができます！なにより、<span>みんなで食べるご飯は美味しい！</span></p>
              </balloon>
            </div>
            <div class="voice">
              <img src="../assets/images/top/participants/foreignStudent.png" alt="参加者">
              <balloon info="留学生 20代" bgColor=" #b5d2ff" title="日本の文化の体験ができる">
                <p class="comment">イベントの中で日本人と、日本の食文化のことだけでなく、自分の国の料理についても話せる。<span>食文化以外の色々な体験</span>ができるのも嬉しい！</p>
              </balloon>
            </div>
          </div>
          <button @click="toAbout" class="btn" id="cursor-about">もっと詳しく</button>
        </div>
      </section>
      <section id="event">
        <div class="container">
          <button @click="toEvent" class="btn">もっと詳しく</button>
        </div>
      </section>
      <section id="logs">
        <div class="container">
          <button @click="toLogs" class="btn" id="cursor-logs">もっと詳しく</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import balloon from '@/components/Balloon'

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
  },
  components: {
    balloon
  }
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-to {
  transition: opacity .3s;
}

* {
  font-family: 'Nasu';
  font-weight: normal;
  margin: 0;
}

body {
  text-align: center;
}

#mv {
  text-align: center;
  height: 500px;
  background-image: url(../assets/images/top/mv.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 5px 5px #fff5f1;
}

#mv-content {
  background: linear-gradient(90deg, rgba(255, 245, 242, 0) 0%, rgba(255, 245, 242, 0.5) 15%, rgba(255, 245, 242, 0.7) 30%, rgba(255, 245, 242, 0.7) 70%, rgba(255, 245, 242, 0.5) 75%, rgba(255, 245, 242, 0) 100%);
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
  margin: 50px 0;
  text-align: center;
}

#about-title {
  font-size: 30px;
  margin-bottom: 30px;
  letter-spacing: 5px;
}

#about-title::before {
  content: '「'
}

#about-title::after {
  content: '」'
}

#about #description {
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  line-height: 40px;
}

#about h3 {
  margin-top: 45px;
  position: relative;
  display: inline-block;
  width: 100%;
}

#about h3::before {
  content: "";
  z-index: -1;
  left: 0;
  position: absolute;
  background: radial-gradient(30% 30% at 50% 50%, #FFCCCC 0%, rgba(255, 204, 204, 0) 100%);
  width: 100%;
  height: 100%;
}

#voices img {
  height: 125px;
}

#voices {
  margin: 0 80px;
}

@media (max-width: 1100px) {
  #voices {
    margin: 0;
  }
}

#voices h3 {
  margin-bottom: 40px;
  font-size: 22px;
  letter-spacing: 3px;
}

.voice {
  display: flex;
  align-items: flex-start;
  margin: 20px;
}

#voiceSecond {
  flex-direction: row-reverse;
}

#second:first-child {
  margin-right: 0;
}

.btn {
  background-color: #ffccccb9;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 0;
  width: 251px;
  height: 50px;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  color: white;
  transition: all .2s;
}

.btn:hover {
  background-color: #ffc5c5;
}

.btn:active {
  background-color: #ffc5c5;
  margin-left: 4px;
  box-shadow: none;
}

#event {
  display: none;
}

#cursor-about {
  cursor: url(../assets/images/top/cursor/about_meat.png), auto;
}

#cursor-logs {
  cursor: url(../assets/images/top/cursor/logs_fish.png), auto;
}

@media (min-width: 1400px) {
    #mv {
        height: 650px;
    }
    #icon img {
        height: 180px;
    }
    #copy {
        height: 180px;
    }
}
</style>
