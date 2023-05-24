<script setup lang="ts"></script>
<template>
  <h4 class="font-bold mb-12">From Function</h4>
  <NuxtErrorBoundary>
    <template #error="{ error }">
      {{ error }}
    </template>
    <NuxtPage />
  </NuxtErrorBoundary>
</template>

<style scoped></style>
