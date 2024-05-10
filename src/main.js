import { createApp, markRaw  } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


pinia.use(({
   store
}) => {
   store.router = markRaw(router);
});

const app = createApp(App)
app.use(pinia)
app.use(router)


app.mount("#app")