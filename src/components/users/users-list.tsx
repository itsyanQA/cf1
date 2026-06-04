import { EmptyState } from "~/components/empty-state/empty-state";
import { UserCard } from "./user-card";
import styles from "./users-list.module.css";
import type { User } from "./users.types";

type Props = {
  users: Array<User> | undefined;
};

export function UsersList({ users }: Props) {
  if (!users || !users?.length) {
    return <EmptyState title="No users found." />;
  }

  return (
    <ul className={styles.usersList}>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </ul>
  );
}
