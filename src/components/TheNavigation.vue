<template>
    <div>
      <template v-if="!auth.isLoggedIn.value">
        <v-list v-for="groupItem in list" :key="groupItem.group">
          <v-list-subheader class="justify-center font-weight-bold">
            {{ groupItem.group }}
          </v-list-subheader>
          <v-btn
            v-for="item in groupItem.list"
            :key="item.text"
            class="w-100"
            size="large"
            variant="text"
            :prepend-icon="item.icon"
            @click="handleItemClick(item)"
          >
            {{ item.text }}
            <ui-popup v-if="item.type !== 'google'" :type="item.type" />
          </v-btn>
        </v-list>
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
            <span v-if="auth.currentUser.value.displayName ?? auth.currentUser.value.email" class="text-h6">{{
              auth.currentUser.value.displayName ?? auth.currentUser.value.email
            }}</span>
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
  </template>

<script setup>
import uiPopup from "./ui/uiPopup.vue";
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
</script>
