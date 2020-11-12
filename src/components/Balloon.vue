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

.reverse h4,
.reverse p {
  transform: scale(-1, 1)
}

.wrapper {
  position: relative;
  display: inline-block;
  min-width: 450px;
  max-width: 60%;
  font-size: 16px;
  border-radius: 20px;
  background: linear-gradient(var(--color) 15%, #fff 16%);
}

.triangle {
  top: calc(50% - 15px);
  width: 20px;
  height: 40px;
  left: -34px;
  box-sizing: border-box;
  background: transparent;
  position: absolute;
  border-top: 20px solid transparent;
  border-right: 35px solid #fff;
  border-bottom: 20px solid transparent;
  z-index: 1;
}

h4 {
  border-radius: 20px 20px 0 0;
  padding: 5px;
  margin: 0px;
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
