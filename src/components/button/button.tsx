import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./button.module.css";

type Props = PropsWithChildren<ComponentPropsWithoutRef<"button">>;

export function Button({ children, className, ...props }: Props) {
  return (
    <button className={`${styles.button} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}
