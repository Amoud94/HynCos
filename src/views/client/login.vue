<template>
    <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-lg">
            <div
                class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                <div class="my-3 text-4xl font-bold tracking-wider text-center">
                    <RouterLink to="/">Nourghali Beauty</RouterLink>
                </div>
                <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
                    With the power of K-WD, you can now focus only on functionaries for your digital products, while
                    leaving the
                    UI design on us!
                </p>
                <p class="flex flex-col items-center justify-center mt-10 text-center">
                    <span>Besoin d'un compte ?</span>
                    <RouterLink class="underline" to="/register">
                        Créer un compte
                    </RouterLink>
                </p>
            </div>
            <div class="p-5 bg-white md:flex-1">
                <h1 class="text-lg text-gray-600 font-bold leading-tight my-5">
                    Connectez-vous à votre compte</h1>
                <form action="#" class="flex flex-col space-y-5">
                    <div class="flex flex-col space-y-1">
                        <label for="email" class="text-sm font-semibold text-gray-500">Adresse email</label>
                        <input type="email" id="email" autofocus
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <div class="flex items-center justify-between">
                            <label for="password" class="text-sm font-semibold text-gray-500">Mots de passe</label>
                            <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Mot de passe oublié ?</a>
                        </div>
                        <input type="password" id="password"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                            Se connecter
                        </button>
                    </div>
                    <div class="flex flex-col space-y-5">
                        <span class="flex items-center justify-center space-x-2">
                            <span class="h-px bg-gray-400 w-14"></span>
                            <span class="font-normal text-gray-500">ou</span>
                            <span class="h-px bg-gray-400 w-14"></span>
                        </span>
                        <button type="button"
                            class="w-full block bg-white  mt-4 hover:bg-gray-50 duration-300 focus:bg-gray-50 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                            <div class="flex items-center justify-center gap-4">
                                <Icn name="google" class="w-5 h-5" />
                                <span class="text-gray-600">
                                    Connectez-vous avec Google</span>
                            </div>
                        </button>
                    </div>
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
                submit: false
            },
            user: {
                email: undefined,
                password: undefined
            },
            errors: {}
        }
    },
    mounted() { },
    methods: {
        // async login() {
        //     this.loading.submit = true;
        //     this.errors = {};
        //     this.alert = undefined;
        //     if (this.validatForm(this.user)) {
        //         try {
        //             const resp = await this.$http.post("/users/login", this.user);
        //             window.localStorage.setItem("x-auth-token", resp.data.accessToken);
        //             window.localStorage.setItem("x-refresh-token", resp.data.refreshToken);
        //             if (resp.data.account.type == 'regular') {
        //                 if (resp.data.user.type == 'admin' || resp.data.user.type == 'sous_admin') {
        //                     window.location = '/admin/dashboard'
        //                 } else if (resp.data.user.type == 'client') {
        //                     window.location = '/customer/reservations'
        //                 } else if (resp.data.user.type == 'agent') {
        //                     window.location = '/driver/calendar'
        //                 } else if (['garagiste', 'sous_garagiste'].includes(resp.data.user.type)) {
        //                     window.location = '/garagiste/calendar'
        //                 } else if (resp.data.user.type == 'commercial') {
        //                     window.location = '/commercial/calendar'
        //                 }

        //             } else window.location = '/superAdmin/dashboard';

        //         } catch (error) {
        //             console.log(error);
        //             if (typeof error.response.data == "object") {
        //                 let errors = error.response.data;
        //                 let key = Object.keys(errors)[0];
        //                 let message_error = `${errors[key]}`;
        //                 this.$set(this.errors, key, message_error);
        //                 this.$toast(this.$t(message_error), { type: "error" });
        //             } else {
        //                 this.$set(this.errors, 'global', this.$t('errors_login'));
        //                 this.$toast(this.$t('errors_login'), { type: "error" });
        //             }

        //             this.loading.submit = false;
        //         }

        //     }
        // },
        // validatForm(user) {
        //     let valid = true;
        //     if (user.password && user.password.length < 3) {
        //         this.errors.password = "invalid_password";
        //         valid = false;
        //     }
        //     if (user.email && user.email.length < 3) {
        //         this.errors.email = "invalid_email";
        //         valid = false;
        //     }
        //     return valid;
        // },
    },
}
//login
</script>