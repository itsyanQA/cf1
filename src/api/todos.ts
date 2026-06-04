import {
  TodosCodec,
  type GetUserTodosRequest,
  type GetUserTodosResponse,
} from "~/components/todos/todos.types";
import { apiFetch, endpoint, validateResponse } from "./api.utils";
import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";

export function getUserTodos({
  userId,
}: GetUserTodosRequest): Promise<GetUserTodosResponse> {
  return pipe(
    apiFetch<GetUserTodosResponse>(endpoint.todos, { params: { userId } }),
    TE.chain((res) => validateResponse(res, TodosCodec)),
    TE.fold(
      (err) => () => Promise.reject(err),
      (todos) => () => Promise.resolve(todos),
    ),
  )();
}
