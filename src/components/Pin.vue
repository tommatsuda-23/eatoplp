<template>
  <div>
      <img v-bind="{ src: imgSrc, style: coordinate, alt: imgAlt}">
  </div>
</template>

<script>
export default {
  props: {
    name: {},
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
    },
    imgSrc () {
      var src = '../assets/images/logs/pins/' + this.name
      return {
        src
      }
    }
  }
}
</script>

<style scoped>
div {
  position: absolute;
  z-index: 2;
  top: var(--y);
  left: var(--x);
}
</style>
