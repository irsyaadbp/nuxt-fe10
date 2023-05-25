export default defineEventHandler((event) => {
  const token = Math.random().toString();
  setCookie(event, "token-lax", token, {
    sameSite: "lax",
  });

  // Send JSON response
  return { token };
});
