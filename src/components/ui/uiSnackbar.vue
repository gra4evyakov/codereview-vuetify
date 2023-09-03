<template>
    <v-snackbar v-model="snackbar" :activator="props.activator" location="top" timeout="2000" :color="props.color">
        {{ props.message }}
    </v-snackbar>
</template>

<script setup>
import { watch } from 'vue';
import { ref } from 'vue';

const props = defineProps({
    isOpen: Boolean,
    message: String,
    activator: String,
    color: {
        type: String,
        default: 'red-darken-1'
    }
});

const snackbar = ref(false);
watch(() => props.isOpen, (newValue) => {
    snackbar.value = newValue;
})
</script>