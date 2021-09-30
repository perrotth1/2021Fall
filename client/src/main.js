import { createApp } from 'vue'   //Imported object from nodemodules 
import "@fortawesome/fontawesome-free"
import "bulma"

import App from './App.vue'       //Importing our own object App that we created
import router from './router'     //

createApp(App).use(router).mount('#app')     //Mounting our app in element with id "app"

