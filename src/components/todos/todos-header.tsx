import { useSelectedUser } from "~/hooks/use-selected-user";
import { TodosFilter } from "./todos-filter";
import styles from "./todos-header.module.css";

export function TodosHeader() {
  const selectedUser = useSelectedUser("selectedUser");

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{selectedUser?.name}'s TODOs</h2>
      <TodosFilter />
    </div>
  );
}
