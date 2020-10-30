<template>
  <div>
    <div id="mv">
      <div id="mv-content">
        <div id="icon">
          <img src="../assets/images/icon.png" alt="アイコン">
        </div>
        <img src="../assets/images/copy.png" alt="食べるという、コミュニケーション" id="copy">
        <h2 id="desc">「まち」の食育プロジェクト<br>EATOP</h2>
      </div>
    </div>
    <div id="contents-container">
      <topAbout/>
    </div>
  </div>
</template>

<script>
import topAbout from '@/components/topAbout'
import topEvent from '@/components/topEvent'
import topLogs from '@/components/topLogs'

export default {
  name: 'top',
  data () {
    return {
      title: 'TOP PAGE'
    }
  },
  methods: {
    toAbout () {
      this.$router.push('about')
    },
    toEvent () {
      this.$router.push('event')
    },
    toLogs () {
      this.$router.push('logs')
    }
  },
  components: {
    topAbout: topAbout,
    topEvent: topEvent,
    topLogs: topLogs
  }
}
</script>

<style scoped>
* {
  font-family: 'Nasu';
  font-weight: normal;
  text-align: center;
  margin: 0;
}

#mv {
  height: 500px;
  text-align: center;
  background-image: url(../assets/images/mv.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

#mv-content {
    background-color: #fff5f281;
    height: 100%;
    width: 60%;
    min-width: 300px;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#copy {
    object-fit: contain;
    height: 120px;
}

#desc {
    font-weight: normal;
    margin: 20px 0;
    color:  rgba(0, 0, 0, 0.692);
}

.btn {
  background-color: #987284;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 251px;
  height: 50px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}

section {
  height: 790px;
}

.container h2 {
  font-size: 30px;
  line-height: 2em;
}

@media (min-width: 1400px) {
    #mv {
        height: 700px;
    }
    #icon img {
        height: 180px;
    }
    #copy {
        height: 180px;
    }
}

</style>
