<script setup lang="ts">
const user = useCookie<{ name: string } | null>("user");
const logins = useCookie<number>("logins");

const name = ref("");

const login = () => {
  if (name.value) {
    logins.value = (logins.value || 0) + 1;
    user.value = { name: name.value };
  }
};

const logout = () => {
  user.value = null;
  name.value = "";
};
</script>

<template>
  <div>
    <h4 class="font-bold mb-6">Use Cookie</h4>
    <div class="bg-white rounded-lg p-6">
      <template v-if="user">
        <h1 class="text-3xl mb-3">Welcome, {{ user.name }}! 👋</h1>
        <div>
          <div class="bg-green-100 text-green-600 rounded-lg p-6">
            You have logged in <b>{{ logins }} times</b>!
          </div>
        </div>
        <div class="mt-6">
          <label class="block text-sm font-medium leading-6 text-gray-900">
            Change Your Name
          </label>
          <BaseInput v-model="user.name" placeholder="Change your name..." />
        </div>

        <div class="mt-6">
          <ButtonBlack @click="logout"> Log out </ButtonBlack>
        </div>
      </template>
      <template v-else>
        <form @submit.prevent="login">
          <h1 class="text-3xl mb-3">Login</h1>
          <BaseInput v-model="name" placeholder="Enter your name..." />
          <div class="mt-6">
            <ButtonBlack @click="login"> Log in </ButtonBlack>
          </div>
        </form>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
