export default defineEventHandler((event) => {
  // event.node.req.headers = {
  //     'authorization': "Bearer tokensaya",
  //     "X-Forwarded-For": ""
  // }

  // console.log(event.context.params?.proxy);

  return proxyRequest(
    event,
    `http://localhost:4000/${event.context.params?.proxy || ""}`
  );
});
