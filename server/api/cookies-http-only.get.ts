export default defineEventHandler((event) => {
  // Read counter cookie
  const token = getCookie(event, "x-user-token-http-only");
  // Increase counter cookie by 1

  // Send JSON response
  return { token };
});
