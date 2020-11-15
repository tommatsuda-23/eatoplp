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
  height: 50px;
  position: absolute;
  z-index: 2;
  top: var(--y);
  left: var(--x);
  transition: all .5s;
}

div img:hover {
  height: 120px;
  top: calc(var(--y) - 70px);
  left: calc(var(--x) - 22px)
}
</style>
