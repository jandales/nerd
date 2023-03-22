import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'


const routes: Array<RouteRecordRaw> = [
    { 
        path: '/',
        name : 'home',
        component: Home,      
    },
    { 
        path: '/pricing',
        name : 'pricing',
        component: () => import('@/pages/Premium.vue'),
    },  
    {
        path: '/faq',
        name: 'faq',
        component : () => import('@/pages/FAQ.vue')
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component : () => import('@/pages/PrivacyPolicy.vue')
    },
    {
        path: '/login',
        name: 'login',
        component : () => import('@/pages/Login.vue')
    },
     {
        path: '/sign-up',
        name: 'sign-up',
        component : () => import('@/pages/SignUp.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/PageNotFound.vue')
    },
    
    ]

export default createRouter({
    history : createWebHistory(),
    routes,
})

