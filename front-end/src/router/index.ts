import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import DetailsVehicule from '../components/DetailsVehicule.vue'
import RechercheVehicule  from '../components/RechercheVehicule.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/DetailsVehicule',
      name: 'DetailsVehicule',
      component: DetailsVehicule,
    },
    {
      path: '/RechercheVehicule',
      name: 'RechercheVehicule',
      component: RechercheVehicule,
    },
   
  ],
})

export default router

