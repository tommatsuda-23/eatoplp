<template>
  <div id="wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'logs',
  data: function () {
    return {
      title: '活動実績'
    }
  }
}
</script>

<style scoped>
#wrapper {
  height: 300vh
}
</style>
