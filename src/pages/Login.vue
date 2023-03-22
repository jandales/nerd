<script setup lang="ts">
import Logo from '@/assets/logo.png'
import { useTitle } from '@vueuse/core';
useTitle('Nerd.io | Login')
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
                Welcome Back!
            </h1>
            <form class="w-full mt-8">

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

            <div class="flex items-center justify-between mb-4">
                <div class="flex">
                    <input type="checkbox" name="" id="">
                    <label class=" ml-2 inline-block align-baseline font-bold text-sm text-gray-700">Remember me</label>
                </div>
                <a class="inline-block align-baseline font-bold text-sm text-rose-500 hover:text-rose-800" href="#">
                    Forgot Password?
                </a>
            </div>

            
            <button class="w-full bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
           
   
     
    </form>
    <RouterLink :to="{ name: 'sign-up' }" class="block text-center mt-16">Don't have an account? <span class="text-rose-500">Register</span></RouterLink>
        </div>
    </div>
</template>