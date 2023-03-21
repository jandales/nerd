<script setup lang="ts">
defineProps({
    title: String,
    mostPopular : Boolean,
})
</script>
<template>
     <div class="flex justify-between items-center">
        <h5 :class="[mostPopular ? 'text-rose-500' : '','text-2xl font-medium']">{{ title }}</h5>
        <span v-if="mostPopular" class="bg-rose-100 py-1 px-3 rounded-xl text-xs font-semibold text-rose-500">
            Most popular
        </span>
     </div>
</template>