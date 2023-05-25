<script setup lang="ts">
const { data, error, execute } = useFetch("/api/proxy/cookies", {
  immediate: false,
});

const tokenClient = useCookie<string>("token/client");
</script>

<template>
  <h4 class="font-bold mb-6">Sharing Cookie (From Client)</h4>
  <BaseInput v-model="tokenClient" placeholder="Set Cookies" />

  <ButtonBlack @click="execute" class="mt-6">Get Cookies</ButtonBlack>

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
    <pre v-if="!error" class="mt-6">{{ data }}</pre>
    <pre v-if="error" class="mt-6">{{ JSON.stringify(error, null, 2) }}</pre>
  </div>
</template>

<style scoped></style>
