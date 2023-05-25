export default defineEventHandler((event) => {
  // Read counter cookie
  let counter = getCookie(event, "counter") || 0;
  // Increase counter cookie by 1
  counter = Number(counter) + 1;
  setCookie(event, "counter", String(counter));
  // Send JSON response
  return { counter };
});
