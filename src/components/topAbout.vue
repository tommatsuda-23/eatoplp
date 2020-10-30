<template>
  <section id="about">
    <div class="container">
      <h2>{{ tx1 }}</h2>
      <button @click="toAbout" class="btn">もっと詳しく</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'topabout',
  data () {
    return {
      tx1: '「食」というコミュニケーションを軸とした<br>「まち」対象の食育プロジェクト'
    }
  }
}
</script>

<style scoped>
.container {
  margin: 50px 30px;
}
</style>
