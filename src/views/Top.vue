<template>
  <div>
    <div class="mv">
      <div id="filter"></div>
      <img src="@/assets/images/icon.png" alt="いーとっぷ" id="icon">
      <img src="@/assets/images/copy.png" alt="食べるという、コミュニケーション" id="copy">
      <h1 id="sub-copy">「まち」の食育プロジェクト<br>EATOP</h1>
    </div>
    <section id="about">
      <h2>「食」というコミュニケーションを軸とした<br>「まち」対象の食育プロジェクト</h2>
      <button @click="toAbout" class="link">もっと詳しく</button>
    </section>
    <section id="event">
      <h2>今後のイベント情報</h2>
      <button @click="toEvent" class="link">もっと詳しく</button>
    </section>
    <section id="logs">
      <h2>活動実績</h2>
      <button @click="toEvent" class="link">もっと詳しく</button>
    </section>

  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      title: 'TOP PAGE'
    }
  },
  methods: {
    toAbout () {
      this.$router.push('about')
    },
    toEvent () {
      this.$router.push('event')
    },
    toTrace () {
      this.$router.push('trace')
    }
  }
}
</script>

<style scoped>

* {
  text-align: center;
  padding: 0;
  margin: 0;
  font-family: 'Nasu';
  font-weight: normal;
}

.mv {
  background-image: url('../assets/images/mv.png');
  background-size: cover;
  height: 640px;
  width: 1440px;
  text-align: center;
}

#filter {
  z-index: 0;
  background-color: #fff5f2;
  opacity: 0.7;
  width: 580px;
  height: 641px;
  left: 440px;
  position: absolute;
}

#icon {
  position: absolute;
  left: 660px;
  top: 125px;
}

#copy {
  display: block;
  height: 140px;
  padding-top: 310px;
  left: 10px;
  margin: auto;
  position: relative;
}

#sub-copy {
  padding-top: 45px;
  position: relative;
  font-weight: normal;
}

section {
  margin: 30px;
  line-height: 60px;
}

.link {
  background-color: #987284;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 251px;
  height: 50px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}
</style>
