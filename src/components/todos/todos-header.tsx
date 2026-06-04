import { useStore } from "zustand/react";
import { useUserStore } from "~/store/user.store";
import { TodosFilter } from "./todos-filter";
import styles from "./todos-content.module.css";

export function TodosHeader() {
  const selectedUser = useStore(useUserStore, (s) => s.selectedUser);

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{selectedUser?.name}'s TODOs</h2>
      <TodosFilter />
    </div>
  );
}
