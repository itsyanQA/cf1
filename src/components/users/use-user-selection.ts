import type { User } from "./users.types";
import { useUserStore } from "~/store/user.store";
import { useFilterStore } from "~/store/filter.store";
import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";

export function useUserSelection(user: User) {
  const selectedUser = useUserStore((s) => s.selectedUser);
  const setSelectedUser = useUserStore((s) => s.setSelectedUser);
  const setHideCompleted = useFilterStore((s) => s.setHideCompleted);
  const isSelected = pipe(
    selectedUser,
    O.fromNullable,
    O.exists((selected) => selected.id === user.id),
  );

  const handleSelectUser = () => {
    setSelectedUser(
      pipe(
        user,
        O.fromNullable,
        O.chain((u) => (isSelected ? O.none : O.some(u))),
        O.toNullable,
      ),
    );
    setHideCompleted(false);
  };

  return { isSelected, handleSelectUser };
}
