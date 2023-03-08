import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import particle from "particles.vue3"

const app = createApp(App).use(particle)
app.use(store)
app.use(router)
app.mount('#app')
