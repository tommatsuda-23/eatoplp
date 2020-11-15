<template>
  <div id="logs">
    <transition name="fade" mode="out-in">
      <div id="map">
        <template v-for="(prop, key) in pinProps">
          <router-link :key="key" to="">
            <Pin :key="key" v-bind="{ imgSrc: prop['imgSrc'], position: prop['position'], imgAlt: prop['imgAlt']}"/>
          </router-link>
        </template>
      </div>
    </transition>
    <div v-if="path" class="modal">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Pin from '@/components/Pin'

export default {
  name: 'logs',
  data () {
    return {
      pinProps: [
        {imgSrc: require('../assets/images/logs/pins/gurugura.png'), position: [80, 51], imgAlt: '糸島グルメグランプリ', link: 'gurugura'},
        {imgSrc: require('../assets/images/logs/pins/hiho.png'), position: [20, 20], imgAlt: 'ハイホー', link: 'hiho'},
        {imgSrc: require('../assets/images/logs/pins/imari.png'), position: [40, 30], imgAlt: '伊万里田植え体験', link: 'imari'},
        {imgSrc: require('../assets/images/logs/pins/kyudaisai.png'), position: [40, 50], imgAlt: '九大祭', link: 'kyudaisai'},
        {imgSrc: require('../assets/images/logs/pins/pietro.png'), position: [50, 80], imgAlt: 'ピエトロ', link: 'pietro'},
        {imgSrc: require('../assets/images/logs/pins/qshock.png'), position: [20, 50], imgAlt: 'Q-SHOCK', link: 'qshock'},
        {imgSrc: require('../assets/images/logs/pins/sabameshi.png'), position: [10, 60], imgAlt: 'サバイバル飯キャンプ', link: 'sabameshi'},
        {imgSrc: require('../assets/images/logs/pins/saito.png'), position: [40, 40], imgAlt: 'さいとぴあバレンタイン', link: 'saito'},
        {imgSrc: require('../assets/images/logs/pins/saitorensai.png'), position: [80, 90], imgAlt: '西都連祭', link: 'saitorensai'},
        {imgSrc: require('../assets/images/logs/pins/tofu.png'), position: [50, 10], imgAlt: 'またいちの塩で豆腐作り', link: 'tofu'}
      ]
    }
  },
  components: {
    Pin
  },
  computed: {
    path () {
      if (this.$route.path === '/logs') {
        return false
      } else {
        return true
      }
    }
  }
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

#map {
  box-sizing: border-box;
  width: 100%;
  height: 1000px;
  background-image: url(../assets/images/logs/map.png);
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: contain;
  box-shadow: inset 0 0 5px 5px #fff5f1;
  position: relative;
}

@media (min-width: 1800px) {
  #map {
    display: none;
  }
}
</style>
