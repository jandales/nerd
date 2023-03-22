<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-rose-500">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-gray-400">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <RouterLink rel="noopener noreferrer" :to="{name : 'home'}" className="px-8 py-3 font-semibold rounded bg-rose-500 text-white dark:bg-violet-400 dark:text-gray-900">Back to homepage</RouterLink>
                    </div>
                </div>
</template>