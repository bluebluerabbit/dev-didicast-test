import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import VueCarousel from 'vue-carousel';

createApp(App).mount('#app')
// createApp(App).use(VueCarousel)
createApp(App).use(router).mount('#app')
const app = createApp(App)
app.config.globalProperties.$axios = axios;