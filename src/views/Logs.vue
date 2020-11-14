<template>
  <div id="wrapper">
    <transition name="fade" mode="out-in">
      <div id="map"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'logs'
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-to {
  transition: opacity .3s;
}

* {
  font-family: 'Nasu';
  font-weight: normal;
  margin: 0;
}

#wrapper {
  height: 300vh
}

#map {
  height: 500px;
  background-image: url(../assets/images/logs/map.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  box-shadow: inset 0 0 5px 5px #fff5f1;
}

@media (min-width: 1400px) {
    #map {
        height: 650px;
    }
}
</style>
