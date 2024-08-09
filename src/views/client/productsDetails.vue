<template>
    <div class="w-full lg:py-10 py-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex hidden lg-block">
                <li class="breadcrumb-item text-gray-600"><a href="#"
                        class="text-gray-600 hover:text-purple-700 mx-2">Produits</a></li>
                <li class="breadcrumb-item text-gray-600"><a href="#"
                        class="text-gray-600 hover:text-purple-700 mx-2">{{ this.selectedProduct.category }}</a></li>
                <li class="breadcrumb-item active hover:text-purple-700 mx-2" aria-current="page">
                    {{ this.selectedProduct.owner.name }}</li>
                <li class="breadcrumb-item active text-purple-700 hover:text-purple-700 mx-2" aria-current="page">
                    {{ this.selectedProduct.name }}</li>
            </ol>
        </nav>

        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap relative">
                    <span class="bg-red-500 font-semibold text-white text-base  px-2 rounded-lg absolute top-5 left-5">
                    -20 % DE RÉDUCTION
                    </span>
                    <img alt="ecommerce"
                        class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                        :src="selectedProduct.pictures[0]">
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ this.selectedProduct.owner.name
                            }}</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ this.selectedProduct.name }}
                        </h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <span class="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                <a class="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-2 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="ml-2 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p class="leading-relaxed">{{ this.selectedProduct.description }}</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div class="flex ml-6 items-center">
                                <span class="mr-3">Quantity</span>
                                <div class="relative">
                                    <select
                                        class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                    <span
                                        class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" class="w-4 h-4"
                                            viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center ">
                            <div class="text-lg text-gray-500 line-through pr-5">
                                {{ this.selectedProduct.oldPrice }}
                                MAD
                            </div>
                            <span class="title-font font-medium text-2xl text-gray-900">{{ this.selectedProduct.price }}
                                MAD</span>
                            <button
                                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">ajouter
                                au panier</button>
                            <button
                                class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="mt-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 class="text-xl font-bold text-gray-800">information sur produit </h3>
            <ul class="mt-4 space-y-6 text-gray-800 capitalized">
                <li class="text-sm">Marque <span class="ml-4 float-right">{{ selectedProduct.owner.name }}</span></li>
                <li class="text-sm">Categorie <span class="ml-4 float-right">{{ selectedProduct.category }}</span></li>
                <li class="text-sm">nombre de vente <span class="ml-4 float-right">{{ selectedProduct.sales }}</span>
                </li>
                <li class="text-sm">réduction <span class="ml-4 float-right"> - {{ selectedProduct.discount }} %</span>
                </li>
                <li class="text-sm">prix sans réduction <span class="ml-4 float-right">{{ selectedProduct.oldPrice
                        }}MAD</span></li>
                <li class="text-sm">prix après réduction <span class="ml-4 float-right font-bold">{{
                        selectedProduct.price }}MAD</span></li>
            </ul>
        </div>
        <div class="mt-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 class="text-xl font-bold text-gray-800">Reviews(10)</h3>
            <div class="grid md:grid-cols-2 gap-12 mt-4">
                <div class="space-y-3">
                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">5.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-2/3 h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                    </div>

                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">4.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-1/3 h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                    </div>

                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">3.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-1/6 h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                    </div>

                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">2.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-1/12 h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                    </div>

                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">1.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-[6%] h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                    </div>
                </div>

                <div>
                    <div class="flex items-start">
                        <img src="https://readymadeui.com/team-2.webp"
                            class="w-12 h-12 rounded-full border-2 border-white" />
                        <div class="ml-3">
                            <h4 class="text-sm font-bold text-gray-800">John Doe</h4>
                            <div class="flex space-x-1 mt-1">
                                <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <p class="text-xs !ml-2 font-semibold text-gray-800">2 mins ago</p>
                            </div>
                            <p class="text-sm mt-4 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisci elit,
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <button type="button"
                        class="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-blue-600 text-gray-800 font-bold rounded">Read
                        all reviews</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product-details',
    data() {
        return {
            products: [
                {
                    "id": "64d4f74e8e33a5f75d2b1a24",
                    "name": "ISDIN ecran solaire FotoUltra Active Unify 50ml - Protection Solaire",
                    "pictures": ["https://makushop.ma/cdn/shop/files/isdn-ecran-solaire-FotoUltra-Active-Unify-50ml-_-ecran-solaire-ISDN---Makushop-1685054781.jpg?v=1685054783"],
                    "video": "https://via.placeholder.com/150/face-cream-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner123",
                        "name": "ISDIN"
                    },
                    "price": 250,
                    "oldPrice": 300,
                    "stars": 4.5,
                    "sales": 25,
                    "discount": 17,
                    "comments": [
                        {
                            "username": "jane_doe",
                            "message": "Amazing product! My skin has never looked better."
                        }
                    ],
                    "support": 150,
                    "description": `ISDIN ecran solaire FotoUltra Active Unify , une crème solaire teintée innovante qui offre une protection solaire efficace tout en unifiant le teint de votre peau. Cette formule légère et non grasse combine une haute protection solaire SPF 50+ avec des pigments colorés pour camoufler les imperfections et uniformiser le teint.
                                    FotoUltra Active Unify Color aide à prévenir les dommages causés par les rayons UVA et UVB, tels que les coups de soleil et le vieillissement prématuré de la peau. En plus de sa protection solaire avancée, cette crème teintée contient des ingrédients dépigmentants qui aident à réduire les taches pigmentaires et à uniformiser le teint, donnant ainsi à votre peau un aspect plus lumineux et homogène.
                                    Sa texture légère et facile à appliquer permet une absorption rapide sans laisser de résidus gras. La teinte universelle s'adapte à la plupart des carnations, offrant un effet naturel et une couverture légère pour un teint unifié et radieux.`
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a25",
                    "name": "ISDIN Foto Ultra 100 Spot Prevent Fusion Fluid SPF50+ 50ml",
                    "pictures": ["https://www.cavernesante.com/1636-large_default/isdin-ecran-solaire-spot-prevent-spf50-50ml.jpg"],
                    "video": "https://via.placeholder.com/150/lipstick-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner123",
                        "name": "ISDIN"
                    },
                    "price": 250,
                    "oldPrice": 300,
                    "stars": 4.5,
                    "sales": 25,
                    "discount": 17,
                    "comments": [
                        {
                            "username": "makeup_guru",
                            "message": "The perfect red lipstick. Stays on all day!"
                        }
                    ],
                    "support": 200,
                    "description": `Écran Solaire FotoUltra Spot Prevent offre une protection 3 fois supérieure au minimum requis dans un Écran Solaire SPF50+ contre les rayons UVA, responsables des troubles pigmentaires`
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a26",
                    "name": "ISDIN FOTOPROTECTOR FUSION WATER 50ML",
                    "pictures": ["https://www.paravitalia.com/wp-content/uploads/2022/09/61dqdOAoUS._AC_SX679_.jpg"],
                    "video": "https://via.placeholder.com/150/foundation-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner124",
                        "name": "ISDIN"
                    },
                    "price": 255,
                    "oldPrice": 382.50,
                    "stars": 4.3,
                    "sales": 180,
                    "discount": 33,
                    "comments": [
                        {
                            "username": "beauty_lover",
                            "message": "Great coverage and feels lightweight!"
                        }
                    ],
                    "support": 120,
                    "description": `Protection solaire pour le visage, adaptée à tous les types de peau Protection solaire pour le visage, adaptée à tous les types de peau`
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a27",
                    "name": "Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml",
                    "pictures": ["https://veranomedical.com/4364-large_default/fotoprotector-isdin-fusion-water-spf-50-50ml.jpg"],
                    "video": "https://via.placeholder.com/150/blush-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner125",
                        "name": "ISDIN"
                    },
                    "price": 220,
                    "oldPrice": 300,
                    "stars": 4.7,
                    "sales": 220,
                    "discount": 15,
                    "comments": [
                        {
                            "username": "rosy_cheeks",
                            "message": "Adds the perfect pop of color!"
                        }
                    ],
                    "support": 180,
                    "description": `Protection solaire pour le visage, adaptée à tous les types de peau.
                                    Fotoprotector ISDIN® Fusion Water SPF50+ est un écran solaire à l'indice de protection élevé à base d'eau offrant une protection invisible et fraîche à votre visage.
                                    Cette protection solaire, au toucher soyeux, protège la peau des rayons UVB, UVA et IR-A et offre une sensation de fraîcheur à votre peau. Elle est également une excellente base de maquillage, idéal pour un usage quotidien.
                                    Sa texture fluide et sans huile convient à toutes les peaux même mixtes ou grasses. Elle est absorbée rapidement et ne laisse aucune trace sur la peau. De plus, elle peut être appliquée sur la peau humide grâce à sa technologie Wet Skin. Ne pique pas les yeux.`
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a28",
                    "name": "EUCERIN SUN PROTECTION PIGMENT CONTROL ECRAN ANTI-PIGMENT SPF50+ 50ML",
                    "pictures": ["https://angelcare.ma/3559-thickbox_default/eucerin-sun-protection-pigment-control-ecran-anti-pigment-spf50-50ml.jpg"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "EUCERIN"
                    },
                    "price": 209.04,
                    "oldPrice": 312,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 33,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": "Eucerin Sun Protection Pigment Control SPF50+ 50 ml est un soin contenant une combinaison de filtres UVA/UVB pour une très haute protection contre les UV, et de la licochalcone A, un antioxydant qui agit sur les radicaux libres générés par les UV et la lumière visible de haute énergie pouvant induire une hyperpigmentation telles que des taches brunes."
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a29",
                    "name": "SENSILIS SUN SECRET FLUID ECRAN INVISIBLE ANTI-ÂGE SPF50+ 50ML",
                    "pictures": ["https://citymall-para.ma/wp-content/uploads/2022/05/Invisible-1-768x924.jpg"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "SENSILIS"
                    },
                    "price": 218.70,
                    "oldPrice": 364.50,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 33,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": "Cette une émulsion fluide à l’acide hyaluronique est vraiment indispensable pour votre peau sensible !Elle procure l’hydratation nécessaire dont vous avez besoin et enrichie en vitamine E, action antioxydante et Pro-Vita D3, qui favorise la synthèse de la vitamine D."
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a30",
                    "name": "Sensilis Ecran Solair SPF 50+ 40 Ml",
                    "pictures": ["https://makushop.ma/cdn/shop/products/Sensilis-Sun-Secret-Crema-Solar-Facial-Protectora-y-Antiedad-SPF50_-40-ml-sensilis-1676205170.jpg?v=1679274028"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "SENSILIS"
                    },
                    "price": 170.00,
                    "oldPrice": 300.00,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 43,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": "Sensilis Sun Secret Crème Solaire Visage Protectrice et Anti-Âge SPF50+ 40 ml Emulsion fluide à la texture soyeuse indiquée pour protéger la peau du visage du rayonnement solaire. Sa formule innovante avec DNA Safe Complex et filtres SPF50+ protège du rayonnement solaire et contrecarre le photovieillissement. Particulièrement indiqué pour les phototypes très clairs et les peaux sensibles ou les phototypes clairs en cas d'exposition prolongée. Convient pour prévenir l'apparition de taches. Formule résistante à l'eau, non comédogène et sans paraben. Avis pharmaceutique Il ne doit pas être exposé au soleil directement ou en milieu de journée. Les coups de soleil peuvent être dangereux."
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a31",
                    "name": "EUCERIN SUN OIL CONTROL SPF 50+ SUN GEL-CRÉME TOUCHER SEC 50 ML",
                    "pictures": ["https://parapharma.ma/44655-medium_default/eucerin-sun-oil-control-spf-50-sun-gel-creme-toucher-sec-50-ml.webp"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "EUCERIN"
                    },
                    "price": 169.00,
                    "oldPrice": 199.00,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 15,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": "Le Gel-Crème toucher sec Oil Control est conçu pour la protection du visage pour les peaux grasses à tendance acnéique.Sa très haute protection SPF50+ anti UVA et UVB protège la peau des effets néfastes du soleil, avec un effet anti-brillance et sans parfum. La protection solaire pour peau grasse  tendance acnéique Eucerin est conforme aux recommandations européennes.Fini sec et mat longue durée.Non comédogène.Peut être appliqué avant le maquillage.Sans parfum.Testé en condition de climats humides.Aide à protéger la peau des taches de pigmentation et du vieillissement cutané prématuré dû au soleil.Tolérance cuanée prouvée cliniquement sur les peaux sensibles à tendance acnéiques. "
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a32",
                    "name": "Bioderma Photoderm MAX Fluide SPF 100 40ml",
                    "pictures": ["https://citymall-para.ma/wp-content/uploads/2023/05/984781-bioderma-photoderm-max-fluid-spf100-40ml-2-800Wx800H.webp"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "Bioderma"
                    },
                    "price": 167.31,
                    "oldPrice": 253.50,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 15,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": `En plus de l’activité protectrice UVA/UVB de surface (systèmes filtrants) il offre une véritable protection biologique interne :  la Bioprotection™ Cellulaire. Ce brevet exclusif assure deux principales actions :
                                    La préservation et la stimulation des défenses de la peau (l’immunité) face au soleil.
                                    La protection biologique de l’intégrité de la peau au niveau génomique, cellulaire et tissulaire.
                                    L’abus de soleil est nuisible à la santé.:
                                    destiné aux Peaux sensibles ou intolérantes au soleil premièrement
                                    Pour Peaux très claires ponctuées de taches de rousseur certainement
                                    Peaux soumises à un ensoleillement extrême (haute montagne, tropiques…)
                                    Adapté aux peaux normales à mixtes.`
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a33",
                    "name": "Eucerin SUN CRÈME VISAGE SPF50+",
                    "pictures": ["https://www.gopara.ma/wp-content/uploads/2023/01/1.jpg"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "Eucerin"
                    },
                    "price": 185.00,
                    "oldPrice": 277.50,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 15,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": `EUCERIN Sun Sensitive. Sun crème. Très haute protection SPF 50+. 50ml.
                                    Protège les peaux sensibles et sèches des dommages cutanés induits par le soleil.
                                    Bonne tolérence cutanée sur les peaux sensibles, même celle à tendance atopique.
                                    Contient l’Advencer Spectral Technology : une combinaison de filtres UVA et UVB pour une très haute protection contre les UV, associée à de la Licochalcone A un antioxydant qui agit sur les radicaux libres générés par les UV et la lumière visible de haute énérgie.
                                    La formule contient également de l’Acid Gylcyrrhétinique qui aide à renforcer les mécanissmes naturels deprotection cellulaire et de reparation de l’ADN de la Peau`
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a34",
                    "name": "BIODERMA PHOTODERM MAX SPF100 FLUIDE TEINTE CLAIRE 40ML",
                    "pictures": ["https://angelcare.ma/3781-thickbox_default/bioderma-photoderm-max-spf100-creme-teinte-claire-40ml.jpg"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "BIODERMA"
                    },
                    "price": 176.88,
                    "oldPrice": 264.00,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 33,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": `Bioderma Photoderm Max Crème Teinté Claire assure une photoprotection maximale teintée du visage pour les peaux pathologiques :
                                    - Les peaux intolérantes à tous types d'ensoleillement ( photosensibles ), intolérances estivales bénignes.
                                    - les peaux laiteuses ponctuées de taches de rousseur ou éphélides ( phototype I ) et soumises à un ensoleillement maximum ( glaciers, tropiques ).
                                    - peaux hyperréactives au soleil : femme enceinte ( masque de grossesse ou chloasma ) , cicatrices ).
                                    - camouflage des troubles pigmentaires et des IMPERFECTIONS CUTANEES.
                                    Parfaitement adaptée aux peaux SECHES`
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a35",
                    "name": "EUCERIN ANTI-PIGMENT SERUM DUO 30ML",
                    "pictures": ["https://angelcare.ma/2280-thickbox_default/eucerin-anti-pigment-serum-duo-30ml-.jpg"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "Eucerin"
                    },
                    "price": 496.00,
                    "oldPrice": 740.29,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 33,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": `Le Sérum Duo ANTI-PIGMENT réduit les taches brunes et prévient leur réapparition. Votre peau est lumineuse et unifiée. Les premiers résultats sont visibles dès deux semaines*.
                                    * Evaluation clinique pendant 12 semaines sur 34 volontaires, application conjointe des soins Eucerin® Anti-Pigment Sérum Duo et Soin de Jour SPF30 2 fois par jour pendant 12 semaines.`
                },
                {
                    "id": "64d4f74e8e33a5f75d2b1a36",
                    "name": "Isdn Ecran Solaire FotoUltra Active Unify 50ml",
                    "pictures": ["https://makushop.ma/cdn/shop/files/isdn-ecran-solaire-FotoUltra-Active-Unify-50ml-_-ecran-solaire-ISDN---Makushop-1685054781.jpg?v=1685054783"],
                    "video": "https://via.placeholder.com/150/night-serum-video",
                    "category": "Cosmetics",
                    "owner": {
                        "id": "owner126",
                        "name": "ISDN"
                    },
                    "price": 250.00,
                    "oldPrice": 300.29,
                    "stars": 4.9,
                    "sales": 300,
                    "discount": 17,
                    "comments": [
                        {
                            "username": "nightowl",
                            "message": "Woke up with glowing skin after using this!"
                        }
                    ],
                    "support": 210,
                    "description": `ISDIN ecran solaire FotoUltra Active Unify , une crème solaire teintée innovante qui offre une protection solaire efficace tout en unifiant le teint de votre peau. Cette formule légère et non grasse combine une haute protection solaire SPF 50+ avec des pigments colorés pour camoufler les imperfections et uniformiser le teint.
                                    FotoUltra Active Unify Color aide à prévenir les dommages causés par les rayons UVA et UVB, tels que les coups de soleil et le vieillissement prématuré de la peau. En plus de sa protection solaire avancée, cette crème teintée contient des ingrédients dépigmentants qui aident à réduire les taches pigmentaires et à uniformiser le teint, donnant ainsi à votre peau un aspect plus lumineux et homogène.
                                    Sa texture légère et facile à appliquer permet une absorption rapide sans laisser de résidus gras. La teinte universelle s'adapte à la plupart des carnations, offrant un effet naturel et une couverture légère pour un teint unifié et radieux.`
                },

            ],

            selectedProduct: null,
        }
    },
    created() {
        this.selectedProduct = this.products.find(el => el.id === this.$route.params.id)
    },
}
</script>

<style scoped>
.breadcrumb {
    .breadcrumb-item {
        position: relative;

        &:first-child {
            margin-left: 0 !important;
        }

        &:not(:last-child):after {
            content: '/';
        }
    }
}
</style>