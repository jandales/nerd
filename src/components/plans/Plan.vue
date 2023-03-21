<script setup lang="ts">
import PlanPrice from './PlanPrice.vue';
import PlanInfo from './PlanInfo.vue';
import PlanBuy from './PlanBuy.vue';
import PlanTitle from './PlanTitle.vue';

defineProps({
  title: String,
  price: Number,
  currency : String,
  list: Array,
  mostPopular : Boolean,
})


</script>
<template>

      <div :class="[mostPopular ? 'border-rose-500 border-2' : '', 'w-full min-h-[28rem] border rounded-2xl  p-8 flex flex-col']">

        <PlanTitle :title="'Plan I'" :most-popular="mostPopular" />
  
        <PlanPrice :price="price" :currency="currency"/>

        <PlanInfo :list="list" />

        <PlanBuy :most-popular="mostPopular"  />

      </div>
</template>