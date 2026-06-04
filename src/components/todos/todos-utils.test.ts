import { describe, it, expect } from "vitest";
import { getUncompletedTodos } from "./todos-utils";
import type { Todos } from "./todos.types";
import { pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/Array";

const todos: Todos = [
  { id: 1, userId: 1, title: "buy milk", completed: false },
  { id: 2, userId: 1, title: "write tests", completed: true },
  { id: 3, userId: 1, title: "ship it", completed: true },
];

describe("getUncompletedTodos", () => {
  it("returns only uncompleted todos", () => {
    expect(getUncompletedTodos(todos)).toEqual([{ id: 1, userId: 1, title: "buy milk", completed: false }]);
  });

  it("returns an empty array when all todos are completed", () => {
    const allCompleted: Todos = pipe(
      todos,
      A.map((todo) => ({ ...todo, completed: true })),
    );
    expect(getUncompletedTodos(allCompleted)).toEqual([]);
  });

  it("returns an empty array for an empty list", () => {
    expect(getUncompletedTodos([])).toEqual([]);
  });

  it("returns an empty array for undefined", () => {
    expect(getUncompletedTodos(undefined)).toEqual([]);
  });
});
