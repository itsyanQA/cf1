import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoItem } from "./todo-item";
import type { Todo } from "./todos.types";

const baseTodo: Todo = { id: 1, userId: 1, title: "buy milk", completed: false };

describe("TodoItem", () => {
  it("renders the todo title", () => {
    render(<TodoItem todo={baseTodo} />);
    expect(screen.getByText("buy milk")).toBeInTheDocument();
  });

  it("renders an unchecked checkbox for an incomplete todo", () => {
    render(<TodoItem todo={baseTodo} />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("renders a checked checkbox for a completed todo", () => {
    render(<TodoItem todo={{ ...baseTodo, completed: true }} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("renders the checkbox as read-only (not interactive)", () => {
    render(<TodoItem todo={baseTodo} />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
