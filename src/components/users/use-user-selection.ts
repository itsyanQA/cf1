import type { User } from "./users.types";
import { useSelectedUser } from "~/hooks/use-selected-user";
import { useFilter } from "~/hooks/use-filter";
import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";

export function useUserSelection(user: User) {
  const selectedUser = useSelectedUser("selectedUser");
  const setSelectedUser = useSelectedUser("setSelectedUser");
  const setHideCompleted = useFilter("setHideCompleted");
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
