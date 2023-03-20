
<script setup lang="ts">
import { stringify } from 'querystring';

defineProps({
    name: String,
    image: String,
    description : String,           
})
</script>
<template>
     <div class="w-full flex gap-8  border border-slate-200  bg-white rounded-xl p-6">
                        
                        <div class="w-16">
                            <img :src="image" :alt=name>
                        </div>

                       <div class="flex-1">
                             <h2 class="text-xl font-bold py-3">{{ name }}</h2>
                            <p class="capitalize text-base text-slate-600">{{ description }}</p>
                       </div>
                </div>
</template>