<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';
import { computed , onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useRouter } from 'vue-router';
const route = useRoute();



onMounted(() => {
  console.log(useRoute().name);
  console.log(useRouter().currentRoute.value.name)
})

const isAuthPage = computed(() => {
  console.log(route.name)
})



</script>

<template>

    <Header></Header>
    <div  class="pt-20 lg:pt-24 min-h-screen">
      <router-view></router-view>
    </div>
    <Banner />
    <Footer></Footer>

</template>

<style scoped>
</style>
