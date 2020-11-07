<template>
  <section id="about">
    <div class="container">
      <button @click="toEvent" class="btn">もっと詳しく</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'topEvent',
  data () {
    return {
    }
  },
  methods: {
    toEvent () {
      this.$router.push('event')
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
