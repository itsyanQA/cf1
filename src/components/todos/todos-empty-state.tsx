import styles from "./todos-empty-state.module.css";

export function TodosEmptyState() {
  return (
    <div className={styles.todosEmptyState}>
      <span className={styles.todosEmptyStateTitle}>No user selected</span>
      <span className={styles.todosEmptyStateSubtitle}>Click "Show TODOs" on any user card</span>
    </div>
  );
}
