import type { endpoint } from "./api.utils";

export const queryKey = {
  getUsers: "getUsers",
  getUserTodos: "getUserTodos",
} as const;

export type ApiFetchOptions = Omit<RequestInit, "body"> & {
  params?: Record<string, string>;
  body?: unknown;
};

export type Endpoint = (typeof endpoint)[keyof typeof endpoint];
