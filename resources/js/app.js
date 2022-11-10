import '../css/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SupportChat from './components/SupportChat.vue'

createApp({})
    .component('support-chat', SupportChat)
    .use(createPinia())
    .mount('#support-chat')
