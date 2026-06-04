import styles from "./Error.module.css";
import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { getErrorMessage } from "../not-found/not-found.utils";
import { routes } from "~/config/routes/routes";

export function Error() {
  const error: unknown = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.errorContainer}>
        <h1>
          {error.status} — {error.statusText}
        </h1>
        <p>{error.data?.message || "An unexpected error occurred."}</p>
        <Link to={routes.home}>Go home</Link>
      </div>
    );
  }

  const errorMessage = getErrorMessage(error);

  return (
    <div className={styles.errorContainer}>
      <h1>Something went wrong</h1>
      <p>{errorMessage}</p>
      <Link to={routes.home}>Go home</Link>
    </div>
  );
}
