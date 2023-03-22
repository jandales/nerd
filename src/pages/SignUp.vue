<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import Logo from '@/assets/logo.png'
useTitle('Nerd.io | Sign-up')
</script>
<template>
    <div class="w-full min-h-screen bg-slate-50 grid place-content-center pt-20 pb-20">
         <!-- <a href="/">
               <div class="w-14 h-14 mx-auto  rounded-full bg-rose-500 mb-10 grid place-content-center">
                    <img :src="Logo" class="w-8 h-8"  />  
                </div>             
           </a> -->
        <div class="w-full md:w-[28rem] bg-white rounded-lg p-8">
            <h1 class="font-semibold text-xl">
               Create an Account
            </h1>
            <form class="w-full  mt-8">

            <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Name">
            
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Email Address
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="name@email.com">
                
                </div>
            </div>
     
            <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Password
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Pasword">
              
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Confirm Password
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Confirm Pasword">
              
                    </div>
                </div>

          
            
            <button class="w-full bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign Up
            </button>
           
   
     
    </form>
     <RouterLink :to="{ name: 'login' }"  class="block text-center mt-16">Have an account? <span class="text-rose-500">Sign-in</span></RouterLink>
        </div>
    </div>
</template>