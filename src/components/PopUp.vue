<template>
    <transition name="fadeffect">
        <div v-if="active" class="fixed z-20 inset-0 overflow-y-auto popup" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0" style="min-height: 100vh;">
                <div class="fixed inset-0" style="background: #00000025;" @click="closePopUp()"></div>
                <span class="hidden sm:inline-block align-middle sm:h-screen" aria-hidden="true">&#8203;</span>        
                <div class="inline-block transform transition-all sm:my-8 align-middle w-full relative" :style="getWidth()" >
                    <div v-if="!hideCancel" class="cursor-pointer rounded-full absolute bg-white" @click="closePopUp()" style="right:-0.4rem;top:-0.4rem" >
                        <icn name="close" class="h-5 w-5 fill-current text-red-500" />
                    </div>
                    <div class="inline-block text-left rounded-lg text-left shadow-xl w-full">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props:['active','size','hideCancel','removable'],
    methods: {
        getWidth(){
            let size = 40;
            switch (this.size) {
                case "xs":
                    size = 25;
                    break;
                case "sm":
                    size = 35;
                    break;
                case "md":
                    size = 40;
                    break;
                case "lg":
                    size = 60;
                    break;
                case "xl":
                    size = 70;
                    break;
                    case "xxl":
                    size = 90;
                    break;
            }
            return {
                "maxWidth": `${size}rem`,
            }
            
        },
        closePopUp(){
            if (this.removable) this.$emit('update:active', false);
        }
    },
}
</script>

<style>
.fadeffect-enter-active, .fadeffect-leave-active { transition: opacity .3s; }
.fadeffect-enter, .fadeffect-leave-active { opacity: 0; }
</style>