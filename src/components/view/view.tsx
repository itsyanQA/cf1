import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { Loader } from "~/components/loader/loader";
import { routes } from "~/config/routes/routes";

type Props = PropsWithChildren<{
  isPending: boolean;
  isError: boolean;
}>;

export function View({ children, isPending, isError }: Props) {
  if (isPending) {
    return <Loader />;
  } else if (isError) {
    return <Navigate to={routes.error} />;
  }

  return children;
}
