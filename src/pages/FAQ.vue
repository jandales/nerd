<script setup lang="ts">
import QuestionComponent from '@/components/Question.vue';
import { QuestionList } from '@/data/QuestionList';





</script>
<template>
   <section>
      <div class="max-w-xl mx-auto mt-10 px-8 lg:px-0 mb-20">
         <h1 class="text-3xl mb-8 font-bold">Frequently Asked Questions</h1>

       <QuestionComponent  
          v-for="(item, index) in QuestionList"
          :key="index"
          :question="item.question"
          :answer="item.answer"
          :link="item.link"
        />
        
      </div>
   </section>
</template>