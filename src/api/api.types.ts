import type { endpoint } from "./api.utils";

export type ApiFetchOptions = Omit<RequestInit, "body"> & {
  params?: Record<string, string>;
  body?: unknown;
};

export type Endpoint = (typeof endpoint)[keyof typeof endpoint];
