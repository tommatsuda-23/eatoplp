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
        '--y': this.position[1] + '%'
      }
    }
  }
}
</script>

<style scoped>
div img {
  height: 92px;
  position: absolute;
  z-index: 2;
  top: var(--y);
  left: var(--x);
}
</style>
