<template>
  <div id="logs">
    <transition name="fade" mode="out-in">
      <div id="map">
        <template v-for="(prop, key) in pinProps">
          <router-link :key="key" :to="prop['link']">
            <pin :key="key" v-bind="{ imgSrc: prop['imgSrc'], position: prop['position'], imgAlt: prop['imgAlt']}"/>
          </router-link>
        </template>
      </div>
    </transition>
    <div class="modal">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import pin from '@/components/Pin'

export default {
  name: 'logs',
  data () {
    return {
      pinProps: [
        {imgSrc: require('../assets/images/logs/pins/gurugura.png'), position: [30, 35], imgAlt: '糸島グルメグランプリ', link: ''},
        {imgSrc: require('../assets/images/logs/pins/hiho.png'), position: [39, 57], imgAlt: 'ハイホー', link: ''},
        {imgSrc: require('../assets/images/logs/pins/imari.png'), position: [8, 25], imgAlt: '伊万里田植え体験', link: ''},
        {imgSrc: require('../assets/images/logs/pins/kyudaisai.png'), position: [50, 24], imgAlt: '九大祭', link: ''},
        {imgSrc: require('../assets/images/logs/pins/pietro.png'), position: [86, 65], imgAlt: 'ピエトロ', link: ''},
        {imgSrc: require('../assets/images/logs/pins/qshock.png'), position: [42, 60], imgAlt: 'Q-SHOCK', link: ''},
        {imgSrc: require('../assets/images/logs/pins/sabameshi.png'), position: [50, 50], imgAlt: 'サバイバル飯キャンプ', link: ''},
        {imgSrc: require('../assets/images/logs/pins/saito.png'), position: [68, 47], imgAlt: 'さいとぴあバレンタイン', link: ''},
        {imgSrc: require('../assets/images/logs/pins/saitorensai.png'), position: [66, 43], imgAlt: '西都連祭', link: ''},
        {imgSrc: require('../assets/images/logs/pins/tofu.png'), position: [53, 18], imgAlt: 'またいちの塩で豆腐作り', link: ''}
      ]
    }
  },
  components: {
    pin
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
  height: 500px;
  background-image: url(../assets/images/logs/map.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  box-shadow: inset 0 0 5px 5px #fff5f1;
  position: relative;
}

@media (min-width: 1400px) {
    #map {
        height: 650px;
    }
}
</style>
