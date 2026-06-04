import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FilterStore = {
  hideCompleted: boolean;
  setHideCompleted: (value: boolean) => void;
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      hideCompleted: false,
      setHideCompleted: (value) => set({ hideCompleted: value }),
    }),
    { name: "filter-store", storage: createJSONStorage(() => sessionStorage) },
  ),
);
