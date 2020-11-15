<template>
  <div :style="colorStyle" :class="{ reverse: direction }" class="wrapper">
    <div class="triangle"></div>
    <div class="flex">
      <h4>{{ title }}</h4>
      <p>{{ info }}</p>
    </div>
    <slot></slot>
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
  margin-top: 20px;
  min-width: 350px;
  max-width: 50%;
  font-size: 16px;
  border-radius: 20px;
  background: #fff;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: var(--color);
  border-radius: 20px 20px 0 0;
  height: 38px;
}

.reverse .flex {
  flex-direction: row-reverse;
}

.triangle {
  top: 19px;
  width: 20px;
  height: 19px;
  left: -20px;
  box-sizing: border-box;
  background: transparent;
  position: absolute;
  border-top: 9.5px solid transparent;
  border-right: 20px solid var(--color);
  border-bottom: 9.5px solid transparent;
  z-index: 1;
}

h4 {
  border-radius: 20px 20px 0 0;
  padding-left: 20px;
  font-weight: normal;
  font-size: 20px;
  color: white;
  margin: 0;
}

p {
  font-size: 15px;
  line-height: 1.5rem;
  padding-right: 15px;
}

.comment {
  padding: 15px;
}

span {
  background: linear-gradient(transparent 70%, var(--color) 90%)
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
  #comment {
    font-size: 15px;
  }
}
</style>
