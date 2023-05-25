<template>
  <div>
    <ButtonBlack @click="handleShowError">Trigger Error</ButtonBlack>
  </div>
</template>

<script setup lang="ts">
function handleShowError() {
  // throw new Error("Trigger error from function");
  throw createError({
    statusCode: 404,
    message: "Trigger from function",
    // fatal: true,
  });
  // throw showError("Trigger fatal error from function");
}
</script>

<style scoped></style>
