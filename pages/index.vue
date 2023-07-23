<template>
  <div>
    <form novalidate @submit.prevent="handleSubmit">
      <h1 class="auth-title">Welcome Back</h1>
      <p class="auth-desc">Sign into your account to continue</p>
      <div class="auth-input-container">
        <input v-model.trim="form.email" placeholder="Email address" type="email" />

        <input v-model.trim="form.password" type="password" placeholder="Password" />
      </div>
      <button type="submit" class="">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ILoginInput } from '~~/types';

// define
const { $api } = useNuxtApp();

// state
const form = reactive<ILoginInput>({
  email: '',
  password: '',
});

// event
async function handleSubmit(): Promise<void> {
  try {
    const credentials: ILoginInput = {
      email: form.email,
      password: form.password,
    };

    const response = await $api.auth.login(credentials);
    console.log(response);
    // allow user access into the app
  } catch (error) {
    console.error(error);
  }
}
</script>
