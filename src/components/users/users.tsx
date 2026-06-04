import { View } from "~/components/view/view";
import { useGetUsers } from "./use-get-users";
import { UsersList } from "./users-list";

export function Users() {
  const { data, isPending, isError, refetch } = useGetUsers();

  return (
    <View isPending={isPending} isError={isError} onRetry={refetch}>
      <UsersList users={data} />
    </View>
  );
}
