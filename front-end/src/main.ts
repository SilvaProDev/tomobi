
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())

createApp(App)
    .use(router)
    .mount('#app');


    