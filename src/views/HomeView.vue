<script setup>
import { onMounted } from 'vue';
import TheWelcomeForm from '@/components/TheWelcomeForm.vue';

import { useUnisender } from '@/hooks/useUnisender';

onMounted(() => {
    useUnisender().getList();
});
</script>

<template>
    <div class="text-white">
        <the-welcome-form />
    </div>
</template>
