<script lang="ts" setup>
const clearError = async (err) => {
  // Go to the first lesson
  await navigateTo("/error/error-boundary/list");
  err.value = null;
};

const handleError = (err) => {
  // console.log(JSON.stringify(err, null, 2));
  alert(`ERROR: ${err.statusCode}, ${err.message}`)
};
</script>
<template>
  <h4 class="font-bold mb-6">Error Boundary</h4>
  <NuxtErrorBoundary @error="handleError">
    <template #error="{ error }">
      <div class="relative isolate lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1
              v-if="error?.statusCode"
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              {{ error?.statusCode }}
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ error?.message || error }}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <ButtonBlack @click="clearError(error)">
                <span aria-hidden="true">&larr;</span>
                &nbsp; Go Home
              </ButtonBlack>
            </div>
          </div>
        </div>
      </div>
    </template>
    <NuxtPage />
  </NuxtErrorBoundary>
</template>

<style scoped></style>
