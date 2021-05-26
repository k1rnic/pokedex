/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

export type RouteParams<T> = T extends `${infer _}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof RouteParams<Rest>]: string }
  : T extends `${infer _}:${infer Param}`
  ? { [k in Param]: string }
  : {};
