<template>
  <button>
    <div class="grid gap-8 w-full text-white">
      <div class="relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
        ></div>
        <div
          class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 h-full"
        >
          <slot />
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped></style>
