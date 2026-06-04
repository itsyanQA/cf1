import { useQuery } from "@tanstack/react-query";
import { getUserTodos } from "~/api/todos";
import { queryKey } from "~/config/api/api.types";
import { useSelectedUser } from "~/hooks/use-selected-user";

export function useGetUserTodos() {
  const selectedUser = useSelectedUser("selectedUser");

  return useQuery({
    queryKey: [queryKey.getUserTodos, selectedUser?.id],
    queryFn: () => getUserTodos({ userId: String(selectedUser?.id) }),
    enabled: !!selectedUser,
  });
}
