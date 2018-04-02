import Vue from 'vue'
import App from './App'
import router from './router'
import * as utils from './utils'
import {isIos, isWechat, isIphoneX} from './utils/runtime'

Vue.prototype.$utils = utils
Vue.prototype.$isIos = isIos
Vue.prototype.$isWechat = isWechat
Vue.prototype.$isIphoneX = isIphoneX

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
