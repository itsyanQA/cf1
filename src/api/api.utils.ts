import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";
import * as t from "io-ts";
import type { Endpoint, ApiFetchOptions } from "./api.types";

export const BASE_API_URL = "https://jsonplaceholder.typicode.com";

export const endpoint = {
  users: "users",
  todos: "todos",
} as const;

export function apiFetch<TResponse extends object>(endpoint: Endpoint, fetchOptions: ApiFetchOptions = {}) {
  const { params, body, method = "GET", ...rest } = fetchOptions;
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";

  return TE.tryCatch(
    () =>
      fetch(`${BASE_API_URL}/${endpoint}${query}`, { method, body: body !== undefined ? JSON.stringify(body) : undefined, ...rest }).then(
        (res) => {
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
          }
          return res.json() as Promise<TResponse>;
        },
      ),
    (reason) => new Error(String(reason)),
  );
}

export function validateResponse<TResponse extends object>(response: TResponse, codec: t.Type<TResponse>): TE.TaskEither<Error, TResponse> {
  return pipe(
    codec.decode(response),
    TE.fromEither,
    TE.mapLeft((errors) => new Error(`Validation failed: ${JSON.stringify(errors)}`)),
  );
}

export function fetchAndValidate<TResponse extends object>(
  endpoint: Endpoint,
  codec: t.Type<TResponse>,
  fetchOptions: ApiFetchOptions = {},
): Promise<TResponse> {
  return pipe(
    apiFetch<TResponse>(endpoint, fetchOptions),
    TE.chain((res) => validateResponse(res, codec)),
    TE.fold(
      (err) => () => Promise.reject(err),
      (data) => () => Promise.resolve(data),
    ),
  )();
}
