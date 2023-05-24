<script setup lang="ts">
const listMenu = [
  { title: "Page Root", to: "/error/page-root" },
  // { title: "useError", to: "/error/use-error" },
  { title: "Error Boundary", to: "/error/error-boundary/list" },
  { title: "From Function", to: "/error/from-function" },
  { title: "Route Middleware", to: "/error/route-middleware" },
  { title: "Server Middleware", to: "/error/server-middleware" },
];
const clearError = async (err) => {
  // Go to the first lesson
  await navigateTo("/error");
  err.value = null;
};
</script>
<template>
  <h2 class="text-center font-bold text-2xl mb-12">Error Handling</h2>
  <Card>
    <div class="-p-6 rounded-lg flex divide-x divide-dashed h-full">
      <div class="w-1/5">
        <ul role="list" class="divide-y divide-gray-100 sticky top-0">
          <NuxtLink
            v-for="(menu, index) in listMenu"
            :to="menu.to"
            :key="menu.to"
          >
            <li
              class="flex justify-between gap-x-6 py-5 hover:bg-gray-100 px-4"
            >
              <div class="flex gap-x-4">
                <div
                  class="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center border-dashed border-2"
                >
                  {{ index + 1 }}
                </div>
                <div class="min-w-0 flex-auto flex items-center">
                  <p class="text-sm font-semibold leading-6 text-gray-900">
                    {{ menu.title }}
                  </p>
                </div>
              </div>
            </li>
          </NuxtLink>
        </ul>
      </div>
      <div class="p-6 flex-1 bg-slate-50 rounded-r-lg">
        <!-- <NuxtErrorBoundary>
          <template #error="{ error }">
            <h2>{{ error }}</h2>
            <ButtonBlack @click="clearError(error)" class="mt-6">
              <span aria-hidden="true">&larr;</span>
              &nbsp; Clear
            </ButtonBlack>
          </template>
          <NuxtPage />
        </NuxtErrorBoundary> -->
        <NuxtPage />
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.router-link-active {
  li {
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }
}
</style>
