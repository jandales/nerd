<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import Hero from '../components/Hero.vue';
import Offers from '../components/Offers.vue'
import Security from '../components/Features.vue';
import User from '../components/User.vue';
import Banner from '@/components/Banner.vue';

useTitle('Nerd.io | Home');
</script>

<template>
    <Hero />
    <Offers />
    <Security />
    <User /> 
    <Banner />
</template>


