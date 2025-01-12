import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Menus from './pages/Menus.vue'
import Offers from './pages/Offers.vue'
import Restaurants from './pages/Restaurants.vue'
import Tracking from './pages/Tracking.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutube, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faStar, faFacebookF, faTwitter, faInstagram, faYoutube, faAppStore, faGooglePlay)



const routes = [
  { path: '/', component: Home },
  { path: '/menus', component: Menus },
  { path: '/offers', component: Offers },
  { path: '/restaurants', component: Restaurants },
  { path: '/tracking', component: Tracking },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
})

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
