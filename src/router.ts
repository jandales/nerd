import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const routes: Array<RouteRecordRaw> = [
    { 
        path: '/',
        name : 'home',
        component : () => import('@/pages/Home.vue') ,
    },
     { 
        path: '/premium',
        name : 'premium',
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
    
    ]

export default createRouter({
    history : createWebHistory(),
    routes,
})

