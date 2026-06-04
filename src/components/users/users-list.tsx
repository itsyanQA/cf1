import { ErrorText } from "~/components/error-text/error-text";
import { UserCard } from "./user-card";
import styles from "./users-list.module.css";
import type { User } from "./users.types";

type Props = {
  users: Array<User> | undefined;
};

export function UsersList({ users }: Props) {
  if (!users || !users?.length) {
    return <ErrorText text="No users found." />;
  }

  return (
    <div className={styles.usersList}>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}
