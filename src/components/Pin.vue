<template>
  <div>
      <img v-bind="{ src: imgSrc, style: coordinate, alt: imgAlt }">
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {},
    position: {
      required: true,
      default: [0, 0]
    },
    imgAlt: {}
  },
  computed: {
    coordinate () {
      return {
        '--x': this.position[0] + '%',
        '--y': this.position[1] * 0.51 + '%'
      }
    }
  }
}
</script>

<style scoped>
div img {
  height: 50px;
  z-index: 2;
  margin-top: var(--y);
  margin-left: var(--x);
  transition: all .5s;
  position: absolute;
}

div img:hover {
  height: 120px;
  margin-top: calc(var(--y) - 70px);
  margin-left: calc(var(--x) - 22px);
  z-index: 5;
}
</style>
