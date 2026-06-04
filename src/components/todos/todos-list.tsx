import styles from "./todos-list.module.css";
import { TodoItem } from "./todo-item";
import { EmptyState } from "~/components/empty-state/empty-state";
import { useTodos } from "./use-todos";

export function TodosList() {
  const { todos, isFilteredEmpty } = useTodos();

  if (!todos?.length) {
    return isFilteredEmpty ? (
      <EmptyState title="No incomplete TODOs" subtitle={`All TODOs are completed — uncheck "Hide completed" to see them.`} />
    ) : (
      <EmptyState title="No TODOs found" />
    );
  }

  return (
    <ul className={styles.todosList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
