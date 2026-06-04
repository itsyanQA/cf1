import type { Todo } from "~/components/todos/todos.types";

export type GetUserTodosRequest = {
  userId: string;
};

export type GetUserTodosResponse = Array<Todo>;
