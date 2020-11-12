<template>
  <div id="wrapper">
    <div id="filter"></div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: function () {
    return {
      title: 'ABOUT'
    }
  }
}
</script>

<style scoped>
#wrapper {
  height: 300vh
}
</style>
