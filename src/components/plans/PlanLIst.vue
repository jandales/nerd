<script setup lang="ts">
import Plan from './Plan.vue';

interface Plan {
    name: string;

    price: {
        currency: string,
        amount: number,
    };
    descriptions: string[];
    mostPopular?: boolean;    
}

const planList : Plan[] = [
    {
        name: 'Plan I',
        price: {
            currency: '$',
            amount : 24,
        },
        descriptions: [
            '400 GB of storage',
            '1 TB of transfer'
        ],
        mostPopular : false,
        
    },
     {
        name: 'Plan II',
        price: {
            currency: '$',
            amount: 40,
        },
        descriptions: [
            '2 TB of storage',
            '2 TB of transfer',           
        ],
        mostPopular: true,

    },
     {
        name: 'Plan III',
        price: {
            currency: '$',
            amount: 79,
        },
        descriptions: [
            'Unlimited of storage',
            'Unlimited of transfer'
        ],
        mostPopular: false,

    }
];

</script>
<template>

    <Plan  
        v-for="(item, index) in planList" 
        :key="index"
        :title="item.name"
        :price="item.price.amount"
        :currency="item.price.currency"
        :list="item.descriptions"
        :most-popular="item.mostPopular"
    />

</template>