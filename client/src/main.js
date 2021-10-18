import { createApp } from 'vue';   //Imported object from nodemodules 
import "@fortawesome/fontawesome-free/css/all.css";
import "bulma";

import { Notification, Config } from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga-full.css';

import App from './App.vue';       //Importing our own object App that we created
import router from './router';     //

createApp(App)
    .use(router)
    .use(Notification)
    .use(Config, {
        iconPack: 'fas'
    })
    .mount('#app');   //Mounting our app in element with id "app"

