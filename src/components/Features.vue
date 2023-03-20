<script setup lang="ts">
import Feature from './features/Feature.vue';
import SecurityImage from '../assets/security.png'
import StorageImage from '../assets/storage.png'
import ShareImage from '../assets/share.png'
</script>
<template >
    <section class="bg-white pt-16">

        <h2 class="text-5xl text-center font-bold">Why choose NERD?</h2>

        <div class="mt-10">
            <Feature
                :image="SecurityImage"
                :title="`Security that's always on`"
                :descriptions="[
                    'We protect your data with zero-knowledge encryption, the highest level of online security and privacy. This means that only the sender and the receiver have the keys needed to see, read, or listen to the data stored or shared on NERD.',
                    'For anyone else, including NERD, the data would appear as gibberish, and they would find it impossible to read or understand.'
                ]"
                :isImageInRight="false"
            />

            <Feature
                    :image="StorageImage"
                    :title="'Never run out of storage space'"
                    :descriptions="['Easily share your NERD files and folders with friends and colleagues, even people without NERD accounts. And when sharing, you’re still in control. You can give people read-only or full access to your folders, and can set a password or create expiring links.']"
                    :isImageInRight="true"
            />

            <Feature
                :image="ShareImage"
                :title="'Share files and folders with anyone'"
                :descriptions="[' Need lots of storage space? No problem. We have a range of competitive plans that go up to 16 TB. If you need even more space, get a Pro Flexi or Business plan, where you only pay for the extra storage space you use.']"
                :isImageInRight="false"
            />

        </div>
         
    </section>   
</template>