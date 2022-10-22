import { createApp } from 'vue'
import { Quasar } from 'quasar'
import axios from 'axios'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from "./routers"

axios.defaults.baseURL = 'http://localhost:8080/wp-json/wp/v2/posts/'
axios.defaults.withCredentials = true

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {},
})

myApp.use(router).mount('#app')
