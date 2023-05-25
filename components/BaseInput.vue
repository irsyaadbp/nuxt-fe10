<script setup lang="ts">
// const model = defineModel();
const props = defineProps({
  modelValue: { type: String, default: "" },
  placeholder: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>
<template>
  <input
    v-model="model"
    required
    class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    :placeholder="placeholder"
  />
</template>

<style scoped></style>
