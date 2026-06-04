import type { ChangeEvent } from "react";
import { useFilter } from "~/hooks/use-filter";

export function useTodosFilter() {
  const hideCompleted = useFilter("hideCompleted");
  const setHideCompleted = useFilter("setHideCompleted");

  const handleHideCompleted = (e: ChangeEvent<HTMLInputElement>) => setHideCompleted(e.target.checked);

  return { hideCompleted, handleHideCompleted };
}
