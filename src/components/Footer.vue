<script setup lang="ts">
import { RouterLink } from 'vue-router';

    
</script>
<template>
    <footer class=" bg-slate-50">
        <div class="container mx-auto py-10 flex justify-center items-center">
            <nav class="flex flex-col gap-8">
                <ul class="flex gap-10">
                    <li><RouterLink :to="{name :'home'}" href="#" class="text-slate-600 hover:text-rose-500">Home</RouterLink></li>
                    <li><RouterLink :to="{name :'faq'}" href="#" class="text-slate-600 hover:text-rose-500">FAQ</RouterLink></li>
                    <li><RouterLink :to="{name :'privacy-policy'}" href="#" class="text-slate-600 hover:text-rose-500">Privacy Policy</RouterLink></li>
                </ul>
                <label for="" class="block text-center text-slate-600">©Nerd.io</label>
            </nav>
        </div>
    </footer>
</template>