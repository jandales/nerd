<script setup lang="ts">
import Privacy from '@/components/Privacy.vue';
import { QuestionList, PrivacyList } from '@/data/QuestionList';
import FairUse from '@/components/FairUse.vue'
import { useTitle } from '@vueuse/core';

useTitle('Nerd.io | Privacy Policy')




</script>
<template>
  <section>
    <div class="max-w-xl mx-auto mt-10 px-8 lg:px-0 mb-20">
      <h1 class="text-3xl mb-8 font-bold">Data privacy statement</h1>

      <Privacy
        v-for="(item, index) in PrivacyList"
        :key="index"
        :title="item.title"
        :description="item.description"
      />

        <h2 class="text-xl font-bold mb-2">Data storage regarding handling of Nerd.io</h2>
          <Privacy 
          :title="'General'"
          :description="[`Data saved, logged and processed in transactions with Nerd.io that are automatically collected by our webservers at each access of the user to the websites/sub-pages of Nerd.io specifically include the IP address of the user's computer that requested access, date and time including the associated file name and the data volume transferred as well as a status message about whether the request/access/call was completed successfully or not. To specifically protect our IT systems from abuse, the above information is saved for a short period of time. Nerd.io reserves the right to anonymise the collected data and/or use them for statistical purposes.`]"
          :sm="true"
        />

      <Privacy 
        :title="`Saving cookie's`"
        :description="[
          `Cookies saved temporarily are used to facilitate operation by the user. This does not contain any personal information. temporary cookies are deleted at the end of the session or when exiting the browser and/or closing the website. To facilitate logging in for registered users, permanent cookies are saved as well.`,
          `The user has the right to take actions to prevent or block the storage of cookies, either by browser functions or by separate software. However, Nerd.io expressly notes that the blocking of cookies may cause a restriction of use of the service of Nerd.io or other service providers.`
         ]"
         :sm="true"
        />

       
        <FairUse />
    </div>
  </section>
</template>