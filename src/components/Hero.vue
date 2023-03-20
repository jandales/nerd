<script setup lang="ts">
import HeroImage from '../assets/hero.png'
</script>
<template>
    <section class="container mx-auto min-h-[calc(100vh_-_5rem)]  lg:min-h-screen grid place-content-center">
        <div class="w-full grid place-content-center lg:place-content-start ">
            <img :src="HeroImage" alt="hero">
        </div>
        <div class="mt-2">
            <h1 class="text-center text-2xl font-medium lg:text-3xl lg:font-black">Unlimited Cloud Storage</h1>
            <p class="text-center text-slate-800 text-lg mt-4 px-4 lg:px-0">Online storage, remote backups, simple up- and downloading</p>
            <div class="grid place-content-center mt-4">
                <a href="#" class="inline-block px-8 py-3 bg-rose-600 text-center text-white font-semibold rounded-lg hover:bg-rose-700">Try it for free</a>
            </div>
        </div>
    </section>
</template>