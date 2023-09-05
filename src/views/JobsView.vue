<script setup>
import TheList from "@/components/TheList.vue";
import TheTools from "@/components/TheTools.vue";
</script>

<template>
    <div class="container">
        <v-row justify-sm="center" justify-md="start">
            <v-col
                cols="12"
                md="3"
                sm="10"
                lg="3"
                class="d-flex flex-column align-end"
            >
                <the-tools />
            </v-col>
            <v-col cols="12" md="6" sm="10" lg="6" class="d-flex flex-column">
                <the-list />
            </v-col>
        </v-row>
    </div>
</template>
