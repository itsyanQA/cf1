import * as A from "fp-ts/Array";
import type { Todos } from "./todos.types";
import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/lib/function";

export function getUncompletedTodos(todos: Todos | undefined) {
  return pipe(
    O.fromNullable(todos),
    O.map(A.filter((todo) => !todo.completed)),
    O.getOrElse((): Todos => []),
  );
}
