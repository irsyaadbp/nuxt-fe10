<template>
  <div class="w-full relative">
    <div class="grid gap-8 w-full">
      <div class="relative group">
        <div
          class="absolute inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
        ></div>
        <div
          class="relative p-[-1.5rem] bg-white rounded-lg leading-none h-full"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
