<script setup lang="ts">
const userToken = useCookie<string | null>("x-user-token");
const userName = useCookie<string | null>("username");
const name = ref("");
const { data, execute } = await useFetch("/api/proxy/login", {
  method: "POST",
  immediate: false,
  body: {
    name,
  },
  watch: false,
  onResponse({ response }) {
    userName.value = response._data.name;
  },
});

const { execute: executeLogout } = await useFetch("/api/proxy/logout", {
  method: "POST",
  immediate: false,
  body: {
    name,
  },
  watch: false,
  onResponse() {
    userName.value = data.value?.name;
  },
});

const login = () => {
  if (!!name.value) {
    execute();
  }
};

const logout = () => {
  executeLogout();
  // name.value = "";
};
</script>

<template>
  <div>
    <h4 class="font-bold mb-6">Sharing Cookie (From Server)</h4>
    <div class="bg-white rounded-lg p-6">
      <template v-if="userToken">
        <h1 class="text-3xl mb-3">Welcome, {{ userName }}! 👋</h1>
        <div>
          <div class="bg-green-100 text-green-600 rounded-lg p-6">
            You have logged as <b>{{ userName }}</b> !
          </div>
          <h4 class="mt-4">
            Token: <strong>{{ userToken }}</strong>
          </h4>
        </div>

        <form @submit="logout">
          <div class="mt-6">
            <ButtonBlack> Log out </ButtonBlack>
          </div>
        </form>
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
