<script setup lang="ts">
defineProps({
    mostPopular: {
        type: Boolean,
         default : false,   
        }
    })
</script>
<template>
    <a href="#" :class="[mostPopular ? 'bg-rose-500 text-white hover:bg-rose-600' : 'text-black hover:bg-slate-50', 'mt-auto block px-6 py-3 border font-semibold border-rose-500  text-center  cursor-pointer rounded-lg  ']">Buy Plan</a>
</template>