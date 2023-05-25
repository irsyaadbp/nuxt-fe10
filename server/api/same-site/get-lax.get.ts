export default defineEventHandler((event) => {
  const token = getCookie(event, "token-lax");

  // Send JSON response
  return { token };
});
