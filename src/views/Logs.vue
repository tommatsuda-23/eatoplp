<template>
  <div id="wrapper">
    <transition name="fade" mode="out-in">
      <div id="map">
        <template v-for="prop in pinProps">
          <pin name="prop[name]" position="prop[position]" imgAlt="prop[imgAlt]" />
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
        {name: 'gurugura', position: [50, 50], imgAlt: '糸島グルメグランプリ', link: ''},
        {name: 'hiho', position: [50, 50], imgAlt: 'ハイホー', link: ''},
        {name: 'imari', position: [50, 50], imgAlt: '伊万里田植え体験', link: ''},
        {name: 'kyudaisai', position: [50, 50], imgAlt: '九大祭', link: ''},
        {name: 'piertro', position: [50, 50], imgAlt: 'ピエトロ', link: ''},
        {name: 'qshock', position: [50, 50], imgAlt: 'Q-SHOCK', link: ''},
        {name: 'sabameshi', position: [50, 50], imgAlt: 'サバイバル飯キャンプ', link: ''},
        {name: 'saito', position: [50, 50], imgAlt: 'さいとぴあバレンタイン', link: ''},
        {name: 'saitorensai', position: [50, 50], imgAlt: '西都連祭', link: ''},
        {name: 'tofu', position: [50, 50], imgAlt: 'またいちの塩で豆腐作り', link: ''}
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
  position: relative;
}

@media (min-width: 1400px) {
    #map {
        height: 650px;
    }
}
</style>
