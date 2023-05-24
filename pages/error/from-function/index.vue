<template>
  <div>
    <ButtonBlack @click="handleShowError">Trigger Error</ButtonBlack>
  </div>
</template>

<script setup lang="ts">
function handleShowError() {
  throw new Error("Trigger error from function");
  //   throw createError("Trigger error from function");
  //   throw showError("Trigger fatal error from function");
}
</script>

<style scoped></style>
