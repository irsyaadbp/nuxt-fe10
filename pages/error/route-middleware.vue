<script setup lang="ts">
// const clearError = async (err) => {
//   // Go to the first lesson
//   await navigateTo("/error");
//   err.value = null;
// };

// onMounted(() => {
//   throw createError({ message: "errr", fatal: true });
// });
</script>
<template>
  <h4 class="font-bold mb-6">From Route Middleware</h4>
  <NuxtLink to="?middleware">
    <ButtonBlack class="mt-6">
    Trigger Route Middleware From Client
  </ButtonBlack>
  </NuxtLink>
  <!-- <NuxtErrorBoundary>
    <template #error="{ error }">
      <h2>{{ error }}</h2>
      <ButtonBlack @click="clearError(error)">
        <span aria-hidden="true">&larr;</span>
        &nbsp; Clear
      </ButtonBlack>
    </template>
    <NuxtPage />
  </NuxtErrorBoundary> -->
</template>

<style scoped></style>
