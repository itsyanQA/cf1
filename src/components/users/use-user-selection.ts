import { useUserStore } from "~/store/user.store";
import type { User } from "./users.types";

export function useUserSelection(user: User) {
  const isSelected = useUserStore((s) => s.selectedUser?.id === user.id);

  const handleSelectUser = () => {
    useUserStore.setState((state) => ({
      selectedUser: state.selectedUser?.id === user.id ? null : user,
    }));
  };

  return { isSelected, handleSelectUser };
}
