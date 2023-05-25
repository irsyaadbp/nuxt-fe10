<script setup lang="ts">
import type { User } from "~/components/CardItem.vue";
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface Users {
  info: Info;
  results: User[];
}

const { data, pending } = await useFetch<Users>(
  "https://rickandmortyapi.com/api/character"
);
</script>
<template>
  <h4 class="font-bold">Page Root</h4>
  <div v-if="pending" class="flex items-center justify-center h-100 mt-4">
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
  <template v-else>
    <div
      class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mb-12"
    >
      <CardItem
        v-for="result in data?.results"
        :key="result.id"
        :item="result"
        :to="`/error/page-root/${result?.id}`"
      />
    </div>
    <NuxtLink to="/error/page-root/asdklashjdjklasd">
      <ButtonBlack>Trigger ID Not Found</ButtonBlack>
    </NuxtLink>
  </template>
</template>

<style scoped></style>
