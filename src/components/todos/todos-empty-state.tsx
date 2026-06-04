import { EmptyState } from "~/components/empty-state/empty-state";

export function TodosEmptyState() {
  return <EmptyState title="No user selected" subtitle={`Click "Show TODOs" on any user card`} />;
}
