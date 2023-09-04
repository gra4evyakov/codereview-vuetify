<template>
    <div class="text-center">
        <v-menu v-model="menu" :close-on-content-click="false" location="end">
            <template v-slot:activator="{ props }">
                <v-btn color="white" v-bind="props" icon="mdi-menu"></v-btn>
            </template>
            <div class="px-2 py-2 bg-white rounded">
                <template v-if="!auth.isLoggedIn.value">
                    <v-btn
                        v-for="item in list"
                        :key="item.text"
                        class="w-100 d-flex justify-start"
                        size="large"
                        variant="text"
                        :prepend-icon="item.icon"
                        @click="handleItemClick(item)"
                    >
                        {{ item.text }}
                        <ui-popup
                            v-if="item.type !== 'google'"
                            :type="item.type"
                        />
                    </v-btn>
                </template>
                <template v-else>
                    <v-row class="flex-column align-center" no-gutters>
                        <v-col cols="12" class="text-center mb-2">
                            <v-avatar
                                v-if="auth.currentUser.value.photoURL"
                                :image="auth.currentUser.value.photoURL"
                                size="40"
                            />
                        </v-col>
                        <v-col cols="12" class="d-flex justify-center mb-2">
                            <span
                                v-if="
                                    auth.currentUser.value.displayName ??
                                    auth.currentUser.value.email
                                "
                                class="text-h6"
                                >{{
                                    auth.currentUser.value.displayName ??
                                    auth.currentUser.value.email
                                }}</span
                            >
                        </v-col>
                    </v-row>
                    <v-btn
                        color="primary"
                        class="w-100"
                        size="large"
                        variant="text"
                        prepend-icon="mdi-logout"
                        @click="auth.logoutUser"
                    >
                        Выход
                    </v-btn>
                </template>
            </div>
        </v-menu>
    </div>
</template>

<script setup>
import { ref } from "vue";
import uiPopup from "./uiPopup.vue";
import { useFirebase } from "@/hooks/useFirebase";

defineProps({
    list: Array,
});

const auth = useFirebase();

const handleItemClick = (item) => {
  if (item.type === 'google') {
    auth.loginWithGoogle();
  }
};
const menu = ref(false);
</script>
