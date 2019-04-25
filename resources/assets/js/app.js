
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Components
Vue.component('v-breadcrumb', require('./components/breadcrumb.vue').default);
Vue.component('v-block-tile-count', require('./components/blockTileCount.vue').default);
Vue.component('v-box-panel', require('./components/boxPanel.vue').default);
Vue.component('v-container', require('./components/container.vue').default);
Vue.component('v-tabela-lista', require('./components/TabelaLista.vue').default);
Vue.component('v-formulario', require('./components/forms/form.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    mounted() {
        document.getElementById('app').style.display = "block";
    },
});
