<script setup>
import { ref } from "vue";
import TheNavigation from "./TheNavigation.vue";

const drawer = ref(false);

const list = [
    {
        group: "Регистрация",
        list: [{ text: "Регистрация", icon: "mdi-import", type: "register" }],
    },
    {
        group: "Авторизация",
        list: [
            { text: "Авторизация", icon: "mdi-account", type: "login" },
            { text: "Google Account", icon: "mdi-google", type: "google" },
        ],
    },
];

const handlerNav = () => {
    drawer.value = !drawer.value;
};
</script>

<template>
    <v-navigation-drawer v-model="drawer" location="right">
        <v-layout class="pb-1 pt-3 pr-3 justify-end">
            <v-btn icon="mdi-close" size="small" @click="handlerNav" />
        </v-layout>
        <the-navigation :list="list" />
    </v-navigation-drawer>
    <v-app-bar class="text-white">
        <template v-slot:image>
            <v-img
                gradient="to top right, rgba(32,147,254,1), rgba(194,23,254,1)"
            ></v-img>
        </template>
        <v-app-bar-title>
            <router-link to="/">&#60; codereview jobs &#47;&#62;</router-link>
        </v-app-bar-title>
        <v-btn v-if="!drawer" icon="mdi-menu" @click="handlerNav" />
    </v-app-bar>
</template>
