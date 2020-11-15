<template>
  <div id="wrapper">
    <transition name="fade">
      <div id="about-mv"></div>
    </transition>
    <div>
     <br><br>
     <h1 id="about-title">共に作り、共に食べる</h1>
     <div id="description">
       <h3>EATOPの目的</h3>
       <p>ライフスタイルの急激な変化で<br>かつての「誰かとご飯を食べる」という＜共食＞の概念はくずれ<br>一人でご飯を食べる＜孤食＞が広まりつつあります。
       <br>本来食事の場は、たくさんの会話が交わされる、感情にあふれた、
       <br>互いに学び合える場所でした。
       <br>そうした場所が失われそうな今だからこそ、もう一度コミュニケーションとしての＜共食＞を大切にしたい。
       <br>そんな思いで、2018年6月から、この活動は始まりました。
       <br>この活動で目指しているのは、「共に作り、共に食べる」ができる、環境作り。<br>では、このEATOPの活動で、誰と誰が「共に作り、食べる」環境を作るのか。</p>
       <br>
       <h3>登場人物は3人です。</h3>
       <p>1人目は、この土地の「食の魅力」をしらない大学生。<br>2人目は、学生とは、繋がりがなかなか生まれない地域の方。<br>3人目は、九州大学（日本）に来てくれた留学生。<br>この三者が「食べる」というコミュニケーションを通して、紡ぎ出す物語を楽しみに活動しています。</p>
       <br>
       <p>「糸島」は豊かな食の宝庫。<br>この場所にあるものの「価値」を存分に生かして。<br>普段あまり交わらないもの同士。<br>美味しい食事を、みんなで美しく作って、食べる。</p>
     </div>
     <div id="tanaka">
      <div id="tanaka-left">
        <h2>代表</h2>
        <h1>田中  稀ひろ<span> KIHIRO TANAKA</span></h1>
        <p>2代目代表、共創学部3年<br>アットホームで居心地のいい空間作りのできるEATOPの仲間と活動を誇りに思ってます！<br>今年はコロナの影響で思うように活動ができていない面も多いですが、今後もこの活動を広げていくために代表を務め上げたいです！</p>
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
     <div>
       <h1 id="title">参加者の声</h1>
     </div>
     <div id="voice">
       <div class="participant">
        <img src="../assets/images/about/participant1.png" alt="地域の方々">
        <h2>地域の方々</h2>
        <p>日本の学生や海外からの留学生に農作業体験をしてもらい、お礼に料理を振る舞っています。作業も楽になるし、若者との接点もできて、いいことばかりです。</p>
       </div>
       <div class="participant">
        <img src="../assets/images/about/participant2.png" alt="地域の方々">
        <h2>大学生</h2>
        <p>大人数でご飯を囲むので、餃子や鍋など、一人暮らしだとなかなか食べることがない料理を食べる機会ができます！なにより、みんなで食べるご飯は美味しい！</p>
       </div>
       <div class="participant">
        <img src="../assets/images/about/participant3.png" alt="地域の方々">
        <h2>留学生</h2>
        <p>イベントの中で日本人と、日本の食文化のことだけでなく、自分の国の料理についても話せる。食文化以外の色々な体験ができるのも嬉しい！</p>
       </div>
     </div>
     <div>
       <h1 id="title">パートナー</h1>
     </div>
     <div id="partner">
       <p>Coming Soon !!</p>
       <p>Coming Soon !!</p>
       <p>Coming Soon !!</p>
     </div>
    </div>
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

#tanaka-left > p {
  font-size: 15px;
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

#sasazu-right > p {
  font-size: 15px;
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

.participant > p {
  font-size: 15px;
  text-align: center;
}

#partner {
  height: 100px;
  display: flex;
  justify-content: space-around;
}

#partner > p {
  font-size: 2em;
}

</style>
