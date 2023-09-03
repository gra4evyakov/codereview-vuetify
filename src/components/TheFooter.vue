<template>
  <v-footer class="footer">
    <v-row justify="center" no-gutters>
      <a
        v-for="link in links"
        :key="link"
        :href="`https://yourcodereview.com/#${link.anchor}`"
        class="mx-2"
      >
            {{ link.name }}
        </a>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Yourcodereview</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
const links = [
    {
        name: 'Программа и тестирование',
        anchor: 'programma'
    },
    {
        name: 'Вакансии',
        anchor: 'vakansii'
    },
    {
        name: 'Тарифы',
        anchor: 'tarifi'
    },
    {
        name: 'Запись',
        anchor: 'zapis'
    },
    {
        name: 'Команда',
        anchor: 'komanda'
    },
    {
        name: 'Отзывы',
        anchor: 'otzivi'
    },
    {
        name: 'О нас',
        anchor: 'onas'
    },
    {
        name: 'Вопросы и ответы',
        anchor: 'faq'
    }
]
</script>

<style scoped>
.footer {
  color: white;
  background-color: #070012;  
}
</style>
