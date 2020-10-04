import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.darken4

  }
})
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBKCTRRjoSj0K6v9XOYe6o2bLRvMcfiRZI',
      authDomain: 'itc-ads-83813.firebaseapp.com',
      databaseURL: 'https://itc-ads-83813.firebaseio.com',
      projectId: 'itc-ads-83813',
      storageBucket: 'itc-ads-83813.appspot.com',
      messagingSenderId: '263571282291',
      appId: '1:263571282291:web:8e489c7d6e4e1109078d06'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
