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
              <Pin :key=key v-bind="{ pinImg: prop['pinImg'], position: prop['position'], imgAlt: prop['imgAlt']}"/>
            </div>
            <!-- eslint-disable-next-line vue/valid-v-for -->
            <Post v-if="showModal" @close="showModal = false">
              <template v-slot:title>
                <h2>{{ prop['imgAlt'] }}</h2>
              </template>
              <template v-slot:contents>
                <img src="" alt="">
              </template>
            </Post>
          </template>
        </div>
      </div>
    </transition>
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
        {pinImg: require('../assets/images/logs/pins/gurugura.png'),
          position: [30, 35],
          imgAlt: '糸島グルメグランプリ',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/hiho.png'),
          position: [39, 57],
          imgAlt: '前原町の居酒屋Hihoの運営',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/imari.png'),
          position: [8, 25],
          mgAlt: '伊万里田植え体験',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/kyudaisai.png'),
          position: [50, 24],
          imgAlt: '九大祭出店  いーとっぷカレー',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/pietro.png'),
          position: [86, 70],
          imgAlt: 'ピエトロ共同商品開発',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/qshock.png'),
          position: [42, 60],
          imgAlt: 'Q-SHOCK  中学生 & 留学生と英語でランチ',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/sabameshi.png'),
          position: [75, 65],
          imgAlt: 'サバイバル飯キャンプ',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/saito.png'),
          position: [68, 47],
          imgAlt: 'バレンタインお菓子づくり in さいとぴあ',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/saitorensai.png'),
          position: [66, 43],
          imgAlt: '西都連祭出店  いーとっぷカレー',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/tofu.png'),
          position: [53, 18],
          imgAlt: 'またいちの塩で豆腐作り',
          color: '#c1e396'
        },
        {pinImg: require('../assets/images/logs/pins/kendo.png'),
          position: [60, 30],
          imgAlt: '留学生の剣道 & 和食体験',
          color: '#c1e396'
        }
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
    height: 1000px;
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
  color: '#c1e396'rgba(0,0,0,0.8);
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
  position: relative;
}

@media (min-width: 1800px) {
  #map {
    display: none;
  }
}
</style>
