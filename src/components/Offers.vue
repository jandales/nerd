<script setup lang="ts">
import Offer from './offers/Offer.vue'
import CloudImage from '../assets/cloud.svg'
import ShapesImage from '../assets/shapes.svg'
import RocketImage from '../assets/rocket.svg'

</script>

<template>
   <section class="container mx-auto mb-2 lg:h-[500px] px-4 lg:px-0">
    <div class="py-16">
         <h1 class="text-5xl text-center font-bold mb-2">What we Offer</h1>       
    </div>
    
     

        <div class="grid lg:grid-cols-3 gap-4 lg:gap-12">

            <Offer 
                :image="CloudImage" 
                :name="'Cloud Storage'"
                :description="`store data securely online.Get lots of storage space, easily extend your storage, and upload big files and folders.`"
             />

            <Offer 
                :image="ShapesImage" 
                :name="'File Manager'"
                :description="`With us you can check all your files in real time with detailed information.`"
                 />

            <Offer 
                :image="RocketImage" 
                :name="'Unlimited Storage'"
                :description="`You can upload as many files you want without the worry of space to run out.`"
            />

            

            

        </div>  
        
     
               
   

   </section> 
</template>