import type { PropsWithChildren } from "react";
import { Loader } from "~/components/loader/loader";
import { ErrorText } from "~/components/error-text/error-text";
import { Button } from "~/components/button/button";
import styles from "./view.module.css";

type Props = PropsWithChildren<{
  isPending: boolean;
  isError: boolean;
  onRetry?: () => void;
}>;

export function View({ children, isPending, isError, onRetry }: Props) {
  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className={styles.error}>
        <ErrorText text="Something went wrong while loading." />
        {onRetry ? <Button onClick={onRetry}>Try again</Button> : null}
      </div>
    );
  }

  return children;
}
