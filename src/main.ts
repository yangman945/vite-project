import { createApp } from 'vue'
import App from './App.vue'
import router from './router/permission'
import { store } from './store'
import ElementPlus from 'plugs/elementPlus'
import "styles/index.scss";
const app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')