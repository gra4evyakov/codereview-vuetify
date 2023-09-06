<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card
            v-bind="props"
            class="py-4 mx-auto"
            :class="`card-${size}`"
            :elevation="isHovering && size === 'md' ? 10 : 3"
            rounded="xl"
        >
            <v-card-subtitle class="font-weight-bold">{{
                item.company_name
            }}</v-card-subtitle>
            <v-card-title
                class="font-weight-bold"
                :class="size === 'lg' ? 'text-h5' : ''"
                >{{ item.vacancy_name }}</v-card-title
            >
            <v-card-text v-if="size !== 'lg'" class="pb-0">{{
                item.specialty
            }}</v-card-text>
            <v-chip-group class="custom-chips">
                <v-chip
                    v-if="item.remote"
                    class="chip"
                    prepend-icon="mdi-wifi"
                    label
                    >Удаленно</v-chip
                >

                <v-chip
                    v-if="item.location"
                    class="chip"
                    prepend-icon="mdi-map-marker"
                    label
                    >{{ item.location }}</v-chip
                >

                <v-chip v-if="item.salary && size !== 'lg'" class="chip" label
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
.card-md {
    max-width: 600px;
}
.card-lg {
    max-width: 100%;
}
.custom-chips {
    padding: 0.5rem 1rem;
}

.card-md .chip:last-child {
    margin-left: 0;
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
    .card-md .chip:last-child {
        margin-left: 0;
    }
}

@media screen and (min-width: 1280px) {
    .card-md .chip:last-child {
        margin-left: auto;
    }
}
</style>
