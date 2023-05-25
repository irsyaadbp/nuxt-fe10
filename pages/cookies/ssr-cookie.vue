<script setup lang="ts">
const { data, error, execute } = useFetch("/api/cookies", { immediate: false });
</script>

<template>
  <h4 class="font-bold mb-6">SSR Cookie</h4>
  <ButtonBlack @click="execute">Get Cookies</ButtonBlack>

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
