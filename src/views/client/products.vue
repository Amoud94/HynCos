<template>
    <div class="w-full">
        <div class="lg:py-10 py-5 flex items-center">
            <span class="w-full border-t lg:border-2 border-black"></span>
            <span
                class="w-full text-center mx-2 text-lg lg:text-3xl font-base font-[titillium-web-black] uppercase">notre
                galerie de produits</span>
            <span class="w-full border-t lg:border-2 border-black"></span>
        </div>
        <div class="w-full flex items-center lg:gap-5 gap-3 justify-evenly flex-wrap lg:my-10">
            <div class="grow max-w-[40%] lg:max-w-[20%] inline-flex lg:min-w-[20%] rounded-md hover:border-2 hover:border hover:border-yellow-600 overflow-hidden"
                v-for="product in products" @click="goTo({ name: 'produits-detail', params: { id: product.id } })">
                <div class="cursor-pointer relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                    <!-- heart -->
                    <div class="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                        <div>
                            <span
                                class="absolute top-[4px] right-[4px] w-[24px] h-[24px] text-center z-10 rounded-full bg-gray-200">
                                <div
                                    class="absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center">
                                    <icn name="heart" class="h-4 w-4 fill-current m-auto" />
                                </div>
                            </span>
                        </div>
                    </div>
                    <!-- end heart -->
                    <div class="relative shadow-md rounded-lg min-w-full flex flex-col">
                        <!-- img product -->
                        <div
                            class="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden pb-5">
                            <div
                                class="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                <img :src="product.pictures[0]" alt="">
                            </div>
                        </div>

                        <!-- end img product -->
                        <div class="relative p-2 box-border overflow-hidden grow">
                            <!-- product name -->
                            <div
                                class="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words pb-5">
                                {{ product.name }}
                            </div>
                            <!-- end product name -->
                            <!-- price -->
                            <div>
                                <div class="block w-full text-sm font-bold text-amber-700">
                                    {{ product.price }} MAD
                                </div>
                            </div>
                            <!-- end price -->
                            <!-- store name -->
                            <p class="mx-0 my-1 text-gray-600 line-clamp-3">
                                {{ product.description }}
                            </p>
                            <!-- end store name -->
                            <!-- rating -->
                            <div class="min-h-[14px] text-xs">
                                <div class="align-items-center my-1 mx-0">
                                    <i class="fa-solid fa-star" style="color: #7a7600;"></i>
                                    <i class="fa-solid fa-star" style="color: #7a7600;"></i>
                                    <i class="fa-solid fa-star" style="color: #7a7600;"></i>
                                    <i class="fa-solid fa-star" style="color: #7a7600;"></i>
                                    <i class="fa-solid fa-star" style="color: #7a7600;"></i>
                                    <span class="align-midle ml-1 text-gray-600">
                                        {{ product.owner.name }}
                                    </span>
                                </div>
                            </div>
                            <!-- end rating -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'products',
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
        }
    },
    methods: {
        goTo(payload) {
            this.$router.push({ name: payload.name, params: payload.params });
        },
    }
}
</script>