import { Link } from "react-router";

export function NotFound() {
  return (
    <div>
      <h1>404 — Page Not Found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
