import createClient from "openapi-fetch";
import type { paths } from "./strapi";
import qs from "qs";

export const strapi = createClient<paths>({
  baseUrl: `${process.env.API_HOST ?? "http://127.0.0.1:1337"}/api`,
  headers: {
    Accept: "application/json",
  },
  querySerializer(params) {
    return qs.stringify(params, { encodeValuesOnly: true });
  },
});
