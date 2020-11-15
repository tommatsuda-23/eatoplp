<template>
  <div id="wrapper">
    <transition name="fade">
      <div id="about-mv"></div>
    </transition>
    <section id="introduction">
      <h1 id="about-title">共に作り、共に食べる</h1>
      <div id="description">
        <h3>EATOPの目的</h3>
        <p>ライフスタイルの急激な変化で<br>かつての「誰かとご飯を食べる」という＜共食＞の概念はくずれ、
        <br>一人でご飯を食べる＜孤食＞が広まりつつあります。
        <br>本来食事の場は、たくさんの会話が交わされる、
        <br>感情にあふれた、互いに学び合える場所でした。
        <br>そうした場所が失われそうな今だからこそ、
        <br>もう一度コミュニケーションとしての＜共食＞を大切にしたい。
        <br>そんな思いで、2018年6月から、この活動は始まりました。<br>
        <br>この活動で目指しているのは、「共に作り、共に食べる」ができる、環境作り。<br>では、このEATOPの活動で、誰と誰が「共に作り、食べる」環境を作るのか。</p>
        <br>
        <h3>登場人物は3人です。</h3>
        <p>1人目は、この土地の「食の魅力」をしらない大学生。<br>2人目は、学生とは、繋がりがなかなか生まれない地域の方。<br>3人目は、九州大学（日本）に来てくれた留学生。<br>この三者が、
        <br>「食べる」というコミュニケーションを通して紡ぎ出す物語を楽しみに
        <br>EATOPは活動しています。</p>
        <br>
        <p>「糸島」は豊かな食の宝庫。<br>この場所にあるものの「価値」を存分に生かして。<br>普段あまり交わらないもの同士。<br>美味しい食事を、みんなで美しく作って、食べる。</p>
      </div>
    </section>
    <section id="members">
      <div id="tanaka">
        <div id="tanaka-left">
          <h2>代表</h2>
          <h1>田中  稀ひろ<span> KIHIRO TANAKA</span></h1>
          <p>{{ kingo }}</p>
        </div>
        <div id="tanaka-right">
          <img src="../assets/images/about/tanaka.png" alt="田中 稀ひろ">
        </div>
      </div>
      <div id="sasazu">
        <div id="sasazu-left">
          <img src="../assets/images/about/sasazu.png" alt="笹津 敏靖">
        </div>
        <div id="sasazu-right">
          <h2>創設者</h2>
          <h1>笹津  敏靖<span> TOSHINOBU SASAZU</span></h1>
          <p>{{ kingo }}</p>
        </div>
      </div>
    </section>
    <section>
      <h1 id="title">参加者の声</h1>
      <div id="voice">
        <div class="participant">
          <img src="../assets/images/about/participant1.png" alt="地域の方々">
          <h2>地域の方々</h2>
          <p>{{ kingo }}</p>
        </div>
        <div class="participant">
          <img src="../assets/images/about/participant2.png" alt="地域の方々">
          <h2>大学生</h2>
          <p>{{ kingo }}</p>
        </div>
        <div class="participant">
          <img src="../assets/images/about/participant3.png" alt="地域の方々">
          <h2>留学生</h2>
          <p>{{ kingo }}</p>
        </div>
      </div>
    </section>
    <section>
      <h2>パートナー</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      kingo: 'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
    }
  }
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.8s;
}

* {
  font-family: 'Nasu';
  font-weight: normal;
  margin: 0;
}

body {
  text-align: center;
}

#about-mv {
  margin: 0 auto;
  height: 500px;
  width: 90%;
  background-image: url(../assets/images/about/slider1.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 5px 5px #fff5f1;
}

@media (min-width: 1400px) {
    #about-mv {
        height: 650px;
    }
}

#introduction {
  margin: 40px 0 70px;
}

#about-title {
  font-size: 30px;
  margin-bottom: 30px;
  letter-spacing: 5px;
  text-align: center;
}

#about-title::before {
  content: '「'
}

#about-title::after {
  content: '」'
}

#description {
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}

#description h3 {
  color: #74d85b;
}

#tanaka {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 150px;
}

#tanaka-left {
  width: 50%;
}

#tanaka-right > img {
  width: 100%;
}

#sasazu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px 0 50px;
}

#sasazu-left > img {
  width: 100%;
}

#sasazu-right {
  width: 50%;
}

span {
  font-size: 0.6em;
}

#title {
  font-size: 30px;
  margin-bottom: 50px;
  letter-spacing: 5px;
  text-align: center;
}

#voice {
  display: flex;
  margin: 0px 100px 0px;
  justify-content: space-around;
}

.participant {
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.participant > img {
  width: 100%;
  margin-bottom: 20px;
}

.participant > h2 {
  margin-bottom: 10px;
}

#partner {
  display: flex;
  justify-content: center;
}
</style>
