require('./bootstrap');

import { createApp } from 'vue';
import router from './router';
import store from './store';
import HelloWorld from './components/HelloWorld';
createApp({
    components: {
        HelloWorld,
    }
}).use(router).use(store).mount('#app');
