/* import './assets/main.css' */
import 'tailwindcss/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faHouse, faPlus, faWrench, faGears, faUser, faRightToBracket, faMoneyBillTransfer)

const app = createApp(App)

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
