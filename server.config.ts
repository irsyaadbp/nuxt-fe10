import { getCookie, setHeader } from "h3";
import { defineServer, defineEventInterceptor } from "@privyid/nhp/core";

export default defineServer([
  {
    name: "bin",
    baseUrl: "/api-proxy",
    targetUrl: "http://localhost:4000",
    onProxyReq: defineEventInterceptor((proxyEvent, event) => {
      // const token = getCookie(event, "session/token");

      setHeader(proxyEvent, "TestingHeader", `Budi Yang Fetching`);
    }),
  },
]);
