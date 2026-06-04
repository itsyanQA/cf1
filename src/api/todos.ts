import type { GetUserTodosRequest, GetUserTodosResponse } from "./api.types";
import { endpoint } from "./api.utils";

export async function getUserTodos({ userId }: GetUserTodosRequest): Promise<GetUserTodosResponse> {
  return fetch(`${endpoint.todos}?userId=${userId}`).then((res) => res.json());
}
