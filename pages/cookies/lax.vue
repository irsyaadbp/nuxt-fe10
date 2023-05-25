<script setup lang="ts">
const { execute: setLax } = useFetch("/api/same-site/set-lax", {
  immediate: false,
});

const { execute: setStrict } = useFetch("/api/same-site/set-strict", {
  immediate: false,
});
</script>
<template>
  <h4 class="font-bold mb-6">Lax</h4>

  <ButtonBlack @click="setLax" class="my-6"> Set Cookies Lax </ButtonBlack>
  <br />
  <a href="http://demo.localhost:3000/api/same-site/get-lax" class="mr-6">
    <ButtonBlack>To Demo</ButtonBlack>
  </a>
  <a href="http://localhost:3000/api/same-site/get-lax">
    <ButtonBlack>To Localhost</ButtonBlack>
  </a>

  <hr class="my-12" />
  <h4 class="font-bold mb-6">Strict</h4>

  <ButtonBlack @click="setStrict" class="my-6">
    Set Cookies Strict
  </ButtonBlack>
  <br />

  <a href="http://demo.localhost:3000/api/same-site/get-strict" class="mr-6">
    <ButtonBlack>To Demo</ButtonBlack>
  </a>
  <a href="http://localhost:3000/api/same-site/get-strict">
    <ButtonBlack>To Localhost</ButtonBlack>
  </a>
</template>

<style scoped></style>
