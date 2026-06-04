import { UsersCodec, type UsersResponse } from "~/components/users/users.types";
import { apiFetch, endpoint, validateResponse } from "./api.utils";
import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";

export async function getUsers() {
  return pipe(
    apiFetch<UsersResponse>(endpoint.users),
    TE.chain((res) => validateResponse(res, UsersCodec)),
    TE.fold(
      (err) => () => Promise.reject(err),
      (users) => () => Promise.resolve(users),
    ),
  )();
}
