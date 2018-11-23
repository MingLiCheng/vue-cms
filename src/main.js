// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入mui
import './assets/mui/css/mui.css'

import App from './App'
import router from './router'



Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
