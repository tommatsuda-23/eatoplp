<template>
  <div :style="colorStyle" :class="{ reverse: direction}" class="wrapper">
    <div class="triangle"></div>
    <h4>{{ title }}</h4>
    <p>{{ comment }}</p>
  </div>
</template>

<script>
export default {
  name: 'balloon',
  props: {
    title: {
      required: true,
      default: ''
    },
    comment: {
      required: true,
      default: ''
    },
    bgColor: {
      required: true,
      default: '#555'
    },
    direction: {
      default: false
    }
  },
  computed: {
    colorStyle () {
      return {
        '--color': this.bgColor
      }
    }
  }
}
</script>

<style scoped>
.reverse {
  transform: scale(-1, 1);
}

.wrapper {
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  min-width: 450px;
  max-width: 60%;
  color: black;
  font-size: 16px;
  background: #FFF;
  border-radius: 20px;
}

.triangle {
  width: 20px;
  height: 20px;
  background: transparent;
  position: absolute;
  border-top: 10px solid transparent;
  border-right: 10px solid var(--color);
  border-bottom: 10px solid transparent;
  z-index: 2;
}

h4 {
  font-weight: normal;
  text-align: left;
  font-size: 25px;
  color: white;
  text-align: center;
  background-color: var(--color);
}

p {
  font-size: 17px;
  text-align: left;
  padding: 0 15px;
}
</style>
