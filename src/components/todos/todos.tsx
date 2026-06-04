import { useUserStore } from "~/store/user.store";
import { TodosEmptyState } from "./todos-empty-state";
import { TodosContent } from "./todos-content";

export function Todos() {
  const selectedUser = useUserStore((s) => s.selectedUser);

  if (!selectedUser) {
    return <TodosEmptyState />;
  }

  return <TodosContent />;
}
