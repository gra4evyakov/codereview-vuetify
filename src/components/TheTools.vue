<script setup>
import { reactive } from "vue";

const groups = [
    {
        title: "Ваш опыт",
        list: [
            {
                title: "Нет опыта",
                type: "no-experience",
            },
            {
                title: "От 1 года",
                type: "one-year",
            },
            {
                title: "От 3 лет",
                type: "three-years",
            },
        ],
        type: "checkbox",
        queriesName: "experience",
    },
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
];
const queries = reactive({
    experience: [],
    salary: "",
    format: [],
});
</script>

<template>
    <v-expansion-panels variant="accordion" class="sticky-expansion-panels">
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
  position: sticky;
  top: 96px;
}
</style>