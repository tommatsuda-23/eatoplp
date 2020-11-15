<template>
  <div id="logs">
    <transition name="fade" mode="out-in">
      <div>
        <div id="title">
          <h1>EATOP活動マップ</h1>
          <p>これまでEATOPが行ってきた活動のうちいくつかを紹介しています
          <br>クリックすると、詳しい情報が見られます</p>
        </div>
        <div id="map">
          <template v-for="(prop, key) in pinProps">
            <div id="show-modal" :key=key @click="showModal = true">
              <Pin :key="key" v-bind="{ imgSrc: prop['imgSrc'], position: prop['position'], imgAlt: prop['imgAlt']}"/>
            </div>
          </template>
        </div>
      </div>
    </transition>
    <Post v-if="showModal" @close="showModal = false">[
      <template v-slot:title>
        <h2></h2>
      </template>
      <template v-slot:contents>
        <img src="" alt="">

      </template>
    </Post>
  </div>
</template>

<script>
import Pin from '@/components/Pin'
import Post from '@/components/Post'
import Vue from 'vue'

Vue.component('modal', {
  template: '#modal-template'
})

export default {
  name: 'logs',
  data () {
    return {
      pinProps: [
        {imgSrc: require('../assets/images/logs/pins/gurugura.png'), position: [30, 35], imgAlt: '糸島グルメグランプリ', link: ''},
        {imgSrc: require('../assets/images/logs/pins/hiho.png'), position: [39, 57], imgAlt: 'ハイホー', link: ''},
        {imgSrc: require('../assets/images/logs/pins/imari.png'), position: [8, 25], imgAlt: '伊万里田植え体験', link: ''},
        {imgSrc: require('../assets/images/logs/pins/kyudaisai.png'), position: [50, 24], imgAlt: '九大祭', link: ''},
        {imgSrc: require('../assets/images/logs/pins/pietro.png'), position: [86, 70], imgAlt: 'ピエトロ', link: ''},
        {imgSrc: require('../assets/images/logs/pins/qshock.png'), position: [42, 60], imgAlt: 'Q-SHOCK', link: ''},
        {imgSrc: require('../assets/images/logs/pins/sabameshi.png'), position: [75, 65], imgAlt: 'サバイバル飯キャンプ', link: ''},
        {imgSrc: require('../assets/images/logs/pins/saito.png'), position: [68, 47], imgAlt: 'さいとぴあバレンタイン', link: ''},
        {imgSrc: require('../assets/images/logs/pins/saitorensai.png'), position: [66, 43], imgAlt: '西都連祭', link: ''},
        {imgSrc: require('../assets/images/logs/pins/tofu.png'), position: [53, 18], imgAlt: 'またいちの塩で豆腐作り', link: ''},
        {imgSrc: require('../assets/images/logs/pins/kendo.png'), position: [60, 30], imgAlt: '留学生の剣道体験', link: ''}
      ],
      showModal: false
    }
  },
  components: {
    Pin,
    Post
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

#logs {
  height: 600px;
}
@media (min-width: 840px) {
  #logs {
    height: 800px;
  }
}

#title {
  text-align: center;
  padding: 40px 0;
  margin: 0;
}

#title > h1 {
  margin-bottom: 10px;
}

#title > p {
  color: rgba(0,0,0,0.8);
}

#title > h1::before,
#title > h1::after {
  content: '～';
  font-size: 25px;
}

button {
  cursor: pointer;
}

#show-modal {
  cursor: pointer;
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
