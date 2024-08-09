<template>
    <!-- <nav class="p-4 lg:px-0 bg-white text-gray-900 font-bold">
        <div class="hidden lg:flex justify-between items-center">
            <div class="flex items-center gap-2">
                <img src="../assets/NOURGHALI.png" alt="" class="w-32 h-full">
            </div>

            <ul class="flex items-center gap-4 uppercase">
                <li class="text-xs "><router-link to="/"
                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                        style="text-underline-offset: 8px;">home</router-link></li>
                <li class="text-xs"><router-link to="" disabled
                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                        style="text-underline-offset: 8px;">about</router-link></li>
                <li class="text-xs"><router-link to="" disabled
                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                        style="text-underline-offset: 8px;">faq</router-link></li>
                <li class="text-xs"><router-link to="" disabled
                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                        style="text-underline-offset: 8px;">blog</router-link></li>
                <li class="text-xs"><router-link to="/produits"
                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                        style="text-underline-offset: 8px;">our products</router-link></li>
                

                <li class="text-xs">
                    <a href="https://cosm-hync-wb1.vercel.app/login"
                        class="flex gap-2 cursor-pointer px-3 py-2 bg-white items-center transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6] underline-offset-8">
                        <icn name="exit" class="h-4 w-4 fill-current" />
                        <span class="">sign in</span>
                    </a>
                </li>
            </ul>
        </div>


        <div class="lg:hidden flex justify-between items-center ">

            <button id="menu-toggle" type="button" @click="toggleMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path
                        d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
                        fill="#7A00E6" />
                </svg>
            </button>

            <img src="../assets/NOURGHALI.png" alt="" class="w-20 h-full">

            <div class="flex items-center gap-2">
                
            </div>

        </div>

        <div class="w-full hidden absolute left-0 top-14 border-ttransition-all z-30" id="side-navbar">
            <div class="flex bg-white w-full flex-col justify-center px-3 pb-5 text-xs uppercase">
                <router-link to="/"
                    class="block text-gray-900 cursor-pointer py-2 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">home</router-link>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">about</a>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">faq</a>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">blog</a>
                <router-link to="/produits"
                    class="block text-gray-900 cursor-pointer py-2 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">our products</router-link>
                <a href="https://cosm-hync-wb1.vercel.app/login"
                    class="flex gap-2 cursor-pointer py-2 bg-white items-center transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6] underline-offset-8">
                    <icn name="exit" class="h-4 w-4 fill-current" />
                    <span class="">sign in</span>
                </a>

            </div>
        </div>
    </nav> -->
    <div>
        <div>
            <nav class="flex container items-center mx-auto px-5 py-5 text-gray-900 font-bold uppercase">
                <ul class="flex flex-grow space-x-4">
                    <li>
                        <div class="flex items-center gap-2">
                            <img src="../assets/NOURGHALI.png" alt="" class="lg:w-32 w-20 h-full">
                        </div>
                    </li>
                </ul>

                <ul class="flex items-center space-x-5">

                    <li class="hidden sm:flex text-xs "><router-link to="/"
                            class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                            style="text-underline-offset: 8px;">home</router-link></li>
                    <li class="hidden sm:flex text-xs"><router-link to="" disabled
                            class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                            style="text-underline-offset: 8px;">about</router-link></li>
                    <li class="hidden sm:flex text-xs"><router-link to="" disabled
                            class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                            style="text-underline-offset: 8px;">faq</router-link></li>
                    <li class="hidden sm:flex text-xs"><router-link to="" disabled
                            class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                            style="text-underline-offset: 8px;">blog</router-link></li>
                    <li class="hidden sm:flex text-xs"><router-link to="/produits"
                            class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                            style="text-underline-offset: 8px;">our products</router-link></li>

                    <li class="hidden sm:flex text-xs">
                        <a href="https://cosm-hync-wb1.vercel.app/login"
                            class="flex gap-2 cursor-pointer px-3 py-2 bg-white items-center transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6] underline-offset-8">
                            <icn name="exit" class="h-4 w-4 fill-current" />
                            <span class="">sign in</span>
                        </a>
                    </li>
                </ul>

                <ul class="flex items-center sm:hidden" @click="showMenu = !showMenu">
                    <li>
                        <a href="#" class="flex-none absolute right-0 top-5 px-5 z-30">
                            <p class="text-gray-900 font-semibold tracking-wide rounded px-2 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </p>
                        </a>
                        <div class="absolute top-0 right-0 z-10 h-screen w-full bg-black transition"
                            :class="{ 'invisible opacity-0': !showMenu, 'visible opacity-40': showMenu, }"></div>
                        <div class="absolute right-0 z-20 w-full mt-10 transition"
                            :class="{ 'invisible opacity-0': !showMenu, 'visible opacity-100': showMenu, }">
                            <ul class="flex flex-col bg-white w-full rounded shadow-md overflow-hidden py-4 pt-2">
                                <li class="text-xs px-3 py-2"><router-link to="/"
                                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                                        style="text-underline-offset: 8px;">home</router-link></li>
                                <li class="text-xs px-3 py-2"><router-link to="" disabled
                                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                                        style="text-underline-offset: 8px;">about</router-link></li>
                                <li class="text-xs px-3 py-2"><router-link to="" disabled
                                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                                        style="text-underline-offset: 8px;">faq</router-link></li>
                                <li class="text-xs px-3 py-2"><router-link to="" disabled
                                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                                        style="text-underline-offset: 8px;">blog</router-link></li>
                                <li class="text-xs px-3 py-2"><router-link to="/produits"
                                        class="transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                                        style="text-underline-offset: 8px;">our products</router-link></li>


                                <li class="text-xs px-3 py-2">
                                    <a href="https://cosm-hync-wb1.vercel.app/login"
                                        class="flex gap-2 cursor-pointer items-center transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6] underline-offset-8">
                                        <icn name="exit" class="h-4 w-4 fill-current" />
                                        <span class="">sign in</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
    props: [],
    data() {
        return {
            showMenu: false,
        }
    },
    mounted() {
        document.getElementById('searchBtn').addEventListener('click', function () {

            const searchInput = document.getElementById('searchInput');

            if (searchInput.classList.contains('hidden')) {
                searchInput.classList.remove('hidden');
                searchInput.classList.add('block');
                searchInput.focus();
            } else {
                searchInput.classList.remove('block');
                searchInput.classList.add('hidden');
            }
        });

        document.getElementById('searchBtnMobile').addEventListener('click', function () {

            const searchInput = document.getElementById('searchInputMobile');

            if (searchInput.classList.contains('hidden')) {
                searchInput.classList.remove('hidden');
                searchInput.classList.add('block');
                searchInput.focus();
            } else {
                searchInput.classList.remove('block');
                searchInput.classList.add('hidden');
            }
        });
    },
    methods: {
        toggleMenu() {
            var x = document.getElementById("side-navbar");
            if (x.classList.contains('hidden')) {
                x.classList.remove('hidden');
            } else {
                x.classList.add('hidden');
            }
        },

    }
}
</script>

<style></style>