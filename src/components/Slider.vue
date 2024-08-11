<template>
    <VueSlickCarousel v-bind="settings">
        <img v-for="img in images" :src="img" class="w-full h-auto contained">
    </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
    name: 'vue-slick-carousel',
    components: { VueSlickCarousel },
    data() {
        return {
            images: [
                'https://img.freepik.com/premium-vector/cosmetics-set-ads-with-ball-glass-pink-cylinder-podium-stage-leaves-3d_68094-261.jpg?w=2000',
                'https://img.freepik.com/premium-vector/elegant-packaging-white-marble-cylinder-podium-with-cherry-blossom-petals-ball-glass-shadow-3d_68094-260.jpg?w=2000',
                'https://img.freepik.com/premium-vector/cosmetic-tube-with-pink-light-tropical-leaf-blue-square-podium-background_68094-257.jpg?w=2000',
                'https://img.freepik.com/premium-vector/sunscreen-cream-ads-square-stage-with-tropical-plants_68094-229.jpg?w=2000'
            ],
            settings: {
                "arrows": false,
                "dots": false,
                "infinite": true,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "autoplay": true,
                "speed": 2000,
                "autoplaySpeed": 5000,
                "cssEase": "linear"
            }
        }
    }
}
</script>
<style></style>