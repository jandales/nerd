<script setup lang="ts">
import StoreWithUs from '@/components/StoreWithUs.vue';
import PlanLIst from '@/components/plans/PlanLIst.vue';
</script>

<template>
   <section>
     <div class="max-w-6xl mx-auto py-16 px-8 lg:px-4">
        <h1 class="text-3xl lg:text-5xl font-bold text-center">Choose the right plan for you</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <PlanLIst></PlanLIst>         
        </div>
     </div>
   </section>
   <StoreWithUs /> 
</template> 