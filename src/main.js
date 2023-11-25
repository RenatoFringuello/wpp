import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'

import config from './formkit.config.js'
import { plugin, defaultConfig } from '@formkit/vue'
import { router } from './router'

createApp(App)
    .use(router)
    .use(plugin, defaultConfig(config))
    .mount('#app')
