<script setup lang="ts">

defineProps({
    question: String,
    answer: String, 
    link : String,  
})

</script>
<template>
       <div class="mb-4">
            <h2 class="text-xl font-bold mb-2">{{ question }}</h2>
            <p class="text-base">{{ answer  }} <a v-if="link != null" :href="link" class="text-rose-500">contact form.</a></p>    
        </div>
</template>