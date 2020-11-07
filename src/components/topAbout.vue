<template>
  <section id="about">
    <div class="container">
      <h2>「食」というコミュニケーションを軸とした<br>「まち」対象の食育プロジェクト</h2>
      <p>EATOPは「社会性」「芸術性」「国際性」を重視した、<br>大学生、留学生、地域の方々を対象とした食育活動を行っています。
      <br>ここでいう食育は、今までの、<br>「食　=　栄養」という意味ではありません。
      <br><span>「共に作り、共に食べる」</span>という形こそ、<br>本来の食育の形です。</p>
      <button @click="toAbout" class="btn">もっと詳しく</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'topAbout',
  methods: {
    toAbout () {
      this.$router.push('about')
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Nasu';
  font-weight: normal;
  text-align: center;
  margin: 0;
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

.container {
  margin: 50px 30px;
}
</style>
