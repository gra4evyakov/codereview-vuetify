<script setup>
import { reactive, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import svgTelegram from "@/components/icons/svgTelegram.vue";

const route = useRoute();
const groups = [
    {
        title: "Зарплата",
        list: [
            {
                title: "Не имеет значения",
                type: "",
            },
            {
                title: "От 10000 руб.",
                type: "10000",
            },
            {
                title: "От 50000 руб.",
                type: "50000",
            },
            {
                title: "От 100000 руб.",
                type: "100000",
            },
            {
                title: "От 150000 руб.",
                type: "150000",
            },
        ],
        type: "radio",
        queriesName: "salary",
    },
    {
        title: "Формат работы",
        list: [
            {
                title: "Удаленно",
                type: "remote",
            },
            {
                title: "Офис",
                type: "office",
            },
            {
                title: "Гибрид",
                type: "hybrid",
            },
        ],
        type: "checkbox",
        queriesName: "format",
    },
    {
        title: "Специализация",
        list: [
            {
                title: "Python",
                type: "python",
            },
            {
                title: "Java",
                type: "java",
            },
            {
                title: "JavaScript",
                type: "javascript",
            },
            {
                title: "Data Science",
                type: "data_science",
            },
            {
                title: "QA",
                type: "qa",
            },
            {
                title: "C#",
                type: "c-sharp",
            },

        ],
        type: "radio",
        queriesName: "stack",
    },
];
const queries = reactive({
    salary: "",
    format: [],
    stack : ""
});

watch(
    () => route.query,
    async () => {
        Object.keys(queries).forEach((key) => {
            queries[key] = route.query[key]
        })
    }
), { deep: true };

onMounted(async () => {
    Object.keys(queries).forEach((key) => {
        queries[key] = route.query[key]
    })
});
</script>

<template>
    <v-expansion-panels variant="accordion" class="sticky-expansion-panels">
        <v-btn block class="mb-4 font-weight-bold" height="70">
            <span>{{ $vuetify.display.md ? 'Вакансии' : 'Вакансии в Telegram' }}</span>
            <template #prepend>
                <svg-telegram />
            </template>
        </v-btn>
        <v-expansion-panel
            v-for="group in groups"
            :key="group.title"
            :title="group.title"
        >
            <v-expansion-panel-text>
                <template v-if="group.type === 'checkbox'">
                    <v-checkbox
                        v-for="item in group.list"
                        v-model="queries[group.queriesName]"
                        density="compact"
                        hide-details
                        :key="item.title"
                        :label="item.title"
                        :value="item.type"
                    ></v-checkbox>
                </template>
                <template v-if="group.type === 'radio'">
                    <v-radio-group v-model="queries[group.queriesName]">
                        <v-radio
                            v-for="item in group.list"
                            :key="item.title"
                            :label="item.title"
                            :value="item.type"
                        />
                    </v-radio-group>
                </template>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<style scoped>
.sticky-expansion-panels {
    max-width: 600px;
    margin: 0 auto;
    position: sticky;
    top: 86px;
}

@media screen and (min-width: 960px) {
    .sticky-expansion-panels {
        max-width: 265px;
        margin: 0;
        margin-left: auto;
    }
}
</style>