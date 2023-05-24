<template>
  <NuxtLayout>
    <div class="relative isolate lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            {{ error?.statusCode }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ error?.message }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <ButtonBlack @click="handleError">
              <span aria-hidden="true">&larr;</span>
              &nbsp; Go Home
            </ButtonBlack>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
export type ErrorTypes = {
  url: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  data?: any;
};
defineProps({
  error: Object as PropType<ErrorTypes>,
});

const handleError = () => clearError({ redirect: "/" });
</script>
