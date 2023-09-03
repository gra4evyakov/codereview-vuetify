<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { useFirebase } from "@/hooks/useFirebase";

import UiCard from "@/components/ui/uiCard.vue";
import UiSnackbar from "@/components/ui/uiSnackbar.vue";

const route = useRoute();
const auth = useFirebase();

const vacancyId = ref("");

const currentVacancy = {
    id: 0,
    vacancy_name: "Python Developer",
    title: "We are seeking a skilled Python Developer to join our dynamic team. If you have a passion for writing clean, maintainable code and a strong background in Python, we want to hear from you!",
    description: [
        {
            title: "Responsibilities",
            list: [
                "Collaborate with cross-functional teams to design and develop high-quality software",
                "Write efficient, reusable, and documented code.",
                "Participate in code reviews and provide constructive feedback.",
            ],
        },
        {
            title: "Requirements",
            list: [
                "Bachelor's degree in Computer Science or related field.",
                "Proven experience with Python and its frameworks.",
                "Strong problem-solving skills and attention to detail.",
                "Excellent teamwork and communication skills.",
            ],
        },
    ],
    salary: "80000-100000",
    location: "Moscow, Russia",
    remote: false,
    company_name: "TechCo",
    specialty: "Python",
    url: "https://example.com/job/python-developer",
};

watch(
    () => route.params.id,
    async (newVacancyId) => {
        vacancyId.value = newVacancyId;
        // currentVacancy = ЗАПРОС
    }
);

onMounted(async () => {
    vacancyId.value = route.params.id;
});

const copyText = () => {
    navigator.clipboard
        .writeText(`${currentVacancy.url}`)
        .then(() => {
            console.log("Async: Copying to clipboard was successful!");
        })
        .catch((err) => {
            console.log("Something went wrong", err);
        });
};
</script>

<template>
    <v-container class="py-5">
        <v-row class="justify-center">
            <v-col cols="12" lg="10" sm="12" class="d-flex">
                <v-btn icon="mdi-arrow-left" size="x-small" :to="{ name: 'Jobs' }" />
                <v-btn
                    class="ml-auto"
                    icon
                    size="x-small"
                    @click="auth.isLoggedIn.value ? copyText() : null"
                >
                    <v-icon>mdi-export-variant</v-icon>
                    <ui-snackbar
                        activator="parent"
                        :color="
                            auth.isLoggedIn.value ? 'green' : 'red-darken-1'
                        "
                        :message="
                            auth.isLoggedIn.value
                                ? 'Ссылка на вакансию скопирована'
                                : 'Необходимо авторизоваться'
                        "
                    />
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="12" lg="10" sm="12">
                <ui-card :item="currentVacancy" size="lg" />
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="12" lg="8" sm="9" class="d-flex flex-column">
                <v-card>
                    <v-card-title class="font-weight-bold">
                        {{ currentVacancy.salary }}р
                    </v-card-title>
                </v-card>
                <v-card class="mt-2">
                    <v-list
                        v-for="item in currentVacancy.description"
                        :key="item.title"
                    >
                        <v-list-item>
                            <v-list-item-title class="font-weight-bold">{{
                                item.title
                            }}</v-list-item-title>
                            <v-card-text
                                v-for="item in item.list"
                                :key="item"
                                class="py-2"
                            >
                                - {{ item }}
                            </v-card-text>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="12" lg="2" sm="3">
                <v-card>
                    <v-card-actions>
                        <v-btn
                            class="card-btn w-100"
                            :href="
                                auth.isLoggedIn.value ? currentVacancy.url : ''
                            "
                        >
                            Отклик

                            <ui-snackbar
                                v-if="!auth.isLoggedIn.value"
                                activator="parent"
                                :is-open="!!auth.errorMsg.value"
                                message="Требуется авторизация"
                            />
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.card-btn {
    padding: 0 30px;
    color: white;
    background-image: linear-gradient(
        33deg,
        rgba(0, 87, 255, 1) 0%,
        rgba(0, 228, 201, 1) 91%
    );
}
</style>
