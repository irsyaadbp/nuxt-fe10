export default defineEventHandler(async (event) => {
  const response = await $fetch("http://localhost:4000/get-error-cors");

  return response;
});
