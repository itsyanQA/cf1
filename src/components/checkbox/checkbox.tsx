import type { ComponentPropsWithoutRef } from "react";
import styles from "./checkbox.module.css";

type Props = ComponentPropsWithoutRef<"input">;

export function Checkbox({ className, ...props }: Props) {
  return (
    <input
      type="checkbox"
      className={`${styles.checkbox} ${className ?? ""}`}
      {...props}
    />
  );
}
