<template>
    <v-card class="card py-2">
        <v-card-subtitle>{{ props.item.company_name }}</v-card-subtitle>
        <v-card-title
            :class="size === 'lg' ? 'font-weight-bold text-h5' : ''"
            >{{ props.item.vacancy_name }}</v-card-title
        >
        <v-card-text v-if="props.size !== 'lg'">{{
            props.item.description
        }}</v-card-text>
        <v-chip-group class="custom-chip">
            <v-chip v-if="props.item.remote">Удаленно</v-chip>

            <v-chip v-if="props.item.location">{{
                props.item.location
            }}</v-chip>

            <v-chip v-if="props.item.salary && props.size !== 'lg'"
                >{{ props.item.salary }}р</v-chip
            >
        </v-chip-group>
    </v-card>
</template>

<script setup>
const props = defineProps({
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
