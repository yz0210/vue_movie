import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Element UI
import './plugins/element.js'
import TreeTable from 'vue-table-with-tree-grid'
// 粒子插件
import VueParticles from 'vue-particles'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// require styles 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import axios from './utils/request.js'


import {dateFormat} from "@/utils";

Vue.use(VueParticles)
Vue.filter(dateFormat())

Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
