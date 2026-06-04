import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./button.module.css";

type Props = PropsWithChildren<ComponentPropsWithoutRef<"button"> & { isSelected?: boolean }>;

export function Button({ children, className, isSelected, ...props }: Props) {
  return (
    <button className={`${styles.button} ${isSelected ? styles.selected : ""} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}
