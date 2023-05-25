<script setup lang="ts">
const token = useCookie("x-user-token-http-only");
const name = ref("");

const { data, error, execute } = useFetch("/api/proxy/login/http-only", {
  method: "POST",
  immediate: false,
  body: {
    name,
  },
  watch: false,
});

const { execute: logout } = useFetch("/api/proxy/logout/http-only", {
  method: "POST",
  immediate: false,
});

const { data: dataToken, execute: getTokenSSR } = useFetch(
  "/api/cookies-http-only",
  {
    immediate: false,
  }
);

function login() {
  if (name.value) {
    execute();
  }
}
</script>

<template>
  <h4 class="font-bold mb-6">Sharing Cookie (From Client)</h4>
  <BaseInput v-model="name" placeholder="Input Username" />

  <ButtonBlack v-if="!token" class="mt-6" @click="login"> Login </ButtonBlack>
  <ButtonBlack v-else class="mt-6" @click="logout"> Logout </ButtonBlack>
  <ButtonBlack class="mt-6 ml-4" @click="getTokenSSR">
    Get Token From API ROUTES
  </ButtonBlack>

  <div class="rounded-lg bg-gray-200 p-4 mt-6">
    <h2 class="mb-2 font-bold">
      Result:
      <span
        v-if="data || error"
        :class="{ 'text-green-500': data, 'text-red-500': error }"
      >
        {{ error ? "Error Fetch" : "Success Fetch" }}
      </span>
    </h2>
    <pre v-if="!error" class="mt-6">COOKIES CLIENT {{ token }}</pre>
    <pre v-if="!error" class="mt-6">COOKIES API ROUTE {{ dataToken }}</pre>
    <pre v-if="error" class="mt-6">{{ JSON.stringify(error, null, 2) }}</pre>
  </div>
</template>

<style scoped></style>
