<template>
  <section id="about">
    <div class="container">
      <h2>{{ tx1 }}<br>{{ tx2 }}</h2>
      <button @click="toAbout" class="btn">もっと詳しく</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'topAbout',
  data () {
    return {
      tx1: '「食」というコミュニケーションを軸とした',
      tx2: '「まち」対象の食育プロジェクト'
    }
  },
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

.container {
  margin: 50px 30px;
}
</style>
