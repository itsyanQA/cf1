import { UserCard } from "./user-card";
import styles from "./users-list.module.css";
import type { User } from "./users.types";

type Props = {
  users: Array<User>;
};

export function UsersList({ users }: Props) {
  if (!users || !users?.length) {
    return <span className={styles.usersNotFound}>No users found.</span>;
  }
  return (
    <div className={styles.usersList}>
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
