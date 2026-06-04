import { useStore } from "zustand";
import { useFilterStore } from "~/store/filter.store";

type FilterStore = ReturnType<typeof useFilterStore.getState>;

export function useFilter<K extends keyof FilterStore>(key: K): FilterStore[K] {
  return useStore(useFilterStore, (s) => s[key]);
}
