<template>
  <div :style="colorStyle" :class="{ reverse: direction}" class="wrapper">
    <div class="triangle"></div>
    <div class="flex">
      <h4>{{ title }}</h4>
      <p>{{ info }}</p>
    </div>
    <p v-html="comment"></p>
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
    },
    info: {
      required: true,
      default: ''
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
  text-align: left;
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  height: 165px;
  min-width: 350px;
  max-width: 50%;
  font-size: 16px;
  border-radius: 20px;
  background: #fff;
}

.flex {
  display: flex;
  justify-content: space-between;
  color: #fff;
}

.reverse .flex {
  flex-direction: row-reverse;
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
  padding: 10px 20px 0;
  margin: 0px;
  height: 40px;
  font-weight: normal;
  font-size: 25px;
  color: white;
}

.flex {
  background: linear-gradient(var(--color) 0%, var(--color) 90%, #fff 100%);
  border-radius: 20px 20px 0 0;
}

p {
  font-size: 17px;
  line-height: 1.5rem;
  padding: 0 15px;
  margin: 5px 10px;
}

@media (max-width: 1100px) {
  h4 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
}

@media (max-width: 830px) {
  h4 {
    font-size: 16px;
  }
  p {
    font-size: 15px;
  }
}
</style>
