import './assets/main.css'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
