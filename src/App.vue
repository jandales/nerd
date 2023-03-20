<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


</script>

<template>

    <Header></Header>
    <div  class="pt-20 lg:pt-24">
      <router-view></router-view>
    </div>
    <Footer></Footer>

</template>

<style scoped>
</style>
