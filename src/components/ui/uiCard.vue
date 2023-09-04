<template>
<v-hover v-slot="{ isHovering, props }">
    <v-card class="card py-2" v-bind="props" :elevation="isHovering ? 10 : 1">
        <v-card-subtitle>{{ item.company_name }}</v-card-subtitle>
        <v-card-title   
            :class="size === 'lg' ? 'font-weight-bold text-h5' : ''"
            >{{ item.vacancy_name }}</v-card-title
        >
        <v-card-text v-if="size !== 'lg'" class="pb-0">{{
            item.specialty
        }}</v-card-text>
        <v-chip-group class="custom-chip">
            <v-chip v-if="item.remote">Удаленно</v-chip>

            <v-chip v-if="item.location">{{
                item.location
            }}</v-chip>

            <v-chip v-if="item.salary && size !== 'lg'"
                >{{ item.salary }}р</v-chip
            >
        </v-chip-group>
    </v-card>
</v-hover>
</template>

<script setup>
defineProps({
    item: Object,
    size: {
        type: String,
        default: "md",
    },
});
</script>

<style scoped>
.custom-chip {
    padding: 0.5rem 1rem;
}
</style>
