<script setup lang="ts">
// onMounted(() => {
//   throw createError({ message: "errr", fatal: true });
// });
</script>
<template>
  <h4 class="font-bold mb-6">From Server Middleware</h4>
  <NuxtLink to="?server-middleware">
    <ButtonBlack class="mt-6">
      Trigger Server Middleware From Client
    </ButtonBlack>
  </NuxtLink>
</template>

<style scoped></style>
