<script setup>
import { ref, onMounted } from "vue";
import { useFirebase } from "@/hooks/useFirebase";
import { useRoute, useRouter } from "vue-router";

import svgLogo from "@/components/icons/svgLogo.vue";
import uiSnackbar from "@/components/ui/uiSnackbar.vue";

const router = useRouter();
const route = useRoute();

const visible = ref(false);

const auth = useFirebase();
const email = ref("");
const password = ref("");
const type = ref("");
const snackbar = ref(false);

const updateTypeInURL = () => {
    type.value = type.value === "register" ? "login" : "register";
    router.push({ query: { type: type.value } });
};

const authenticate = async (email, password) => {
    if (type.value === "register") {
        await auth.registerUser(email, password);
    } else if (type.value === "login") {
        await auth.loginUser(email, password);
    }
    auth.isLoggedIn.value ? router.push('/jobs') : snackbar.value = true;
};

const googleAuth = async () => {
    await auth.loginWithGoogle();
    auth.isLoggedIn.value ? router.push('/jobs') : snackbar.value = true;
};

onMounted(() => {
    auth.logoutUser();
    console.log(auth.isLoggedIn.value);
    type.value = route.query.type;
});
</script>

<template>
    <div
        class="background pa-8 h-screen d-flex flex-column justify-center align-center"
    >
        <svg-logo />

        <v-form @submit.prevent="authenticate(email, password)">
            <v-card
                class="mx-auto pa-8 mt-8 w-100"
                elevation="8"
                min-width="300"
                max-width="448"
                rounded="lg"
            >
                <div class="text-subtitle-1 text-medium-emphasis">Почта</div>

                <v-text-field
                    v-model="email"
                    density="compact"
                    placeholder="Введите почту"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                    required
                ></v-text-field>

                <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                >
                    Пароль
                </div>

                <v-text-field
                    v-model="password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact"
                    placeholder="Введите пароль"
                    prepend-inner-icon="mdi-lock-outline"
                    variant="outlined"
                    required
                    @click:append-inner="visible = !visible"
                ></v-text-field>

                <v-btn
                    block
                    type="submit"
                    class="mb-2"
                    size="large"
                    variant="tonal"
                >
                    {{ type === "register" ? "Зарегистрироваться" : "Войти" }}
                </v-btn>
                <v-btn
                    block
                    class="mb-2"
                    variant="tonal"
                    @click="googleAuth"
                >
                    Войти через Google
                </v-btn>

                <v-card-text class="text-center">
                    <v-btn
                        class="text-decoration-none"
                        variant="text"
                        size="small"
                        @click="updateTypeInURL"
                    >
                        {{
                            type !== "register" ? "Зарегистрироваться" : "Войти"
                        }}
                        <v-icon icon="mdi-chevron-right"></v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
            <ui-snackbar color="red" v-model="snackbar" :message="auth.errorMsg.value"/>
        </v-form>
    </div>
</template>

<style scoped>
.background {
    background-image: var(--purple-gradient);
}
</style>
