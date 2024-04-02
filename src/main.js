import { createApp } from 'vue'
import App from './App'
import router from './routes/index.js'

createApp(App)
// 플러그인을 추가할때 use 사용
.use(router)
.mount('#app')

