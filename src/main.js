// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入mui
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'

// 引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)



import App from './App'
import router from './router'



Vue.config.productionTip = false
Vue.use(MintUI)

Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 引入格式化时间插件
import moment from 'moment'

Vue.filter('dateFormat',function(dateStr,pattern = 'YYYY-MM-DD HH:mm:ss'){
  return  moment(dateStr).format(pattern)

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
