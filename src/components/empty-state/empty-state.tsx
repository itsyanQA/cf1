import type { ReactNode } from "react";
import styles from "./empty-state.module.css";

type Props = {
  title: string;
  subtitle?: ReactNode;
};

export function EmptyState({ title, subtitle }: Props) {
  return (
    <div className={styles.emptyState}>
      <span className={styles.title}>{title}</span>
      {subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null}
    </div>
  );
}
