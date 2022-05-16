import Vue from 'vue'

import router from './routes.js';
import AppComponent from './components/AppComponent'


const app = new Vue({
    el: '#app',
    components: { AppComponent },
    router
});
