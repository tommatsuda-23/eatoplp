<template>
  <div id="wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'event',
  data: function () {
    return {
      title: 'COMING SOON!'
    }
  }
}
</script>

<style scoped>
#wrapper {
  height: 80vh;
  text-align: center;
  font-family: 'Nasu'
}
</style>
