<script setup lang="ts">
defineProps({
    title: String,
    image: String,
    descriptions: Array<String>,
    isImageInRight : Boolean,
})
</script>
<template>
    <section class="py-12">     
        <div class="container mx-auto flex flex-col px-8 lg:px-0 lg:flex-row">

                <div :class="`w-full lg:w-1/2  ${isImageInRight ? 'lg:order-1' : ''} `">
                    <div class="w-3/4  aspect-square mx-auto ">
                        <img :src="image"   alt="security" />
                    </div>
                </div>

                <div class="w-full lg:w-1/2 flex flex-col items-start">

                            <div :class="`w-full max-w-lg ${isImageInRight ? 'ml-4' : ''}`">
                                <h2 class="font-bold text-3xl lg:text-5xl lg:font-black tracking-widest leading-10 mb-6">{{ title }}</h2>

                                <p v-for="description in descriptions" class="text-slate-500  lg:text-lg mb-4">
                                    {{ description }}
                                </p>
                    
                            </div>

                </div>
        </div>
    </section>
</template>