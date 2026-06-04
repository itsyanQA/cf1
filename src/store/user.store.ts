import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { User } from "~/components/users/users.types";

type UserStore = {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      selectedUser: null,
      setSelectedUser: (user) => set({ selectedUser: user }),
    }),
    { name: "user-store", storage: createJSONStorage(() => sessionStorage) },
  ),
);
