import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'
import router from './router'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faLocationDot, faBasketShopping, faPersonCirclePlus, faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutube, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faStar, faStar, faFacebookF, faTwitter, faInstagram, faYoutube, faAppStore, faGooglePlay, faLocationDot, faBasketShopping, faCircleDown, faPersonCirclePlus, faStarHalfStroke)





createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
