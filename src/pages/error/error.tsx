import { useRouteError, isRouteErrorResponse, Link } from "react-router";

export function Error() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : "Unexpected error";

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{message}</p>
      <Link to="/">Go home</Link>
    </div>
  );
}
