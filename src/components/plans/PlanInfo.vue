<script setup lang="ts">

defineProps({
    list : Array,
})

</script>

<template>
       <ul class="flex flex-col gap-2 mb-10">
            <li v-for="(item, index) in list" class="flex gap-2" :key="index">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-500 font-bold">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                </span>
                <label for="">{{ item }}</label>
            </li>
        </ul>
</template>