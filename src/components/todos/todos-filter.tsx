import { Checkbox } from "~/components/checkbox/checkbox";
import { useFilterStore } from "~/store/filter.store";
import styles from "./todos-filter.module.css";

export function TodosFilter() {
  const { hideCompleted, setHideCompleted } = useFilterStore();

  return (
    <label className={styles.filter}>
      <Checkbox
        checked={hideCompleted}
        onChange={(e) => setHideCompleted(e.target.checked)}
      />
      Hide completed
    </label>
  );
}
