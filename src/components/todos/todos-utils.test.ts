import { describe, it, expect } from "vitest";
import { getCompletedTodos } from "./todos-utils";
import type { Todos } from "./todos.types";
import { pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/Array";

const todos: Todos = [
  { id: 1, userId: 1, title: "buy milk", completed: false },
  { id: 2, userId: 1, title: "write tests", completed: true },
  { id: 3, userId: 1, title: "ship it", completed: true },
];

describe("getCompletedTodos", () => {
  it("returns only completed todos", () => {
    expect(getCompletedTodos(todos)).toEqual([
      { id: 2, userId: 1, title: "write tests", completed: true },
      { id: 3, userId: 1, title: "ship it", completed: true },
    ]);
  });

  it("returns an empty array when no todos are completed", () => {
    const allIncomplete: Todos = pipe(
      todos,
      A.map((todo) => ({ ...todo, completed: false })),
    );
    expect(getCompletedTodos(allIncomplete)).toEqual([]);
  });

  it("returns an empty array for an empty list", () => {
    expect(getCompletedTodos([])).toEqual([]);
  });

  it("returns an empty array for undefined", () => {
    expect(getCompletedTodos(undefined)).toEqual([]);
  });
});
