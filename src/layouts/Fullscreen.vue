<template>
    <div class="container mx-auto">
        <NavBar />
        <RouterView />
        <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'full-screen',
    components: { NavBar, Footer },
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