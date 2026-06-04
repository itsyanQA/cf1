import { Checkbox } from "../checkbox/checkbox";
import styles from "./todo-item.module.css";
import type { Todo } from "./todos.types";

type Props = {
  todo: Todo;
};

export function TodoItem({ todo }: Props) {
  const { completed, title } = todo;

  return (
    <li
      className={`${styles.todoItem} ${completed ? `${styles.todoItemCompleted}` : ""}`}
    >
      <Checkbox checked={completed} disabled />
      <span className={styles.todoTitle}>{title}</span>
    </li>
  );
}
