<template>
  <div id="mask" :style="colorStyle">
    <div id="window">
      <div id="title">
        <h2>{{ title }}</h2>
      </div>
      <div id="content">
        <img :src=imgSrc>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      default: ''
    },
    imgSrc: {},
    text: {},
    color: {}
  },
  computed: {
    colorStyle () {
      return {
        '--color': this.color
      }
    }
  }
}
</script>

<style scoped>
body {
  position: absolute;
  z-index: 2;
}

#mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(85, 85, 85, 0.507);
  position: relative;
}

#window {
  position: absolute;
  margin: 150px auto 0;
}
</style>
