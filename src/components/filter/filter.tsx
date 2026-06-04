import { useFilterStore } from "~/store/filter.store";
import styles from "./filter.module.css";

export function Filter() {
  const { hideCompleted, setHideCompleted } = useFilterStore();

  return (
    <div className={styles.filter}>
      <h2 className={styles.filterTitle}>Filter:</h2>
      <div className={styles.filterContainer}>
        <span className={styles.filterLabel}>Hide Completed</span>
        <input
          className={styles.filterInput}
          type="checkbox"
          checked={hideCompleted}
          onChange={(e) => setHideCompleted(e.target.checked)}
        />
      </div>
    </div>
  );
}
