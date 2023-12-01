import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'


let app = createApp(App)

app.use(store).use(router).mount('#app')


// app.config.globalProperties.$filters = {
//     dateFilter(value, format = 'date') {
//         const options = {}
//       return Intl.DateTimeFormat('ru-Ru', options).format(new Date(value))
//     }
//   }
