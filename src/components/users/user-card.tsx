import styles from "./user-card.module.css";
import type { User } from "./users.types";
import { Button } from "../button/button";
import { useUserSelection } from "./use-user-selection";

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  const { username, name } = user || {};
  const { isSelected, handleSelectUser } = useUserSelection(user);
  const buttonText = isSelected ? "Hide TODOs" : "Show TODOs";

  return (
    <li
      className={`${styles.userCard} ${isSelected ? styles.userCardSelected : ""}`}
    >
      <div className={styles.userInfo}>
        <span className={styles.username}>{username}</span>
        <span className={styles.name}>{name}</span>
      </div>
      <Button onClick={handleSelectUser}>{buttonText}</Button>
    </li>
  );
}
