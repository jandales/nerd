import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Premium from '../pages/Premium.vue'


const routes : Array <RouteRecordRaw> = [
    { 
        path: '/',
        name : 'home',
        component : Home,
    },
     { 
        path: '/premium',
        name : 'home',
        component : Premium,
    },  
]


const router  = createRouter({
    history : createWebHistory(),
    routes,
})


export default router