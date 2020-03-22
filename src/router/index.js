import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import About from '@/views/About'
import Management from '@/views/Management'
import Project from '@/views/Project'
import BusinessProfile from "@/views/BusinessProfile"

import ContactUs from '@/views/ContactUs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path:'/project',
    component:Project
  },
  {
    path:'/contactus',
    component:ContactUs
  },
  {
    path:'/Busniprofile',
    component:BusinessProfile
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
