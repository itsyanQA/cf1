import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodosFilter } from "./todos-filter";
import { useFilterStore } from "~/store/filter.store";

describe("TodosFilter", () => {
  beforeEach(() => {
    useFilterStore.getState().setHideCompleted(false);
  });

  it("reflects the hideCompleted store state", () => {
    useFilterStore.getState().setHideCompleted(true);
    render(<TodosFilter />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("toggles the store state when clicked", async () => {
    render(<TodosFilter />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(useFilterStore.getState().hideCompleted).toBe(true);
  });
});
