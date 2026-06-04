import styles from "./todos-list.module.css";
import { TodoItem } from "./todo-item";
import { useGetUserTodos } from "./use-get-user-todos";
import { useFilterStore } from "~/store/filter.store";

export function TodosList() {
  const { data } = useGetUserTodos();
  const hideCompleted = useFilterStore((s) => s.hideCompleted);

  const todos = hideCompleted ? data?.filter((t) => !t.completed) : data;

  if (!todos?.length) {
    return <div>No TODOs found.</div>;
  }

  return (
    <ul className={styles.todosList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
