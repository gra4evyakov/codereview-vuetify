<template>
    <v-card
        class="card pa-4 text-white"
        height="150"
        :image="`./images/${props.item.color}.webp`"
        rounded="lg"
    >
      <v-card-title class="font-weight-bold text-h5">
        {{ props.item.name }}
      </v-card-title>
    </v-card>
</template>

<script setup>
const props = defineProps({
    item: Object,
});

</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: end;
}
</style>