<script setup lang="ts">
import logo from '../assets/logo.png'

import { ref } from 'vue';
import { ElementTypes } from '@vue/compiler-core';
import { RouterLink } from 'vue-router';


let isMenuOpen  = ref(false)

const toggleMenu = () : void => {   
    isMenuOpen.value = isMenuOpen.value == true ? false : true;
}   

document.addEventListener('scroll', () => {
    const element = document.getElementById('header');
    const style = 'shadow-md'
    let currentScroll = window.scrollY 
    if (currentScroll > 0) {
        element?.classList.add(style)
        return; 
    }

    element?.classList.remove(style)
    
       
    
})

</script>

<template>
    <header id="header" class="w-full h-20 lg:h-24 fixed top-0 left-0 bg-white grid items-center">
        <nav class="flex px-4 h-fit items-center container mx-auto ">
            
            <span @click="toggleMenu()" class="inline-block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>                
            </span>

            <div class="flex gap-3 items-center">
                <div class="w-14 h-14  rounded-full bg-rose-500 ml-4 grid place-content-center">
                    <img :src="logo" class="w-8 h-8"  />  
                </div>
                 <label for="" class="text-2xl break-words block w-32 font-black md:w-auto">Nerd.io</label>
            </div>
          
            

            <ul :class="`${isMenuOpen  ? 'flex' : 'hidden' } absolute top-[5rem] left-0 w-full  flex-col gap-4 p-8 bg-white shadow-lg transition-all ease-in-out delay-300 lg:relative lg:top-0 lg:right-0  lg:flex lg:flex-row lg:items-center lg:shadow-none lg:p-2  lg:gap-8 lg:w-auto  lg:ml-auto`"> 
                <li>
                    <RouterLink :to="{name : 'home'}" class="text-base lg:text-lg hover:text-rose-500 ">Home</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name :'pricing'}" class="text-base lg:text-lg hover:text-rose-500 ">Pricing</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'faq' }"    class="text-base lg:text-lg hover:text-rose-500 ">FAQ</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'privacy-policy' }" class="text-base lg:text-lg hover:text-rose-500 ">Privacy Policy</RouterLink>
                </li>
                <RouterLink :to="{ name: 'login' }" class="hidden text-white font-exrtabold bg-rose-500 rounded-md px-4 py-3 lg:flex items-center gap-2 hover:bg-red-600">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white font-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    </span>
                    <label>Member</label>
                </RouterLink>
            </ul>

            <RouterLink :to="{name: 'login'}" class="bg-rose-500 ml-auto rounded-md p-2 w-10 h-10 grid place-content-center lg:hidden" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white font-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </RouterLink>
        </nav>
    </header>
</template>