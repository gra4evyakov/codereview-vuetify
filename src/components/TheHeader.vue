<script setup>
import { ref } from "vue";

import svgLogo from "./icons/svgLogo.vue";
import TheNavigation from "./TheNavigation.vue";
import { useFirebase } from "@/hooks/useFirebase";

const auth = useFirebase();
const drawer = ref(false);

const links = [
    {
        title: "Комьюнити",
        url: "https://t.me/YourCodeReview",
    },
    {
        title: "Полезные материалы",
        url: "https://blog.yourcodereview.com/category/career/",
    },
    {
        title: "Блог",
        url: "https://blog.yourcodereview.com/",
    },
];

const list = [
    { text: "Регистрация", icon: "mdi-import", type: "register" },
    { text: "Авторизация", icon: "mdi-account", type: "login" },
    { text: "Google Account", icon: "mdi-google", type: "google" },
];

const handlerNav = () => {
    drawer.value = !drawer.value;
};
</script>

<template>
    <v-navigation-drawer
        v-if="$vuetify.display.mdAndDown"
        v-model="drawer"
        location="right"
        class="rounded"
    >
        <v-layout class="pb-1 pt-3 pr-3 justify-end">
            <v-btn icon="mdi-close" size="x-small" @click="handlerNav" />
        </v-layout>
        <the-navigation :list="list" />
    </v-navigation-drawer>
    <v-app-bar class="text-white" :elevation="8" height="70">
        <template v-slot:image>
            <v-img
                gradient="to top right, rgba(32 147 254 / 80%), rgba(194 23 254 / 80%) 90%"
            ></v-img>
        </template>
        <div class="container">
            <v-row>
                <v-col
                    cols="11"
                    sm="10"
                    md="4"
                    lg="3"
                    class="d-flex justify-start align-center"
                >
                    <v-app-bar-title>
                        <router-link to="/" class="d-flex">
                            <svg-logo />
                        </router-link>
                    </v-app-bar-title>
                </v-col>
                <v-col
                    cols="1"
                    sm="2"
                    md="8"
                    lg="9"
                    class="d-flex justify-end align-center"
                >
                    <v-btn
                        v-if="!drawer"
                        class="d-md-none"
                        icon="mdi-menu"
                        @click="handlerNav"
                    />

                    <Teleport
                        v-if="$vuetify.display.mdAndDown"
                        to="#header-links"
                    >
                        <v-btn
                            class="px-1"
                            v-for="link in links"
                            :key="link.title"
                            :href="link.url"
                            size="large"
                            block
                        >
                            {{ link.title }}
                        </v-btn>
                        <v-btn
                            v-if="!auth.isLoggedIn.value"
                            class="px-1"
                            :to="{
                                path: '/login',
                                query: { type: 'register' },
                            }"
                            size="large"
                            block
                        >
                            Регистрация
                        </v-btn>
                        <v-btn 
                            v-else
                            class="px-1"
                            size="large"
                            @click="auth.logoutUser()"
                            block
                        >
                            Выйти
                        </v-btn>
                    </Teleport>
                    <div v-if="$vuetify.display.mdAndUp">
                        <v-btn
                            class="px-md-1 px-lg-4"
                            v-for="link in links"
                            :key="link.title"
                            :href="link.url"
                        >
                            {{ link.title }}
                        </v-btn>
                        <v-btn
                            class="px-md-1 px-lg-4"
                            v-if="!auth.isLoggedIn.value"
                            variant="elevated"
                            :to="{
                                path: '/login',
                                query: { type: 'register' },
                            }"
                        >
                            Регистрация
                        </v-btn>
                        <v-btn
                            class="px-md-1 px-lg-4"
                            v-else
                            variant="elevated"
                            @click="auth.logoutUser()"
                        >
                            Выйти
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-app-bar>
</template>
