import { View } from "~/components/view/view";
import { useGetUsers } from "./use-get-users";
import { UsersList } from "./users-list";

export function Users() {
  const { data, isPending, isError } = useGetUsers();

  return (
    <View isPending={isPending} isError={isError}>
      <UsersList users={data} />
    </View>
  );
}
