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
    <v-app-bar class="text-white" rounded>
        <template v-slot:image>
            <v-img
                gradient="to top right, rgba(32,147,254,1), rgba(194,23,254,1)"
            ></v-img>
        </template>
        <v-app-bar-title>
            <router-link to="/">
                <svg-logo />
            </router-link>
        </v-app-bar-title>
        <template #append>
            <v-btn
                v-if="!drawer"
                class="d-md-none"
                icon="mdi-menu"
                @click="handlerNav"
            />

            <Teleport v-if="$vuetify.display.mdAndDown" to="#header-links">
                <v-btn v-for="link in links" :key="link.title" :href="link.url">
                    {{ link.title }}
                </v-btn>
                <v-btn
                    v-if="!auth.isLoggedIn.value"
                    size="large"
                    :to="{ path: '/login', query: { type: 'register' } }"
                >
                    Регистрация
                </v-btn>
                <v-btn
                    v-else
                    size="large"
                    @click="auth.logoutUser()"
                >
                    Выйти
                </v-btn>
            </Teleport>
            <div v-if="$vuetify.display.mdAndUp">
                <v-btn v-for="link in links" :key="link.title" :href="link.url">
                    {{ link.title }}
                </v-btn>
                <v-btn
                    v-if="!auth.isLoggedIn.value"
                    size="large"
                    variant="elevated"
                    :to="{ path: '/login', query: { type: 'register' } }"
                >
                    Регистрация
                </v-btn>
                <v-btn
                    v-else
                    size="large"
                    variant="elevated"
                    @click="auth.logoutUser()"
                >
                    Выйти
                </v-btn>
            </div>
        </template>
    </v-app-bar>
</template>
