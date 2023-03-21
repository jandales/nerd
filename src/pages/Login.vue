<template>
    <div class="w-full min-h-screen bg-slate-50 grid place-content-center">
        <div class="w-[28rem] bg-white rounded-lg p-8">
            <h1 class="font-semibold text-xl">
                Welcome Back!
            </h1>
            <form class="w-full  mt-8">

            <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Email Address
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="name@email.com">
                
                </div>
            </div>
     
            <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Password
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Pasword">
              
                </div>
            </div>

            <div class="flex items-center justify-between mb-4">
                <input type="checkbox" name="" id="">
                <a class="inline-block align-baseline font-bold text-sm text-rose-500 hover:text-rose-800" href="#">
                    Forgot Password?
                </a>
            </div>

            
            <button class="w-full bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
           
   
     
    </form>
    <a href="/sign-up" class="block text-center mt-16">Don't have an account? <span class="text-rose-500">Register</span></a>
        </div>
    </div>
</template>