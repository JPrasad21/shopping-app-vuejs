import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast, { POSITION, type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);

const toastOptions: PluginOptions = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
};
  
app.use(Toast, toastOptions);

app.mount('#app');