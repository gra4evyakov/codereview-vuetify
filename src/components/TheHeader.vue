<script setup>
import { ref } from "vue";
import { useFirebase } from "@/hooks/useFirebase";

import svgLogo from "./icons/svgLogo.vue";
import TheNavigation from "./TheNavigation.vue";

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
            <v-btn icon="mdi-close" @click="handlerNav" />
        </v-layout>
        <the-navigation :links="links" />
    </v-navigation-drawer>
    <v-app-bar class="text-white" :elevation="8" height="70">
        <template v-slot:image>
            <v-img
                gradient="to top right, rgba(32 147 254 / 80%), rgba(220 23 254 / 80%) 90%"
            ></v-img>
        </template>
        <div class="container">
            <v-row>
                <v-col
                    cols="11"
                    sm="4"
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
                    sm="8"
                    md="8"
                    lg="9"
                    class="d-flex justify-end align-center"
                >
                    <the-navigation
                        v-if="$vuetify.display.lgAndUp"
                        :links="links"
                    />
                    <Teleport v-if="$vuetify.display.mdAndDown" to="#navigation-button">
                        <v-btn
                            class="px-4 mx-1 mx-lg-2 mb-2"
                            @click="auth.logoutUser()"
                        >
                            Карьерная поддержка
                        </v-btn>
                        <v-btn
                            class="px-4 mx-1 mx-lg-2"
                            v-if="!auth.isLoggedIn.value"
                            :to="{
                                path: '/login',
                                query: { type: 'register' },
                            }"
                        >
                            Регистрация
                        </v-btn>
                        <v-btn
                            class="px-4 mx-1 mx-lg-2"
                            v-else
                            variant="elevated"
                            @click="auth.logoutUser()"
                        >
                            Выйти
                        </v-btn>
                    </Teleport >
                    <template v-if="$vuetify.display.mdAndUp">
                        <v-btn
                            color="lime"
                            class="px-4 mx-1 mx-lg-2"
                            variant="elevated"
                            @click="auth.logoutUser()"
                        >
                            Карьерная поддержка
                        </v-btn>
                        <v-btn
                            v-if="!auth.isLoggedIn.value"
                            class="px-4 mx-1 mx-lg-2"
                            variant="elevated"
                            :to="{
                                path: '/login',
                                query: { type: 'register' },
                            }"
                        >
                            Регистрация
                        </v-btn>
                        <v-btn
                            class="px-2 mx-1 mx-lg-2"
                            v-else
                            variant="elevated"
                            @click="auth.logoutUser()"
                        >
                            Выйти
                        </v-btn>
                    </template>
                    <v-btn
                        class="d-lg-none"
                        size="x-large"
                        icon="mdi-menu"
                        @click="handlerNav"
                    />
                </v-col>
            </v-row>
        </div>
    </v-app-bar>
</template>
