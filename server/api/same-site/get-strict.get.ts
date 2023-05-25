export default defineEventHandler((event) => {
  const token = getCookie(event, "token-strict");

  // Send JSON response
  return { token };
});
