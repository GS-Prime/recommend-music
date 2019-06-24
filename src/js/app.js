import Vue from 'vue';
import App from '../vue/App.vue';
import '../css/common.css'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)


Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    components: { App },
    template: '<App/></App>'
});