<script setup>
import { ref, onMounted } from "vue";
import UiStackCard from "./ui/uiStackCard.vue";
import svgLogo from "@/components/icons/svgLogo.vue";

const expand = ref(false);

const cards = [
    {
        id: 1,
        name: "Python",
        color: "blue",
        type: "python"
    },
    {
        id: 2,
        name: "Java",
        color: "orange",
        type: "java"
    },
    {
        id: 3,
        name: "C++",
        color: "green",
        type: "cpp"
    },
    {
        id: 4,
        name: "C#",
        color: "red",
        type: "c#"
    },
    {
        id: 5,
        name: "JavaScript",
        color: "purple",
        type: "javascript"
    },
    {
        id: 6,
        name: "PHP",
        color: "lime",
        type: "php"
    },
    {
        id: 7,
        name: "Go",
        color: "blue",
        type: "go"
    },
    {
        id: 8,
        name: "C",
        color: "orange",
        type: "c"
    },
    {
        id: 9,
        name: "Swift",
        color: "purple",
        type: "swift"
    },
];

onMounted(() => {
    expand.value = true;
});
</script>

<template>
    <div class="welcome">
        <header class="background pa-8">
            <div class="container">
                <svg-logo />
                <h1
                    class="text-sm-h2 text-center mt-auto mb-2 font-weight-bold"
                >
                    Поиск любимой работы
                </h1>
                <h3 class="text-sm-h5 text-center">
                    Лёгкий способ найти хорошую работу в России и за границей
                </h3>
            </div>
        </header>
        <div class="container">
            <div class="grid-cards">
                <v-fade-transition
                    v-for="item in cards"
                    :key="item.id"
                >
                    <router-link :to="{ name: 'Jobs', query: { stack: item.type } }" v-show="expand">
                        <ui-stack-card :item="item" />
                    </router-link>
                </v-fade-transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
.welcome {
    display: grid;
    grid-template-rows: 400px 1fr;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.grid-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-flow: dense;
    gap: 12px;
}
.background {
    background-image: var(--purple-gradient);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.fade-transition-enter-active {
    transition-delay: 0.5s;
}
</style>
