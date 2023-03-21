<script setup lang="ts">

defineProps({
    title : String,
    description: Array, 
    sm: {
        type: Boolean,
        default : false,
    }
})

</script>
<template>
       <div class="mb-4">
            <h2 :class="`${ sm == true ? 'text-base' : 'text-xl' } font-bold mb-2`">{{ title }}</h2>
            <p v-for="item in description" class="text-base mb-2">{{ item }} </p>    
        </div>
</template>