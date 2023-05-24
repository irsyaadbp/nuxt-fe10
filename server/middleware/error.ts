import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler((event) => {
//   console.log(event);
  if ("server-middleware" in getQuery(event)) {
    throw new Error("Server middleware error");
  }
});
