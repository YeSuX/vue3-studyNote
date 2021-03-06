import { createApp } from 'vue'
import App from './App.vue'
import router from './router/route.js'
import './global.css'

createApp(App).use(router).mount('#app')
