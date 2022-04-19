import { createApp } from 'vue'
import App from 'Dashboard.vue'
import router from '../../router/index.js'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'	

const app = createApp(App)

app.use(router)
app.mount('#app')
