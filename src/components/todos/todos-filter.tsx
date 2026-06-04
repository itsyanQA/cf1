import { Checkbox } from "~/components/checkbox/checkbox";
import { useFilter } from "~/hooks/use-filter";
import styles from "./todos-filter.module.css";

export function TodosFilter() {
  const hideCompleted = useFilter("hideCompleted");
  const setHideCompleted = useFilter("setHideCompleted");

  return (
    <label className={styles.filter}>
      <Checkbox checked={hideCompleted} onChange={(e) => setHideCompleted(e.target.checked)} />
      Hide completed
    </label>
  );
}
