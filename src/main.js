import { createApp } from 'vue'
import './style.css'
import router from "./routes/index"
import App from './App.vue'
import axios from './api/axios'
import { createPinia } from 'pinia'
import Swal from 'sweetalert2'



// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router);
app.use(createPinia())
app.config.globalProperties.$axios = axios
app.config.globalProperties.$swal = Swal
app.mount('#app')

