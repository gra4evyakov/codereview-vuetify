<script setup>
import TheWelcomeForm from '@/components/TheWelcomeForm.vue';
</script>

<template>
    <div class="home text-white">
        <v-container>
            <the-welcome-form />
        </v-container>
    </div>
</template>
<style scoped>
.home {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        0.092turn,
        rgba(32, 147, 254, 1) 0%,
        rgba(194, 23, 254, 1) 90%
    );
}
</style>
