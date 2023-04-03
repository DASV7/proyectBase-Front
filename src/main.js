import { createApp } from 'vue'
import './style.css'
import router from "./routes/index"
import App from './App.vue'
import axios from './api/axios'
import { createPinia } from 'pinia'
// import Swal from 'sweetalert2'



const app = createApp(App)
window.axios = axios
app.use(router);
app.use(createPinia())

app.mount('#app')

