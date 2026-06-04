import { useQuery } from "@tanstack/react-query";
import { useStore } from "zustand/react";
import { getUserTodos } from "~/api/todos";
import { queryKey } from "~/config/api/api.types";
import { useUserStore } from "~/store/user.store";

export function useGetUserTodos() {
  const selectedUser = useStore(useUserStore, (s) => s.selectedUser);

  return useQuery({
    queryKey: [queryKey.getUserTodos, selectedUser?.id],
    queryFn: () => getUserTodos({ userId: String(selectedUser?.id) }),
    enabled: !!selectedUser,
  });
}
