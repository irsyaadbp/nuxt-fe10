<script setup lang="ts">
const url = ref("");
const loading = ref(false);
const { data, error, execute } = useFetch(url, {
  immediate: false,
  onRequest() {
    loading.value = true;
  },
  onResponse() {
    loading.value = false;
  },
  onResponseError() {
    loading.value = false;
  },
  onRequestError() {
    loading.value = false;
  },
});

function handleUpdateUrl(type: string) {
  const urlList: Record<string, string> = {
    fetchCors: "http://localhost:4000/get-error-cors",
    fetchSolveCors: "http://localhost:4000/get-solve-cors",
    fetchProxy: "/api-proxy/get-error-cors",
    fetchManualProxy: "/api/proxy/get-error-cors",
    fetchApi: "http://localhost:3000/api/fetch-api",
  };
  url.value = urlList[type];
  execute();
}
</script>
<template>
  <h2 class="text-center font-bold text-2xl mb-12">CORS</h2>
  <Card>
    <div class="p-6" style="min-height: 24rem">
      <div class="flex gap-8 items-start">
        <ButtonBlack @click="handleUpdateUrl('fetchCors')">
          Fetch Error CORS
        </ButtonBlack>
        <ButtonBlack @click="handleUpdateUrl('fetchSolveCors')">
          Fetch Enable CORS FROM BE
        </ButtonBlack>
        <ButtonBlack @click="handleUpdateUrl('fetchProxy')">
          Fetch With Proxy
        </ButtonBlack>
        <ButtonBlack @click="handleUpdateUrl('fetchManualProxy')">
          Fetch With Manual Proxy
        </ButtonBlack>
        <ButtonBlack @click="handleUpdateUrl('fetchApi')">
          Fetch With API Routes
        </ButtonBlack>
      </div>
      <div class="rounded-lg bg-gray-200 p-4 mt-6">
        <h2 class="mb-2 font-bold">
          Result:
          <span
            v-if="data || error"
            :class="{ 'text-green-500': data, 'text-red-500': error }"
            >{{ error ? "Error Fetch" : "Success Fetch" }}</span
          >
        </h2>
        <pre v-if="!loading && !error" class="mt-6">{{ data }}</pre>
        <pre v-if="!loading && error" class="mt-6">{{
          JSON.stringify(error, null, 2)
        }}</pre>
        <div v-if="loading" class="flex items-center mt-4">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600"
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
          <p class="text-gray-400">Loading...</p>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
