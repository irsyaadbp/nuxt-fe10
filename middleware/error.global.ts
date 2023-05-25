export default defineNuxtRouteMiddleware((to) => {
  // if (to.path === "/error/route-middleware") {
  //   return showError("error in middleware");
  // }
  // if (to.path === "/error/route-middleware") {
  //   return createError({ message: "error in middleware" });
  // }
  if ("middleware" in to.query) {
    return showError("error in middleware");
  }
});
