import { useQuery } from "@tanstack/react-query";
import { getUsers } from "~/api/users";
import { queryKey } from "~/config/api/api.types";

export function useGetUsers() {
  return useQuery({
    queryKey: [queryKey.getUsers],
    queryFn: getUsers,
  });
}
