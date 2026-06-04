import styles from "./todos-list.module.css";
import { TodoItem } from "./todo-item";
import { ErrorText } from "../error-text/error-text";
import { useTodos } from "./use-todos";

export function TodosList() {
  const { todos } = useTodos();

  if (!todos?.length) {
    return <ErrorText text="No TODOs found" />;
  }

  return (
    <ul className={styles.todosList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
