import { Checkbox } from "~/components/checkbox/checkbox";
import { useTodosFilter } from "./use-todos-filter";
import styles from "./todos-filter.module.css";

export function TodosFilter() {
  const { hideCompleted, handleHideCompleted } = useTodosFilter();

  return (
    <label className={styles.filter}>
      <Checkbox checked={hideCompleted} onChange={handleHideCompleted} />
      Hide completed
    </label>
  );
}
