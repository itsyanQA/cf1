import { TodosCodec, type GetUserTodosRequest, type GetUserTodosResponse } from "~/components/todos/todos.types";
import { endpoint, fetchAndValidate } from "./api.utils";

export function getUserTodos({ userId }: GetUserTodosRequest): Promise<GetUserTodosResponse> {
  return fetchAndValidate(endpoint.todos, TodosCodec, { params: { userId } });
}
