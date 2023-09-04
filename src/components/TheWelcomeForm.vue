<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import SvgLogo from "./icons/svgLogo.vue";

const router = useRouter();
const expand = ref(false);

const fetchVacancies = () => {
    router.push({ name: "Jobs" });
    console.log("fetch vacancies");
};

onMounted(() => {
    expand.value = true;
});
</script>

<template>
    <v-row class="h-screen justify-center align-center">
        <v-col cols="12" md="6" class="text-center">
                <svg-logo class="mx-auto mb-6"/>
            <v-form @submit.prevent="fetchVacancies">
                <v-scroll-x-reverse-transition>
                    <v-text-field
                        class="mb-4"
                        v-show="expand"
                        variant="solo"
                        label="Поиск вакансий"
                        append-inner-icon="mdi-magnify"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-scroll-x-reverse-transition>
                <v-scroll-x-transition>
                    <v-btn
                        class="font-weight-bold"
                        type="submit"
                        v-show="expand"
                    >
                        Найти
                    </v-btn>
                </v-scroll-x-transition>
            </v-form>
        </v-col>
    </v-row>
</template>

<style scoped>
.scroll-x-transition-enter-active {
    transition-delay: 1s;
}
.scroll-x-reverse-transition-enter-active {
    transition-delay: 0.5s;
}
</style>
