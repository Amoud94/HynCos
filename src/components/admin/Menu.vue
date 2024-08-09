<template>
    <div>
        <div v-if="isOpened" @click="isOpened = false" class="fixed inset-0 h-full w-full z-10 "></div>
        <div class="sidebar border-r border-gray-200" :class="isOpened ? 'open' : ''">
            <div
                style="display: flex ; flex-direction:column; justify-content: space-between; flex-grow: 1; max-height: calc(100% - 35px); ">
                <div id="my-scroll" style="margin:10px 14px;">
                    <ul style="overflow: visible;">
                        <span v-for="(menuItem, index) in searchResult" :key="index" @click="toggleMenu(menuItem)" v-if="checkPermission(menuItem.permission)">
                            <li>
                                <a class="relative cursor-pointer"
                                    :class="[isSelectedMenu(menuItem) ? 'text-[#03A9F4]' : 'text-gray-500']">
                                    <span class="h-2 w-2 rounded-full bg-red-500 absolute bottom-2 right-2" v-if="!isOpened && menuItem.link && menuItem.link.includes('/chat') && !$route.path.includes('/chat') && chatUnreadMessagesCount && chatUnreadMessagesCount.count > 0"></span>
                                    <span class="h-2 w-2 rounded-full bg-red-500 absolute bottom-2 right-2" v-if="!isOpened  && $store.state.user.type =='admin' && menuItem.name == 'Support' && !$route.path.includes('/support/chat') && chatUnreadMessagesCount && chatUnreadMessagesCount.count > 0"></span>
                                    <span class="h-2 w-2 rounded-full bg-red-500 absolute bottom-2 right-2" v-if="!isOpened && menuItem.link && menuItem.link.includes('/demandes') && !$route.path.includes('/demandes') && pendingDemandesCount && pendingDemandesCount.count > 0"></span>
                                    <span>
                                        <icn :name="menuItem.icon" class="icn fill-current" />
                                    </span>

                                    <span v-if="menuItem.link">
                                        <RouterLink active-class="footer-active" :class="[path === menuItem.link ? 'text-[#03A9F4]' : 'text-gray-500']" :to="menuItem.link">
                                            <span @click="navigateTo(menuItem)" class="links_name">
                                                {{ menuItem.name }}
                                            </span>
                                        </RouterLink>
                                          <!--  <span class="rounded-full text-xs text-red-500 absolute top-3 font-bold right-2" v-if="menuDemandes.child.link === child.link && isOpened ">{{ menuDemandes.child.count }}</span> -->
                                    </span>

                                    <span v-if="menuItem.link === undefined" class="links_name" @click="menuItem === showSubMenu ? (showSubMenu = null) : (showSubMenu = menuItem)">
                                        {{ menuItem.name }}
                                    </span>

                                    <span class="absolute right-5" @click="menuItem === showSubMenu ? (showSubMenu = null) : (showSubMenu = menuItem)"  v-if="isOpened && menuItem.link == undefined">
                                        <icn name="chevron" :class="menuItem === showSubMenu && 'rotate-180'" class="w-3 h-3 fill-current" />
                                    </span>
                                    <span class="rounded-full text-sm text-red-500 border-red-500 border-2 px-1.5 absolute font-bold right-4" v-if="menuItem.link && menuItem.link.includes('/chat') && isOpened && !$route.path.includes('/chat') && chatUnreadMessagesCount && chatUnreadMessagesCount.count">{{ chatUnreadMessagesCount.count }}</span>
                                    <span class="rounded-full text-sm text-red-500 border-red-500 border-2 px-1.5 absolute font-bold right-4" v-if="menuItem.link && menuItem.link.includes('/demandes') && isOpened && !$route.path.includes('/demandes') && pendingDemandesCount && pendingDemandesCount.count">{{ pendingDemandesCount.count }}</span>

                                </a>
                                <div class="pl-6" v-if="isOpened && menuItem.children">
                                    <ul class="flex flex-col text-gray-500 cursor-pointer" :class="[{ 'hidden': menuItem !== showSubMenu }]">
                                        <li v-for="(child, index) in menuItem.children" :key="index"  @click="navigateTo(child)"  v-if="checkPermission(child.permission)" class="flex items-center">
                                            <RouterLink class="pl-6 py-2 text-sm" active-class="active"  :class="[path === child.link ? 'text-[#03A9F4] border-l-2 border-[#03A9F4]' : 'text-gray-500 border-l border-gray-500']" :to="child.link">
                                                {{ child.name }}
                                            </RouterLink>

                                            <span class="rounded-full text-sm text-red-500 border-red-500 border-2 px-1.5 py-0 font-bold " v-if="child.link && child.link.includes('/support/chat') && isOpened && !$route.path.includes('/support/chat') && chatUnreadMessagesCount && chatUnreadMessagesCount.count">{{ chatUnreadMessagesCount.count }}</span>

                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </span>
                    </ul>
                </div>
                <div class="px-6">
                    <hr class="border-gray-700" />
                </div>
                <div style="margin: 0px 14px 0 14px; ">
                    <ul style="overflow: hidden;">
                        <span v-for="(menuItem, index) in footerMenuItems" :key="index" @click="toggleMenu(menuItem)"  v-if="checkPermission(menuItem.permission)">
                            <li class="flex items-center cursor-pointer" :class="[path.includes(menuItem.link) ? 'text-[#03A9F4]' : 'text-gray-500']" >
                                <span>
                                    <icn :name="menuItem.icon" class="fill-current h-10 w-10 icn" />
                                </span>

                                <RouterLink class="links_name" active-class="footer-active" :to="menuItem.link"  v-if="isOpened">
                                    <span @click="navigateTo(menuItem)">{{ menuItem.name }}</span>
                                </RouterLink>
                            </li>
                        </span>
                        <span @click="isOpened = !isOpened">
                            <li class="flex items-center cursor-pointer text-gray-500" v-if="supportSideMenuu" >
                                <div class="relative">
                                    <icn name="info-menu" class="fill-current h-10 w-10 icn" />
                                    <div v-if="messagesNotSeen && !isOpened"
                                        class="shadow-lg w-2 h-2 bg-red-500 rounded-full border border-white absolute bottom-2 right-2">
                                    </div>
                                </div>  
                                <div class="links_name" v-if="isOpened" @click="$store.state.isSupportSlideOpen = true">
                                    <span>Support</span>
                                </div>
                                
                            </li>
                            <li class="flex items-center cursor-pointer text-gray-500" v-else>
                                <span>
                                    <icn name="logout" class="fill-current h-10 w-10 icn" />
                                </span>
                                <div class="links_name" v-if="isOpened" @click="logout">
                                    <span>Se déconnecter</span>
                                </div>
                            </li>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'SidebarMenu',
    props: {
        //! Menu settings
        isMenuOpen: {
            type: Boolean,
            default: false,
        },
        isPaddingLeft: {
            type: Boolean,
            default: true,
        },
        menuOpenedPaddingLeftBody: {
            type: String,
            default: '270px'
        },
        menuClosedPaddingLeftBody: {
            type: String,
            default: '100px'
        },
        supportSideMenuu:{
            type: Boolean,
            default: false,
        },
        //! Menu items
        menuItems: {
            type: Array,
            default: () => [
            ],
        },

        footerMenuItems: {
            type: Array,
            default: () => [
            ],
        }
    },
    data() {
        return {
            menuItem: null,
            path: null,
            isOpened: false,
            searchInput: '',
            showSubMenu: {},
        }
    },
    created() {
        this.path = this.$route.path
        this.isOpened = this.isMenuOpen
    },
    computed: {
        messagesNotSeen() {
            let number = 0;
            let chatObj = this.$store.state.chatSuppport;
            if (chatObj.messages && chatObj.messages.length > 0) {
                chatObj.messages.forEach(message => {
                    if (!message.seenAt && message.user._id != this.$store.state.user._id) number++;
                });
            }
            return number;
        },
        chatUnreadMessagesCount(){
            return this.$store.state.admin.chatUnreadMessagesCount
        },
        pendingDemandesCount(){
            return this.$store.state.admin.clientsDemandesCount
        },
        searchResult() {
            let tmp = this.menuItems
            if (this.searchInput != '') {
                tmp = tmp.filter((item) => {
                    let res = item.children.filter(el => el.name.toUpperCase().includes(this.searchInput.toUpperCase()))
                    if (res.length > 0) return item
                })
            }
            return tmp
        },
    },
    watch: {
        '$route.path': {
            handler: function (value) {
                this.path = value
            },
            deep: true,
            immediate: true
        },
        isOpened() {
            document.getElementById('main_page_admin').style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody
        }
    },
    methods: {
        navigateTo(payload) {
            if (payload.link != this.path && payload.link != '#') {
                this.path = payload.link
                this.$store.dispatch('setLoadingValue', true)
                // this.isOpened = false
            }
        },
        logout() {
            window.localStorage.removeItem('x-auth-token')
            window.localStorage.removeItem('x-refresh-token')
            window.open('/login', '_self')
        },

        isSelectedMenu(value) {
            return value.children.length > 0 ? (value.children.filter(el => this.path.includes(el.link)).length > 0 ? true : false ): (this.path.includes(value.link) ? true : false)
        },
        toggleMenu(value) {
            this.menuItem === value ? (this.isOpened = false, this.menuItem = null, this.showSubMenu = null) : (this.isOpened = true, this.menuItem = value, this.showSubMenu = value)
        }
    }
}
</script>
  
<style scoped>
/* Google Font Link */
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

#main_page {
    transition: all 0.5s ease;
}


.sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-top: 10px;
    height: 97%;
    min-height: min-content;
    width: 78px;
    background: white;
    z-index: 99;
    transition: all 0.2s ease;
}

.sidebar.open {
    width: 250px;
}

.sidebar i,
.icn {
    height: 80px;
    min-width: 36px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
}


.sidebar li {
    position: relative;
    margin: 0 5px;
    list-style: none;
}

.sidebar input {
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.2s ease;
    background: #1d1b31;
}

.sidebar.open input {
    padding: 0 20px 0 50px;
    width: 100%;
}

.sidebar .bx-search {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 22px;
    background: #1d1b31;
    color: #fff;
}

.sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease;
    background: white;
}

.sidebar li .links_name {
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.2s ease;
}

.sidebar.open li .links_name {
    opacity: 1;
}


.sidebar li i,
.icn {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
}


#my-scroll {
    overflow-y: auto;
    height: calc(100% - 35px);
}

#my-scroll::-webkit-scrollbar {
    display: none;
}

.footer-active {
    color: #03A9F4
}

.active {
    color: #03A9F4;
    border-left: 2px solid;
    border-color: #03A9F4
}</style>