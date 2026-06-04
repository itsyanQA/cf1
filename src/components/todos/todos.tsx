import { useSelectedUser } from "~/hooks/use-selected-user";
import { TodosEmptyState } from "./todos-empty-state";
import { TodosContent } from "./todos-content";

export function Todos() {
  const selectedUser = useSelectedUser("selectedUser");

  if (!selectedUser) {
    return <TodosEmptyState />;
  }

  return <TodosContent />;
}
