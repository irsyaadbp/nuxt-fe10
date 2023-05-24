<script setup lang="ts">
import type { User } from "~/components/CardItem.vue";

const route = useRoute();
const { data } = await useFetch<User>(
  `https://rickandmortyapi.com/api/character/${route.params.id}`
);

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: "Character Not Found From Error Boundary",
    statusMessage: "Character Not Found From Error Boundary",
    fatal: true,
  });
}
</script>
<template>
  <div class="bg-white">
    <div class="pt-6">
      <ButtonBlack @click="$router.back()" class="mx-6">
        &larr; &nbsp;&nbsp;Back
      </ButtonBlack>
      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-md lg:px-8">
        <div
          class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block"
        >
          <img
            :src="data?.image"
            alt="Two each of gray, white, and black shirts laying flat."
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16"
      >
        <div class="lg:col-span-2 lg:pr-8">
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ data?.name }}
          </h1>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae ante id risus viverra euismod sit amet eget velit. Vivamus
                varius lacus at purus posuere convallis. Nunc sapien metus,
                lobortis ac condimentum nec, dignissim et magna. Vivamus quis
                placerat ex. Aenean quis turpis dolor. Aenean ornare faucibus
                lacus, eget pharetra neque scelerisque eu. Pellentesque a dui
                nibh. Donec fermentum dignissim ipsum ac fringilla. Praesent
                pellentesque turpis porttitor, viverra dolor id, commodo augue.
                Donec efficitur turpis vitae leo aliquam, eget tincidunt justo
                porttitor. Nam condimentum varius tortor sit amet posuere.
                Phasellus hendrerit tempus sapien, sed convallis neque sagittis
                sed. Donec efficitur metus in elementum dictum. Nulla facilisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
