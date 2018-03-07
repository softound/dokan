import App from './App.vue'
import router from './router'
import menuFix from './utils/admin-menu-fix'

/* eslint-disable no-new */
let Vue = dokan_get_lib('Vue');

new Vue({
    el: '#dokan-vue-admin',
    router,
    render: h => h(App)
});


// fix the admin menu for the slug "vue-app"
menuFix('vue-app');
