<script setup lang="ts">
const listMenu = [
  { title: "useCookie", to: "/cookies/use-cookie" },
  { title: "SSR Cookie", to: "/cookies/ssr-cookie" },
  { title: "Share Cookies (From Client)", to: "/cookies/share-cookies-client" },
  { title: "Share Cookies (From Server)", to: "/cookies/share-cookies-server" },
  { title: "HTTP Only", to: "/cookies/http-only" },
  { title: "Lax", to: "/cookies/lax" },
];
</script>
<template>
  <h2 class="text-center font-bold text-2xl mb-12">Cookies</h2>
  <Card>
    <div class="rounded-lg flex divide-x divide-dashed h-full">
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
