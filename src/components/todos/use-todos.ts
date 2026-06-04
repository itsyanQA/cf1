import { pipe } from "fp-ts/lib/function";
import { useFilterStore } from "~/store/filter.store";
import { useGetUserTodos } from "./use-get-user-todos";
import { getUncompletedTodos } from "./todos-utils";

export function useTodos() {
  const { data } = useGetUserTodos();
  const hideCompleted = useFilterStore((s) => s.hideCompleted);

  const todos = hideCompleted ? pipe(data, getUncompletedTodos) : data;

  return { todos };
}
