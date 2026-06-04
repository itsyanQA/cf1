import { pipe } from "fp-ts/lib/function";
import { useFilter } from "~/hooks/use-filter";
import { useGetUserTodos } from "./use-get-user-todos";
import { getCompletedTodos } from "./todos-utils";

export function useTodos() {
  const { data } = useGetUserTodos();
  const hideCompleted = useFilter("hideCompleted");

  const todos = hideCompleted ? pipe(data, getCompletedTodos) : data;

  return { todos };
}
