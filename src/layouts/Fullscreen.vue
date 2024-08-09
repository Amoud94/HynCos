<template>
    <div class="container mx-auto">
        <NavBar />
        <RouterView />
        <div class="flex flex-col pt-5">
            <div class="w-full bg-black p-4 px-10 text-white flex flex-col gap-4 items-center lg:flex lg:flex-row lg:items-center lg:justify-between">
                <div class="text-white font-bold text-xl">HynCos</div>
                <div class="lg:flex lg:items-center lg:justify-end lg:gap-2 lg:w-10/12">
                    <div class="text-center w-full lg:w-2/12 font-bold text-base mt-4 mb-2 lg:mb-0 lg:mt-0">
                        Suivez nous
                    </div>

                    <div class="flex items-center gap-2 justify-center lg:justify-end  flex-wrap lg:w-auto lg:px-0">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41"
                                fill="none" class="cursor-pointer">
                                <rect x="0.5" y="1.28027" width="39" height="39" rx="19.5" stroke="white" />
                                <g clip-path="url(#clip0_1_1423)">
                                    <path
                                        d="M15.3604 27.9803H11.8774V16.764H15.3604V27.9803ZM13.617 15.234C12.5032 15.234 11.5999 14.3115 11.5999 13.1978C11.5999 12.6628 11.8124 12.1498 12.1907 11.7715C12.5689 11.3932 13.082 11.1807 13.617 11.1807C14.152 11.1807 14.665 11.3932 15.0433 11.7715C15.4216 12.1498 15.6341 12.6628 15.6341 13.1978C15.6341 14.3115 14.7304 15.234 13.617 15.234ZM28.3961 27.9803H24.9206V22.5203C24.9206 21.219 24.8944 19.5503 23.1097 19.5503C21.2989 19.5503 21.0214 20.964 21.0214 22.4265V27.9803H17.5421V16.764H20.8826V18.294H20.9314C21.3964 17.4128 22.5322 16.4828 24.2269 16.4828C27.7519 16.4828 28.3999 18.804 28.3999 21.819V27.9803H28.3961Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1423">
                                        <rect width="19.2" height="19.2" fill="white"
                                            transform="translate(10.3999 11.1807)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#">

                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41"
                                fill="none" class="cursor-pointer">
                                <rect x="0.5" y="1.28027" width="39" height="39" rx="19.5" stroke="white" />
                                <path
                                    d="M24.9948 12.9805H27.6423L21.8598 19.588L28.6623 28.5805H23.3373L19.1635 23.128L14.3935 28.5805H11.7423L17.926 21.5117L11.4048 12.9805H16.8648L20.6335 17.9642L24.9948 12.9805ZM24.0648 26.998H25.531L16.066 14.4805H14.491L24.0648 26.998Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#">

                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41"
                                fill="none" class="cursor-pointer">
                                <rect x="0.5" y="1.28027" width="39" height="39" rx="19.5" stroke="white" />
                                <path
                                    d="M20.0037 16.4681C17.6187 16.4681 15.695 18.3918 15.695 20.7768C15.695 23.1618 17.6187 25.0856 20.0037 25.0856C22.3887 25.0856 24.3125 23.1618 24.3125 20.7768C24.3125 18.3918 22.3887 16.4681 20.0037 16.4681ZM20.0037 23.5781C18.4625 23.5781 17.2025 22.3218 17.2025 20.7768C17.2025 19.2318 18.4587 17.9756 20.0037 17.9756C21.5487 17.9756 22.805 19.2318 22.805 20.7768C22.805 22.3218 21.545 23.5781 20.0037 23.5781ZM25.4937 16.2918C25.4937 16.8506 25.0437 17.2968 24.4887 17.2968C23.93 17.2968 23.4837 16.8468 23.4837 16.2918C23.4837 15.7368 23.9337 15.2868 24.4887 15.2868C25.0437 15.2868 25.4937 15.7368 25.4937 16.2918ZM28.3475 17.3118C28.2837 15.9656 27.9762 14.7731 26.99 13.7906C26.0075 12.8081 24.815 12.5006 23.4687 12.4331C22.0812 12.3543 17.9225 12.3543 16.535 12.4331C15.1925 12.4968 14 12.8043 13.0137 13.7868C12.0275 14.7693 11.7237 15.9618 11.6562 17.3081C11.5775 18.6956 11.5775 22.8543 11.6562 24.2418C11.72 25.5881 12.0275 26.7806 13.0137 27.7631C14 28.7456 15.1887 29.0531 16.535 29.1206C17.9225 29.1993 22.0812 29.1993 23.4687 29.1206C24.815 29.0568 26.0075 28.7493 26.99 27.7631C27.9725 26.7806 28.28 25.5881 28.3475 24.2418C28.4262 22.8543 28.4262 18.6993 28.3475 17.3118ZM26.555 25.7306C26.2625 26.4656 25.6962 27.0318 24.9575 27.3281C23.8512 27.7668 21.2262 27.6656 20.0037 27.6656C18.7812 27.6656 16.1525 27.7631 15.05 27.3281C14.315 27.0356 13.7487 26.4693 13.4525 25.7306C13.0137 24.6243 13.115 21.9993 13.115 20.7768C13.115 19.5543 13.0175 16.9256 13.4525 15.8231C13.745 15.0881 14.3112 14.5218 15.05 14.2256C16.1562 13.7868 18.7812 13.8881 20.0037 13.8881C21.2262 13.8881 23.855 13.7906 24.9575 14.2256C25.6925 14.5181 26.2587 15.0843 26.555 15.8231C26.9937 16.9293 26.8925 19.5543 26.8925 20.7768C26.8925 21.9993 26.9937 24.6281 26.555 25.7306Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#">

                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41"
                                fill="none" class="cursor-pointer">
                                <rect x="0.5" y="1.28027" width="39" height="39" rx="19.5" stroke="white" />
                                <g clip-path="url(#clip0_1_1432)">
                                    <path
                                        d="M24.4678 21.9807L25.001 18.5059H21.6669V16.251C21.6669 15.3004 22.1326 14.3738 23.6259 14.3738H25.1416V11.4154C25.1416 11.4154 23.7661 11.1807 22.451 11.1807C19.7053 11.1807 17.9105 12.8449 17.9105 15.8577V18.5059H14.8584V21.9807H17.9105V30.3807H21.6669V21.9807H24.4678Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1432">
                                        <rect width="19.2" height="19.2" fill="white"
                                            transform="translate(10.3999 11.1807)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#">

                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41"
                                fill="none" class="cursor-pointer">
                                <rect x="0.5" y="1.28027" width="39" height="39" rx="19.5" stroke="white" />
                                <g clip-path="url(#clip0_1_1435)">
                                    <path
                                        d="M28.3999 19.0523C26.7489 19.0562 25.1385 18.5414 23.796 17.5804V24.2824C23.7955 25.5237 23.4161 26.7353 22.7085 27.7551C22.0009 28.7749 20.9988 29.5544 19.8362 29.9894C18.6736 30.4243 17.406 30.4939 16.2027 30.189C14.9995 29.884 13.918 29.2189 13.103 28.2827C12.2879 27.3465 11.7781 26.1838 11.6417 24.9501C11.5052 23.7163 11.7487 22.4703 12.3396 21.3787C12.9304 20.287 13.8405 19.4018 14.948 18.8413C16.0556 18.2808 17.3078 18.0718 18.5374 18.2423V21.6132C17.9747 21.4362 17.3706 21.4415 16.8111 21.6284C16.2517 21.8153 15.7657 22.1741 15.4223 22.6537C15.079 23.1333 14.8961 23.7092 14.8995 24.299C14.903 24.8888 15.0928 25.4624 15.4417 25.9379C15.7906 26.4134 16.2809 26.7665 16.8425 26.9468C17.4041 27.1271 18.0082 27.1253 18.5688 26.9417C19.1293 26.7581 19.6174 26.4021 19.9635 25.9245C20.3097 25.447 20.496 24.8722 20.496 24.2824V11.1807H23.796C23.7937 11.4593 23.817 11.7376 23.8657 12.012C23.9804 12.6246 24.2188 13.2073 24.5664 13.7246C24.9141 14.2418 25.3635 14.6827 25.8874 15.0203C26.6326 15.5131 27.5064 15.7757 28.3999 15.7755V19.0523Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1435">
                                        <rect width="19.2" height="19.2" fill="white"
                                            transform="translate(10.3999 11.1807)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#">

                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41"
                                fill="none" class="cursor-pointer">
                                <rect x="0.5" y="1.28027" width="39" height="39" rx="19.5" stroke="white" />
                                <g clip-path="url(#clip0_1_1438)">
                                    <path
                                        d="M28.7218 16.3836C28.5124 15.5953 27.8955 14.9744 27.1123 14.7637C25.6926 14.3809 19.9999 14.3809 19.9999 14.3809C19.9999 14.3809 14.3073 14.3809 12.8876 14.7637C12.1043 14.9745 11.4875 15.5953 11.2781 16.3836C10.8977 17.8125 10.8977 20.7938 10.8977 20.7938C10.8977 20.7938 10.8977 23.7751 11.2781 25.204C11.4875 25.9923 12.1043 26.5873 12.8876 26.798C14.3073 27.1809 19.9999 27.1809 19.9999 27.1809C19.9999 27.1809 25.6926 27.1809 27.1123 26.798C27.8955 26.5873 28.5124 25.9923 28.7218 25.204C29.1022 23.7751 29.1022 20.7938 29.1022 20.7938C29.1022 20.7938 29.1022 17.8125 28.7218 16.3836ZM18.1381 23.5006V18.087L22.8961 20.7939L18.1381 23.5006Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1438">
                                        <rect width="19.2" height="19.2" fill="white"
                                            transform="translate(10.3999 11.1807)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                      
                    </div>

                    <div
                        class="w-full flex items-center justify-center lg:justify-end gap-2 mt-4 lg:mt-0 cursor-pointer button-like select-none lg:w-3/12 lg:w-2/12">
                        <span class="font-normal text-base" id="scrollToTopBtn">Haut de la page</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path
                                d="M11.3374 2.33301C10.8687 1.86426 10.1074 1.86426 9.63867 2.33301L3.63867 8.33301C3.16992 8.80176 3.16992 9.56301 3.63867 10.0318C4.10742 10.5005 4.86867 10.5005 5.33742 10.0318L9.28992 6.07551V17.5805C9.28992 18.2443 9.82617 18.7805 10.4899 18.7805C11.1537 18.7805 11.6899 18.2443 11.6899 17.5805V6.07551L15.6424 10.028C16.1112 10.4968 16.8724 10.4968 17.3412 10.028C17.8099 9.55926 17.8099 8.79801 17.3412 8.32926L11.3412 2.32926L11.3374 2.33301Z"
                                fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div
                class="flex bg-white w-11/12 flex-col lg:flex-row lg:items-center  lg:flex-wrap  gap-4 px-4 lg:px-10 py-5 text-base font-normal">
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 pr-5 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">Contact</a>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 pr-5 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">Mentions légales</a>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 pr-5 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">Vie Privée et Données Personnelles</a>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 pr-5 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">Politique des cookies</a>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 pr-5 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">Entreprise Today</a>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 pr-5 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">Nos publications</a>
                <a href="#"
                    class="block text-gray-900 cursor-pointer py-2 pr-5 transition duration-300 focus:outline-none focus:text-[#7A00E6] focus:underline hover:underline hover:text-[#7A00E6]"
                    style="text-underline-offset: 8px;">Plan du site</a>
                <div class="lg:hidden block text-gray-900" style="text-underline-offset: 8px;">© Entreprise 2004-2024 -
                    Tous
                    droits
                    réservés</div>
            </div>
            <div class="lg:block hidden text-gray-900 px-10 w-1/2 pb-4" style="text-underline-offset: 8px;">©
                Entreprise 2004-2024 - Tous droits réservés</div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    name: 'full-screen',
    components: { NavBar },
    mounted(){
        document.getElementById('scrollToTopBtn').addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
</script>