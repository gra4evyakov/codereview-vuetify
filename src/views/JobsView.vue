<script setup>
import TheList from '@/components/TheList.vue';
import TheTools from '@/components/TheTools.vue';
</script>

<template>
  <v-container class="px-4 pb-8">
    <v-row justify-sm="center" justify-md="start">
      <v-col cols="12" md="3" sm="10">
        <the-tools />
      </v-col>
      <v-col cols="12" md="6" sm="10">
        <the-list />
      </v-col>
    </v-row>
  </v-container>
</template>