import { useStore } from "zustand/react";
import { useUserStore } from "~/store/user.store";

type UserStore = ReturnType<typeof useUserStore.getState>;

export function useSelectedUser<K extends keyof UserStore>(key: K): UserStore[K] {
  return useStore(useUserStore, (s) => s[key]);
}
