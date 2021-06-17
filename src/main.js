import { createApp } from 'vue'
import App from './App.vue'
import Ei from './components/Ei.vue'

const app = createApp(App);
app.component('ei', Ei)

createApp(App).mount('#app')
