<template>
    <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-lg">
            <div class="p-4 py-6 text-white bg-blue-500 md:w-1/3 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                <div class="my-3 text-4xl font-bold tracking-wider text-center">
                    <RouterLink to="/">Nourghali Beauty</RouterLink>
                </div>
                <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
                    With the power of K-WD, you can now focus only on functionaries for your digital products, while
                    leaving the
                    UI design on us!
                </p>
                <p class="mt-8 text-sm text-white"> Avez-vous déjà un compte ?
                    <RouterLink class="text-white hover:text-indigo-700 font-semibold" to="/login">Se connetcer
                    </RouterLink>
                </p>
            </div>
            <div class="mx-auto md:py-10 p-5 ">
                <h1 class="text-lg font-bold text-gray-600 leading-tight lg:mt-10 mt-4">Enregistrez vos informations
                </h1>
                <button type="button"
                    class="w-full block bg-white mt-4 hover:bg-gray-50 duration-300 focus:bg-gray-50 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div class="flex items-center justify-center gap-4">
                        <icn name="google" class="w-5 h-5" />
                        <span class=" text-gray-600">
                            Connectez-vous avec Google</span>
                    </div>
                </button>
                <div class="lg:py-10 py-5 flex items-center">
                    <span class="w-full border-t border-black"></span>
                    <span class="text-center mx-2">Ou</span>
                    <span class="w-full border-t border-black"></span>
                </div>
                <form @submit.prevent="register" class="mt-4">
                    <div class="flex w-full justify-between mt-4">
                        <div class="w-full">
                            <label class="block text-gray-700 text-sm">Nom</label>
                            <input v-model="user.firstname" type="text" id="firstname" name="firstname"
                                placeholder="Entrez nom"
                                class="w-full px-4 py-3 rounded-lg bg-gray-50 mt-2 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none"
                                required>
                            <small v-if="errors.firstname" class="text-red-500 text-xs px-2"> {{ errors.firstname }}
                            </small>
                        </div>
                        <div class="w-2"></div>
                        <div class="w-full">
                            <label class="block text-gray-700 text-sm">Prénom </label>
                            <input v-model="user.lastname" type="text" name="lastname" placeholder="Enter prénom"
                                class="w-full px-4 py-3 rounded-lg bg-gray-50 mt-2 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none"
                                required>
                            <small v-if="errors.lastname" class="text-red-500 text-xs px-2"> {{ errors.lastname }}
                            </small>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700 text-sm">Adresse email</label>
                        <input type="email" v-model="user.email" name="email" placeholder="Entrez adresse email"
                            class="w-full px-4 py-3 rounded-lg bg-gray-50 mt-2 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none"
                            required>
                        <small v-if="errors.email" class="text-red-500 text-xs px-2"> {{ errors.email }} </small>
                    </div>
                    <div class="mt-4">
                        <label class="block text-left w-full mb-4">
                            <span class="text-gray-500 text-sm mb-1">Ville *</span>
                            <select v-model="user.country"
                                class="form-select px-2 py-3 border border-gray-100 bg-gray-50 rounded-lg block w-full text-sm text-gray-500 ">
                                <option value="">Select Country</option>
                                <option v-for="(country, index) in countries" :key="index" :value="country._id"> {{
                    country.name | capitalize }} </option>
                            </select>
                        </label>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700 text-sm">Mot de passe *</label>
                        <input v-model="user.password" type="password" name="password" placeholder="Enter mots de passe"
                            minlength="6"
                            class="w-full px-4 py-3 rounded-lg bg-gray-50 mt-2 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none"
                            required>
                        <small v-if="errors.password" class="text-red-500 text-xs px-2"> {{ errors.password }} </small>
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700 text-sm">Confirmer mots de passe *</label>
                        <input v-model="user.confirmedPassword" type="password" name="password"
                            placeholder="Confirmer mots de passe" minlength="6"
                            class="w-full px-4 py-3 rounded-lg bg-gray-50 mt-2 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none"
                            required>
                    </div>
                    <button :disabled="loading.submit" type="submit"
                        class="w-full disabled:opacity-50 block bg-blue-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: {
                countries: true,
                submit: false
            },
            countries: [],
            user: {
                type: "CUSTOMER",
                firstname: undefined,
                lastname: undefined,
                email: undefined,
                password: undefined,
                confirmedPassword: undefined,
                country: undefined,
            },
            errors: {}
        }
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
        },
        async register() {
        },
    },
}
</script>