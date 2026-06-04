import { View } from "~/components/view/view";
import { useGetUserTodos } from "./use-get-user-todos";
import { TodosHeader } from "./todos-header";
import { TodosList } from "./todos-list";
import styles from "./todos-content.module.css";

export function TodosContent() {
  const { isPending, isError, refetch } = useGetUserTodos();

  return (
    <View isPending={isPending} isError={isError} onRetry={refetch}>
      <div className={styles.todosContent}>
        <TodosHeader />
        <TodosList />
      </div>
    </View>
  );
}
