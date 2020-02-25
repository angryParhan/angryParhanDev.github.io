import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fb from 'firebase'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCSOG-xZ3D9uhmz3m_iz2C_ySEZkGUx3LM',
      authDomain: 'itc-ads-557fe.firebaseapp.com',
      databaseURL: 'https://itc-ads-557fe.firebaseio.com',
      projectId: 'itc-ads-557fe',
      storageBucket: 'itc-ads-557fe.appspot.com',
      messagingSenderId: '885881237000',
      appId: '1:885881237000:web:d12403e6aae4b2eb79abbd',
      measurementId: 'G-YY6H02HVR2'
    })
    fb.analytics()
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
