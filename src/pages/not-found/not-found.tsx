import styles from "./not-found.module.css";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404 — Page Not Found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
