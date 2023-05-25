export default defineEventHandler((event) => {
  const token = Math.random().toString();
  setCookie(event, "token-strict", token, {
    sameSite: "strict",
  });

  // Send JSON response
  return { token };
});
