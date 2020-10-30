<template>
  <section id="logs">
    <div class="container">
      <button @click="toAbout" class="btn">もっと詳しく</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'topabout',
  data () {
    return {
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
