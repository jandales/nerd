<script setup lang="ts">
import { stringify } from 'querystring';

defineProps({
    price: Number,
    currency : String,
})
</script>
<template>
    <div class="py-6">
        <span class="block text-sm text-slate-400 mb-2">only</span>
        <span class="text-5xl font-bold block">{{ `${currency}  ${price}` }}<strong class="text-base text-slate-400">/month</strong></span>
    </div>
</template>