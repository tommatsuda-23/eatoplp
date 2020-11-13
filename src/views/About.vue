<template>
  <div id="wrapper">
    <transition name="fade">
      <div id="about-mv">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.8s;
}

#wrapper {
  height: 300vh;
}

* {
  font-family: 'Nasu';
  font-weight: normal;
  margin: 0;
}

body {
  text-align: center;
}

#about-mv {
  margin: 0 auto;
  text-align: center;
  height: 500px;
  width: 90%;
  background-image: url(../assets/images/about/slider1.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 5px 5px #fff5f1;
}

@media (min-width: 1400px) {
    #about-mv {
        height: 650px;
    }
}
</style>
