import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import About from '@/views/About'
import Management from '@/views/Management'
<<<<<<< HEAD
import Project from '@/views/Project'
=======
import ContactUs from '@/views/ContactUs'
>>>>>>> 17af27ff9e798a57ef46ba57306f0577531edea0
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Header
  },
  {
    path:'/footer',
    component:Footer
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/management',
    component:Management
  },
  {
<<<<<<< HEAD
    path:'/project',
    component:Project
=======
    path:'/contactus',
    component:ContactUs
>>>>>>> 17af27ff9e798a57ef46ba57306f0577531edea0
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
