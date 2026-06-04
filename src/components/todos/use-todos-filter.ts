import type { ChangeEvent } from "react";
import { useFilterStore } from "~/store/filter.store";

export function useTodosFilter() {
  const hideCompleted = useFilterStore((s) => s.hideCompleted);
  const setHideCompleted = useFilterStore((s) => s.setHideCompleted);

  const handleHideCompleted = (e: ChangeEvent<HTMLInputElement>) => setHideCompleted(e.target.checked);

  return { hideCompleted, handleHideCompleted };
}
