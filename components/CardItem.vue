<script setup lang="ts">
export interface User {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Location {
  name: string;
  url: string;
}
defineProps({
  item: {
    type: Object as PropType<User>,
  },
  to: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="relative hover:opacity-75">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80"
    >
      <img
        :src="item?.image"
        :alt="`Photo ${item?.name}`"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <NuxtLink :to="to" class="font-bold">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ item?.name }}
          </NuxtLink>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ item?.species }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ item?.gender }}</p>
    </div>
  </div>
</template>

<style scoped></style>
