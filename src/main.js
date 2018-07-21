import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'

import store from './store'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
    store,
    el: '#app',
    components: { App },
    template: '<App/>',
})
